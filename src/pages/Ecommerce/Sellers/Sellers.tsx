import React, { useState, useMemo, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal } from "Common/DeleteModal";
import BreadCrumb from "Common/BreadCrumb";
import SellerChat from "./SellerChart";
import PaginationFile from "Common/PaginationFile";
import {
  getSellers as onGetSellers,
  addNewSellers as onAddNewSellers,
  // updateSellers as onUpdateSellers,
  deleteSellers as onDeleteSellers,
} from "slices/thunk";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Dropzone from "react-dropzone";

const Sellers = () => {
  document.title = "Sellers | Ramana - Admin & Dashboard Template";

  const dispatch = useDispatch<any>();

  const selectSellerList = createSelector(
    (state: any) => state.Ecommerce,
    (ecommerce) => ({
      sellerList: ecommerce.sellerList,
    })
  );

  const { sellerList } = useSelector(selectSellerList);

  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const pagination: boolean = true;
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [currentpages, setCurrentpages] = useState<any>();
  const [editData, setEditData] = useState<any>();
  const [delet, setDelet] = useState<boolean>(false);
  const [deleteId, setDeletId] = useState<number>();
  const [selectfeils, setSelectfeils] = useState<any>([]);
  // const id: number = Math.floor(Math.random() * (30 - 20)) + 20;
  // const data: any =
  //   id % 2 === 0
  //     ? [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  //     : [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89];
  // const color: any = id % 2 === 0 ? "danger" : "success";
  const perPageData = 8;

  //add seller
  const handleClose = () => {
    setShow(false);
    setEdit(false);
    setEditData(null);
    setSelectfeils(null);
  };
  const handleShow = () => setShow(true);

  //seller edit
  const handleEditShow = (item: any) => {
    let seller = item;
    setEdit(true);
    handleShow();
    setEditData({
      id: seller?.id,
      // vendorId: user.Id,
      // img: seller?.img,
      email: seller?.email,
      mobile: seller?.mobile,
      stock: seller?.stock,
      // revenue: seller?.revenue,
    });
    // setSelectfeils([seller?.img]);
  };

  //delete selller
  const handleDeleteClose = () => setDelet(false);
  const handleDelete = (id: any) => {
    setDelet(true);
    setDeletId(id);
  };

  const deleteModalItem = () => {
    handleDeleteClose();
    dispatch(onDeleteSellers(deleteId));
  };

  //search
  const handleSearchChange = (ele: any) => {
    let search = ele.target.value;
    if (search) {
      search = search.toLowerCase();
      setCurrentpages(
        sellerList.filter((data: any) =>
          data.name.toLowerCase().includes(search)
        )
      );
    } else {
      setCurrentpages(currentdata);
    }
  };

  const handleClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
  };
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;
  
  const currentdata = useMemo(
    () => sellerList.slice(indexOfFirst, indexOfLast),
    [sellerList, indexOfFirst, indexOfLast]
  );
  useEffect(() => {
    setCurrentpages(currentdata);
  }, [currentPage, currentdata]);

  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(sellerList?.length / perPageData); i++) {
    pageNumbers.push(i);
  }
  const handleprevPage = () => {
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };
  const handlenextPage = () => {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };
  useEffect(() => {
    if (pageNumbers.length && pageNumbers.length < currentPage) {
      setCurrentPage(pageNumbers.length);
    }
  }, [currentPage, pageNumbers.length]);

  useEffect(() => {
    dispatch(onGetSellers());
  }, [dispatch]);

  useEffect(() => {
    setCurrentpages(sellerList);
  }, [sellerList]);

  // const handleAcceptfiles = (files: any) => {
  //   const newImages = files?.map((file: any) => {
  //     return Object.assign(file, {
  //       priview: URL.createObjectURL(file),
  //     });
  //   });
  //   setSelectfeils([...selectfeils, ...newImages]);
  // };

  const formik: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      id: (editData && editData?.id) || "",
      // img: (editData && editData?.img) || "",
      email: editData?.email || "",
      mobile: editData?.mobile || "",
      status: editData?.status || "Active",
      // revenue: (editData?.revenue) || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter sub-vendor email"),
      mobile: Yup.string().required("Please Enter sub-vendor mobile"),
      // stock: Yup.string().required(
      //   "Please Enter Your Status(Active or Inactive)"
      // ),
      // revenue: Yup.string().required("Please Enter Your Revenue"),
    }),
    onSubmit: (values: any) => {
      // if (edit) {
      //   const updateSeller = {
      //     id: values?.id,
      //     // img: values?.img,
      //     email: values?.email,
      //     mobile: values?.mobile,
      //     status: values?.status,
      //     // revenue: values?.revenue,
      //   };
      //   dispatch(onUpdateSellers(updateSeller));
      //   formik.resetForm();
      // } else {
      const subVendor = {
        // id: id,
        // img: values["img"],
        email: values["email"],
        mobile: values["mobile"],
        status: values["status"],
        // revenue: values["revenue"],
        // chartdata: data,
        // chartColor: color,
      };
      console.log("subVendor", subVendor, values);
      dispatch(onAddNewSellers(subVendor));
      formik.resetForm();
      // }
      if (values === null) {
        handleShow();
      } else {
        handleClose();
      }
    },
  });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Sellers" pageTitle="Ecommerce" />
          <Row className="g-3 mb-4">
            <Col className="col-xxl-auto me-auto">
              <Button variant="primary" onClick={handleShow}>
                <i className="bi bi-plus-circle align-baseline me-1"></i> Add
                Sub-Vendor
              </Button>
            </Col>
            <Col xxl={2}>
              <div className="search-box">
                <Form.Control
                  type="text"
                  id="searchResultList"
                  autoComplete="off"
                  placeholder="Search for sellers ..."
                  onChange={(e: any) => handleSearchChange(e)}
                />{" "}
                <i className="ri-search-line search-icon"></i>
              </div>
            </Col>
            {/* <Col xxl={2}>
              <Form.Select>
                <option value="All">All</option>
                <option value="Computers & Electronics">
                  Computers & Electronics
                </option>
                <option value="Food Service">Food Service</option>
                <option value="Health & Medicine">Health & Medicine</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Retailer">Retailer</option>
              </Form.Select>
            </Col> */}
          </Row>
          <Row id="seller-list">
            {(currentpages || [])?.map((item: any) => {
              return (
                <Col lg={3} md={6} key={item.id}>
                  <Card>
                    <Card.Body>
                      <div className="text-end mb-3">
                        <button
                          type="button"
                          className="btn-close text-end"
                          onClick={() => handleDelete(item.id)}
                        ></button>
                      </div>
                      {/* <div className="avatar-md mx-auto">
                        <div className="avatar-title bg-light rounded">
                          <img
                            src={item.img?.priview}
                            alt=""
                            className="avatar-sm p-1"
                          />     <div className="avatar-md mx-auto">
                        <div className="avatar-title bg-light rounded">
                          <img
                            src={item.img?.priview}
                            alt=""
                            className="avatar-sm p-1"
                          />
                        </div>
                      </div>
                        </div>
                      </div> */}
                      <div className="text-center mt-4">
                        <Link to={"/apps-ecommerce-seller-overview"}>
                          <h5>{item.email}</h5>
                        </Link>
                        <p className="text-muted mb-0">{item.email}</p>
                      </div>
                    </Card.Body>
                    
                    <Row className=" g-0 text-center">
                    <Col xxl={4} lg={6} md={4}>
                        <Card.Body className="px-3 border-top border-bottom border-end border-dashed">
                          <h5 className="mb-1">{item.status}</h5>
                          <p className="text-muted text-truncate mb-0">
                        Status
                          </p>
                        </Card.Body>


                      
                      </Col>

                      <Col xxl={4} lg={6} md={4}>

                      <Card.Body className="px-3 border-top border-bottom border-end border-dashed">
                          <h5 className="mb-1">{item.userType}</h5>
                          <p className="text-muted text-truncate mb-0">
                     User Type
                          </p>
                        </Card.Body>
                    {/*     <Card.Body className="h-100 px-3 border-top border-bottom border-end border-dashed">
                          <SellerChat
                            data={item.chartdata}
                            dataColor={`["--tb-${item.chartColor}"]`}
                          />
                        </Card.Body> */}
                      </Col>
                      <Col xxl={4} lg={6} md={4}>
                        <Card.Body className="px-3 border-top border-bottom border-dashed">
                          <h5 className="mb-1">{item.mobile}</h5>
                          <p className="text-muted text-truncate mb-0">
                         Mobile
                          </p>
                        </Card.Body>
                      </Col>
                 {/*      <Col xxl={4} lg={6} md={4}> */}
                  
                    {/*   </Col> */}
                    </Row>
                    <Card.Body className="hstack gap-2">
                      {/* <Link
                        to={"/apps-ecommerce-seller-overview"}
                        className="btn btn-subtle-secondary w-100"
                      >
                        View Details
                      </Link> */}
                      {/* <Button
                        type="button"
                        variant="subtle-primary"
                        className="w-100"
                        onClick={() => handleEditShow(item)}
                      >
                        Edit
                      </Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {
            <PaginationFile
              className="mb-4"
              currentpages={currentpages}
              pagination={pagination}
              perPageData={perPageData}
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              handlenextPage={handlenextPage}
              handleClick={handleClick}
              handleprevPage={handleprevPage}
              estateList={sellerList}
            />
          }
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} centered className="zoomIn">
        <Modal.Header closeButton>
          <Modal.Title id="addSellerModalLabel">
            {edit ? "Edit seller" : "Add Seller"}
          </Modal.Title>
        </Modal.Header>
        <Form
          className="tablelist-form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Modal.Body>
            <div>
              <div className="mb-3">
                {formik.errors.img && formik.touched.img ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.img}
                  </Form.Control.Feedback>
                ) : null}
                <ul className="list-unstyled mb-0" id="dropzone-preview">
                  {(selectfeils || [])?.map((file: any, index: number) => {
                    return (
                      <li
                        className="mt-2 dz-processing dz-image-preview dz-success dz-complete"
                        key=""
                      >
                        <div className="border rounded">
                          <div className="d-flex p-2">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-sm bg-light rounded">
                                <img
                                  data-dz-thumbnail=""
                                  className="img-fluid rounded d-block"
                                  src={file.priview}
                                  alt={file.name}
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="pt-1">
                                <h5 className="fs-md mb-1" data-dz-name>
                                  {file.path}
                                </h5>
                                <p
                                  className="fs-sm text-muted mb-0"
                                  data-dz-size=""
                                >
                                  <strong>
                                    {file?.size?.toString()?.charAt(0)}
                                  </strong>{" "}
                                  KB
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
                                // onClick={() => {
                                //   const newImages = [...selectfeils];
                                //   newImages.splice(index, 1);
                                //   setSelectfeils(newImages);
                                // }}
                              >
                                Delete
                              </Button>{" "}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="email">
                  Sub-vendor email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Sub-Vendor email"
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="mobile">
                  Sub-vendor mobile <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="sub-vendor mobile"
                  value={formik.values.seller}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.mobile}
                />
                {formik.errors.mobile && formik.touched.mobile ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.mobile}
                  </Form.Control.Feedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="status">Status</Form.Label>

                <Form.Select
                  name="status"
                  id="seller-status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.status}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive </option>
                </Form.Select>
                {formik.errors.status && formik.touched.status ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.status}
                  </Form.Control.Feedback>
                ) : null}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-ghost-danger" onClick={handleClose}>
              <i className="bi bi-x-lg align-baseline me-1"></i> Close
            </Button>
            <Button variant="primary" className="submit-btn" type="submit">
              {/* {edit ? "Edit" : "Add"} */}Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <DeleteModal
        show={delet}
        handleClose={handleDeleteClose}
        deleteModalFunction={deleteModalItem}
      />
      <ToastContainer />
    </React.Fragment>
  );
};

export default Sellers;
