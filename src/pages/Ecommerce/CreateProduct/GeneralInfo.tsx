import React from "react";
import { InputGroup, Card, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

// Todo: update types
type IProps = any;

export const Productgeneralinformation = ({ formik }: IProps) => {
  //   const formik = useFormik({
  //     initialValues: {
  //       manufacturerName: "",
  //       manufacturerBrand: "",
  //       stocks: "",
  //       price: "",
  //       discount: "",
  //       status: "",
  //       visibility: "",
  //     },
  //     validationSchema: Yup.object({
  //       manufacturerName: Yup.string().required("Please Enter Your Product Name"),
  //       manufacturerBrand: Yup.string().required(
  //         "Please Enter Your Product Brand"
  //       ),
  //       stocks: Yup.string().required("Please Enter Your Product Stocks"),
  //       price: Yup.string().required("Please Enter Your Product Price"),
  //       discount: Yup.string().required("Please Enter Your Product Discount"),
  //       status: Yup.string().required("Please Enter Your Product Status"),
  //       visibility: Yup.string().required("Please Enter Your Product Visibility"),
  //     }),
  //     onSubmit: (values) => {},
  //   });
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xxl={4}>
                  <Card.Title className="mb-3">General Info</Card.Title>
                  <p className="text-muted mb-0">
                    An informational product can be a digital book (or e-book),
                    a digital report, a white paper, a piece of software, audio
                    or video files, a website, an e-zine or a newsletter.
                  </p>
                </Col>
                <Col xxl={8}>
                  <Row className="gy-3">
                    <Col lg={6}>
                      <div>
                        <Form.Label htmlFor="manufacturer-name-input">
                          Manufacturer Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="manufacturerName"
                          name="manufacturerName"
                          placeholder="Enter manufacturer name"
                          value={formik.values.manufacturerName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.manufacturerName}
                        />
                        {formik.errors.manufacturerName &&
                        formik.touched.manufacturerName ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.manufacturerName}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <Form.Label htmlFor="manufacturer-brand-input">
                          Manufacturer Brand
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="manufacturerBrand"
                          name="manufacturerBrand"
                          placeholder="Enter manufacturer brand"
                          value={formik.values.manufacturerBrand}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.manufacturerBrand}
                        />
                        {formik.errors.manufacturerBrand &&
                        formik.touched.manufacturerBrand ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.manufacturerBrand}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <Form.Label htmlFor="stocks">
                          Stocks <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="stocks"
                          name="stocks"
                          placeholder="Stocks"
                          value={formik.values.stocks}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.stocks}
                        />
                        {formik.errors.stocks && formik.touched.stocks ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.stocks}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <Form.Label htmlFor="product-price-input">
                          Price
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="product-price-addon">
                            $
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Enter price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={!!formik.errors.price}
                          />
                          {formik.errors.price && formik.touched.price ? (
                            <Form.Control.Feedback type="invalid">
                              {" "}
                              {formik.errors.price}{" "}
                            </Form.Control.Feedback>
                          ) : null}
                        </InputGroup>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <Form.Label htmlFor="product-discount-input">
                          Discount
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text id="product-discount-addon">
                            %
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            id="discount"
                            name="discount"
                            placeholder="Enter discount"
                            value={formik.values.discount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={!!formik.errors.discount}
                          />
                          {formik.errors.discount && formik.touched.discount ? (
                            <Form.Control.Feedback type="invalid">
                              {" "}
                              {formik.errors.discount}{" "}
                            </Form.Control.Feedback>
                          ) : null}
                        </InputGroup>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <Form.Label htmlFor="choices-publish-status-input">
                          Status
                        </Form.Label>
                        <Form.Select
                          id="publish-status"
                          name="status"
                          value={formik.values.status}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.status}
                        >
                          <option defaultValue="Draft">Draft</option>
                          <option defaultValue="Published">Published</option>
                          <option defaultValue="Scheduled">Scheduled</option>
                        </Form.Select>
                        {formik.errors.status && formik.touched.status ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.status}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <Form.Label htmlFor="choices-publish-visibility-input">
                          Visibility
                        </Form.Label>
                        <Form.Select
                          id="visibility"
                          name="visibility"
                          value={formik.values.visibility}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={!!formik.errors.visibility}
                        >
                          <option defaultValue="Hidden">Hidden</option>
                          <option defaultValue="Public">Public</option>
                        </Form.Select>
                        {formik.errors.visibility &&
                        formik.touched.visibility ? (
                          <Form.Control.Feedback type="invalid">
                            {" "}
                            {formik.errors.visibility}{" "}
                          </Form.Control.Feedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
