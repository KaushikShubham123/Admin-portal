import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

// Todo: update types
type IProps = any;

export const ProductInformation = ({ formik }: IProps) => {
  // const formik = useFormik({
  //   initialValues: {
  //     productTitle: "",
  //     categories: "",
  //     productType: "",
  //     shortDesc: "",
  //     brand: "",
  //     unit: "",
  //     tags: "",
  //   },
  //   validationSchema: Yup.object({
  //     productTitle: Yup.string().required("Please Enter Your Product Name"),
  //     categories: Yup.string().required("Please Enter Your Product Category"),
  //     productType: Yup.string().required("Please Enter Your Product Type"),
  //     shortDesc: Yup.string().required("Please Enter Your Product Price"),
  //     brand: Yup.string().required("Please Enter Your Product Brand"),
  //     unit: Yup.string().required("Please Enter Your Product Unit"),
  //     tags: Yup.string().required("Please Enter Your Product Visibility"),
  //   }),
  //   onSubmit: (values) => {},
  // });
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xxl={4}>
                  <Card.Title as="h5" className="mb-3">
                    Product Information
                  </Card.Title>
                  <p className="text-muted">
                    Product Information refers to any information held by an
                    organisation about the products it produces, buys, sells or
                    distributes.
                  </p>
                </Col>
                <Col xxl={8}>
                  {/* <Form> */}
                  <div className="mb-3">
                    <Form.Label htmlFor="productTitle">
                      Product Title <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="productTitle"
                      name="productTitle"
                      placeholder="Enter product title"
                      value={formik.values.productTitle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={!!formik.errors.productTitle}
                    />
                    {formik.errors.productTitle &&
                    formik.touched.productTitle ? (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productTitle}
                      </Form.Control.Feedback>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="productCategories">
                      Categories <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      name="categories"
                      id="categories"
                      value={formik.values.categories}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={!!formik.errors.categories}
                    >
                      <option defaultValue="">Select categories</option>
                      <option defaultValue="Appliances">Appliances</option>
                      <option defaultValue="Automotive Accessories">
                        Automotive Accessories
                      </option>
                      <option defaultValue="Electronics">Electronics</option>
                      <option defaultValue="Fashion">Machines</option>
                      <option defaultValue="Machine parts">
                        Machine Spare Parts{" "}
                      </option>
                      <option defaultValue="Furniture">Furniture</option>
                    </Form.Select>
                    {formik.errors.categories && formik.touched.categories ? (
                      <Form.Control.Feedback type="invalid">
                        {" "}
                        {formik.errors.categories}{" "}
                      </Form.Control.Feedback>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="productType">
                      Product Type <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      name="productType"
                      id="productType"
                      value={formik.values.productType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={!!formik.errors.productType}
                    >
                      {/* <input type="search" name="search_terms" /> */}
                      <option defaultValue="">Select Type</option>
                      <option defaultValue="Classified">Classified</option>
                      <option defaultValue="Simple">Simple</option>
                    </Form.Select>
                    {formik.errors.productType && formik.touched.productType ? (
                      <Form.Control.Feedback type="invalid">
                        {" "}
                        {formik.errors.productType}{" "}
                      </Form.Control.Feedback>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="shortDesc">
                      Short Description <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="shortDesc"
                      name="shortDesc"
                      placeholder="Must enter minimum of a 100 characters"
                      value={formik.values.shortDesc}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={!!formik.errors.shortDesc}
                    />
                    {formik.errors.shortDesc && formik.touched.shortDesc ? (
                      <Form.Control.Feedback type="invalid">
                        {" "}
                        {formik.errors.shortDesc}{" "}
                      </Form.Control.Feedback>
                    ) : null}
                  </div>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="brand">
                          Brand <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="brand"
                          name="brand"
                          placeholder="Enter brand"
                          value={formik.values.brand}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.brand}
                        />
                        {formik.errors.brand && formik.touched.brand ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.brand}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="unit">
                          Unit <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          className="form-control"
                          id="unit"
                          name="unit"
                          // placeholder="Enter brand"
                          value={formik.values.unit}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.unit}
                        >
                          {/* <Form.Control type="text" name="search_terms" /> */}
                          <option defaultValue="">Select Unit</option>
                          <option defaultValue="Classified">Kilogram</option>
                          <option defaultValue="Simple">Pieces</option>
                        </Form.Select>
                        {formik.errors.unit && formik.touched.unit ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.unit}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <Form.Label htmlFor="productTags">Tags</Form.Label>
                    <Form.Select
           
           name="tags"       
                    value={formik.values.tags}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.tags}
                    >
                      <option value="Machines">Machines</option>
                      <option value="Machine Spare Parts">
                        Machine Spare Parts
                      </option>
                      <option value="Electronics">Electronics</option>
                      <option value="Woollen">Woollen</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.tags}{" "}
                          </Form.Control.Feedback>
                  </div>
                  <Row>
                    <Col lg={6}>
                      <Form.Check
                        label="Exchangeable"
                        type="checkbox"
                        className="form-switch mb-3"
                        id="exchangeable"
                        name="exchangeable"
                        value={formik.values.exchangeable}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.exchangeable}
                      ></Form.Check>
                    </Col>
                    <Col lg={6}>
                      <Form.Check
                        label="Refundable"
                        type="checkbox"
                        className="form-switch mb-3"
                        id="refundable"
                        name="refundable"
                        value={formik.values.refundable}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refundable}
                      ></Form.Check>
                    </Col>
                  </Row>
                  {/* </Form> */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
