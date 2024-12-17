import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { ProductInformation } from "./ProductInfo";
import { Productgeneralinformation } from "./GeneralInfo";
import BreadCrumb from "Common/BreadCrumb";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNewProductWithDetailedInfo } from "helpers/fakebackend_helper";

const CreateProduct = () => {
  document.title = "Add Product | Ramana - Admin & Dashboard Template";

  const [selectfeils, setSelectfeils] = useState([]);
  const [selectgalleryfeils, setSelectgalleryfeils] = useState([]);

  const formik = useFormik({
    initialValues: {
      // Product info
      productTitle: "",
      categories: "",
      productType: "",
      shortDesc: "",
      brand: "",
      unit: "",
      tags: "",
      exchangeable: false,
      refundable: false,
      
      
      productDesc: "",

      // product general info
      manufacturerName: "",
      manufacturerBrand: "",
      stocks: "",
      price: "",
      discount: "",
      status: "",
      visibility: "",
    },
    validationSchema: Yup.object({
      // Product info
      productTitle: Yup.string().required("Please Enter Your Product Title"),
      categories: Yup.string().required("Please Enter Your Product Category"),
      productType: Yup.string().required("Please Enter Your Product Type"),
      shortDesc: Yup.string().required("Please Enter Your Product Short discription"),
      brand: Yup.string().required("Please Enter Your Product Brand"),
      // unit: Yup.string().required("Please Enter Your Product Unit"),
      // tags: Yup.string().required("Please Enter Your Product tags"),
      // product general info
      manufacturerName: Yup.string().required("Please Enter manufacturer name"),
      manufacturerBrand: Yup.string().required(
        "Please Enter manufacturer brand"
      ),
      productDesc: Yup.string().required("Please Enter Your Product Description in detail"),
      exchangeable: Yup.boolean().optional(),
      refundable: Yup.boolean().optional(),
      stocks: Yup.string().required("Please Enter product Stocks"),
      price: Yup.string().required("Please Enter Your Product Price"),
      discount: Yup.string().required("Please Enter Your Product Discount"),
      status: Yup.string().required("Please Enter Your Product Status"),
      visibility: Yup.string().required("Please Enter Your Product Visibility"),
    }),
    onSubmit: (values) => {
      console.log("in fomik submit");
      handleProductCreation(values);
      
    },

  });

  useEffect(()=>{
    console.log("formik.errors", formik.errors);
  },[formik.errors]);

  const handleProductCreation = async (data: unknown) => {
    try {
      console.log("in form handleProductCreation")
      const response = await addNewProductWithDetailedInfo(data);
      console.log(response);
      alert("Product added successfully.")
    } catch (error) {
      console.error(error);
      alert("Failed to add Product.")
    }
  };

  const handleAcceptfiles = (files: any) => {
    files?.map((file: any) => {
      return Object.assign(file, {
        priview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      });
    });
    setSelectfeils(files);
  };

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handleAcceptgalleryfiles = (files: any) => {
    files?.map((file: any) => {
      return Object.assign(file, {
        priview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      });
    });
    setSelectgalleryfeils(files);
  };

  //ck editor
  const editorRef: any = useRef();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor
        .create(document.querySelector("#editor"), {
          // Configuration options
          // ...
        })
        .then((editor: any) => {
          // Editor instance is created successfully
          editorRef.current = editor;
        })
        .catch((error: any) => {
          // Handle initialization error
        });
    }
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Product" pageTitle="Ecommerce" />
          <Form
            action="#"
            onSubmit={(e) => {
              console.log("in form submit");
              e.preventDefault();
              formik.handleSubmit();
              return false;
            }}
          >
            <ProductInformation formik={formik} />
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col xxl={4}>
                        <Card.Title className="mb-3">Description</Card.Title>
                        <p className="text-muted">
                          {/* Product Information refers to any information held by an
                        organization about the products it produces, buys, sells
                        or distributes. */}
                        </p>
                      </Col>
                      <Col xxl={8}>
                        <Form.Label>
                          Product Description{" "}
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <CKEditor

                          editor={ClassicEditor}
                          data={formik.values.productDesc}
                        onChange={(event: any, editor: { getData: () => any; })=> {
                          formik.setFieldValue("productDesc",editor.getData(),true);

                          // formik.handleChange({value: editor.getData(), name: "",type: "text"})
                        }}
                        
                        // onBlur={formik.handleBlur}
                        
                          // data="<p>Hello from CKEditor 5!</p>"
                          onReady={(editor: any) => {
                            // You can store the "editor" and use it when needed.
                            editorRef.current = editor;
                            console.log("Editor is ready to use!", editor);
                          }}
                        />
                          <Form.Control.Feedback type="invalid">
                                                    {" "}
                                                    {formik.errors.productDesc}{" "}
                                                  </Form.Control.Feedback>
                                          
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xxl={4}>
                      <Card.Title className="mb-3">Images</Card.Title>
                      <p className="text-muted">
                        Product Information refers to any information held by an
                        organization about the products it produces, buys, sells
                        or distributes.
                      </p>
                    </Col>
                    <Col xxl={8}>
                      <div className="mb-3">
                        <Form.Label>
                          Product Images <span className="text-danger">*</span>
                        </Form.Label>
                        <Dropzone
                          onDrop={(acceptfiles: any) => {
                            handleAcceptfiles(acceptfiles);
                          }}
                        >
                          {({ getRootProps }: any) => (
                            <div className="dropzone dz-clickable text-center">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <div className="mb-3">
                                  <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                </div>
                                <h4>
                                  Drop product images here or click to upload.
                                </h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <ul
                          className="list-unstyled mb-0"
                          id="dropzone-preview"
                        >
                          {(selectfeils || [])?.map(
                            (file: any, index: number) => {
                              return (
                                <li className="mt-2 dz-processing dz-image-preview dz-success dz-complete">
                                  <div className="border rounded">
                                    <div className="d-flex p-2">
                                      <div className="flex-shrink-0 me-3">
                                        <div className="avatar-sm bg-light rounded">
                                          <img
                                            className="img-fluid rounded d-block"
                                            src={file.priview}
                                            alt={file.name}
                                          />
                                        </div>
                                      </div>
                                      <div className="flex-grow-1">
                                        <div className="pt-1">
                                          <h5
                                            className="fs-md mb-1"
                                            data-dz-name
                                          >
                                            {file.path}
                                          </h5>
                                          <p
                                            className="fs-sm text-muted mb-0"
                                            data-dz-size
                                          >
                                            <strong>
                                              {file.formattedSize}
                                            </strong>
                                          </p>
                                          <strong
                                            className="error text-danger"
                                            data-dz-errormessage
                                          ></strong>
                                        </div>
                                      </div>
                                      <div className="flex-shrink-0 ms-3">
                                        <Button
                                          variant="danger"
                                          size="sm"
                                          onClick={() => {
                                            const newImages = [...selectfeils];
                                            newImages.splice(index, 1);
                                            setSelectfeils(newImages);
                                          }}
                                        >
                                          Delete
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>
                        <div className="mb-3">
                          <Form.Label>
                            Gallery Images{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Dropzone
                            onDrop={(acceptfiles: any) => {
                              handleAcceptgalleryfiles(acceptfiles);
                            }}
                          >
                            {({ getRootProps }: any) => (
                              <div className="dropzone dz-clickable text-center">
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <div className="mb-3">
                                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                  </div>
                                  <h4>
                                    Drop gallery images here or click to upload.
                                  </h4>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                          <ul
                            className="list-unstyled mb-0"
                            id="dropzone-preview"
                          >
                            {(selectgalleryfeils || [])?.map(
                              (file: any, index: number) => {
                                return (
                                  <li className="mt-2 dz-processing dz-image-preview dz-success dz-complete">
                                    <div className="border rounded">
                                      <div className="d-flex p-2">
                                        <div className="flex-shrink-0 me-3">
                                          <div className="avatar-sm bg-light rounded">
                                            <img
                                              className="img-fluid rounded d-block"
                                              src={file.priview}
                                              alt={file.name}
                                            />
                                          </div>
                                        </div>
                                        <div className="flex-grow-1">
                                          <div className="pt-1">
                                            <h5
                                              className="fs-md mb-1"
                                              data-dz-name
                                            >
                                              {file.path}
                                            </h5>
                                            <p
                                              className="fs-sm text-muted mb-0"
                                              data-dz-size
                                            >
                                              <strong>
                                                {file.formattedSize}
                                              </strong>
                                            </p>
                                            <strong
                                              className="error text-danger"
                                              data-dz-errormessage
                                            ></strong>
                                          </div>
                                        </div>
                                        <div className="flex-shrink-0 ms-3">
                                          <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => {
                                              const newImages = [
                                                ...selectfeils,
                                              ];
                                              newImages.splice(index, 1);
                                              setSelectfeils(newImages);
                                            }}
                                          >
                                            Delete
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
            <Productgeneralinformation formik={formik} />
            {/* Ramana-ReactJs_v1.0/Ramana_ReactJs/Admin/src/pages/Ecommerce/Product/productscript.tsx */}
            <div className="hstack gap-2 justify-content-end mb-3">
              {/* Ramana-ReactJs_v1.0/Ramana_ReactJs/Admin/src/pages/Ecommerce/Product/productscript.tsx */}
              <Button  variant="danger"  onClick={()=>formik.resetForm()}>
                <i className="ph-x align-middle"></i> Cancel
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
