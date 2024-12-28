import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import {
  updateProfile,
  updateCompanyProfile,
  getUpdateProfile,
  getCompanyDetails,
} from "../../../helpers/fakebackend_helper"; // Import your helper function
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  dob: string;
  city: string;
  country: string;
  zipCode: string;
  address: string;
  companyName: string;
  companyRegisteredNumber: string;
  companyMobileNumber: string;
  companyEmailAddress: string;
  companyRegisteredDate: string;
  companyAddress: string;
  companyCity: string;
  companyCountry: string;
  companyZipcode: string;
}

const Personal = () => {
  const [profileData, setProfileData] = useState<FormData | null>(null);
  const [companyData, setCompanyData] = useState<FormData | null>(null);
  const selectAccount = createSelector(
    (state: any) => state.Login,
    (login) => ({
      user: login.user,
    })
  );

  const { user } = useSelector(selectAccount);

  console.log({ user });
  // Step 1: Initialize form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    dob: "",
    city: "",
    country: "",
    zipCode: "",
    address: "",
    companyName: "",
    companyRegisteredNumber: "",
    companyRegisteredDate: "",
    companyMobileNumber: "",
    companyEmailAddress: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    companyZipcode: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const profileResponse = await getUpdateProfile(user.id);
      const companyResponse = await getCompanyDetails(user.id);

      setProfileData(profileResponse.data);
      setCompanyData(companyResponse.data[0]);
    };

    fetchData();
  }, [user.id]);

  useEffect(() => {
    if (profileData) {
      setFormData((prevState) => ({
        ...prevState, // Retain previous state properties
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        mobile: profileData.mobile || "",

        dob: profileData.dob || "",
        city: profileData.city || "",
        country: profileData.country || "",
        zipCode: profileData.zipCode || "",
        address: profileData.address || "",
      }));
    }
  }, [profileData]);

  useEffect(() => {
    if (companyData) {
      setFormData((prevState) => ({
        ...prevState,// Retain previous state properties
        companyName: companyData.companyName || "",
        companyRegisteredNumber: companyData.companyRegisteredNumber || "",
        companyMobileNumber: companyData.companyMobileNumber || "",
        companyEmailAddress: companyData.companyEmailAddress || "",
        companyRegisteredDate: companyData.companyRegisteredDate || "",
        companyAddress: companyData.companyAddress || "",
        companyCity: companyData.companyCity || "",
        companyCountry: companyData.companyCountry || "",
        companyZipcode: companyData.companyZipcode || "",
        // video:""
      }));
    }
  }, [companyData]);

  // Step 2: Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle DatePicker change for DOB
  const handleDateChange = (date: Date[]) => {
    setFormData((prev) => ({ ...prev, dob: date[0]?.toISOString() || "" }));
  };

  // Handle DatePicker change for company registered Date
  const handleCompanyRegsDateChange = (registDate: Date[]) => {
    setFormData((prev) => ({
      ...prev,
      companyRegisteredDate: registDate[0]?.toISOString() || "",
    }));
  };
  //   const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { id, value } = e.target;
  //     setFormData((prev) => ({ ...prev, zipCode: formData.zipCode }));
  //   };

  // Step 3: Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 4: Call updateProfile with formData
    try {
      const response = await updateProfile(formData);
      if (response) {
        alert("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 4: Call updateProfile with formData
    try {
      const response = await updateCompanyProfile(formData);
      if (response) {
        alert("Company details updated successfully");
      } else {
        alert("Failed to update Company details");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  console.log("profileData", profileData);
  console.log("companyData", companyData);
  console.log("formData",formData)
  return (
    <React.Fragment>
      <Col xl={9}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="d-flex align-items-center flex-wrap gap-2 mb-4">
            <div className="col-md order-1">
              <Nav
                variant="pills"
                className="arrow-navtabs nav-secondary gap-2 flex-grow-1"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" href="#personalDetails">
                    Personal Details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" href="#companyDetails">
                    Company Details
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-md-auto order-lg-2">
              <Link to="/pages-profile-settings" className="btn btn-secondary">
                <i className="bi bi-pencil-square align-baseline me-1"></i> Edit
                Profile
              </Link>
            </div>
          </Row>
          <Tab.Content>
            <Tab.Pane eventKey="first" id="personalDetails">
              <Card>
                <Card.Header>
                  <h6 className="card-title mb-0">Personal Details</h6>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="firstName">
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="lastName">Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            // value={profileData.lastName || ""}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="mobile">Mobile</Form.Label>
                          <Form.Control
                            type="number"
                            id="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="email">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            id="email"
                            value={user?.email || ""}
                            // onChange={handleChange}
                            disabled
                            // placeholder="Enter your email"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="dob">Date of Birth</Form.Label>
                          <Flatpickr
                            className="form-control"
                            value={formData.dob}
                            onChange={handleDateChange}
                            options={{ dateFormat: "d M, Y" }}
                            placeholder="Select date"
                            defaultValue=""
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="city">City</Form.Label>
                          <Form.Control
                            type="text"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="country">Country</Form.Label>
                          <Form.Control
                            type="text"
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
                          <Form.Control
                            type="text"
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Enter Zip Code"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="address">Address</Form.Label>
                          <Form.Control
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your Address here"
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                          <Button type="submit" variant="primary">
                            Submit
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-subtle-danger"
                          >
                            Cancel
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>

          <Tab.Content>
            <Tab.Pane eventKey="second" id="companyDetails">
              <Card>
                <Card.Header>
                  <h6 className="card-title mb-0">Company Details</h6>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleCompanySubmit}>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyName">
                            Company Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyRegisteredNumber">
                            Company Registered Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyRegisteredNumber"
                            value={formData.companyRegisteredNumber}
                            onChange={handleChange}
                            placeholder="Enter your company registered number"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyMobileNumber">
                            Company Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="number"
                            id="companyMobileNumber"
                            value={formData.companyMobileNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="email">
                            Company Email Address
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyEmailAddress"
                            value={formData.companyEmailAddress}
                            onChange={handleChange}
                            placeholder="Enter your company email"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyRegisteredDate">
                            Company Registered Date
                          </Form.Label>
                          <Flatpickr
                            className="form-control"
                            value={formData.companyRegisteredDate}
                            onChange={handleCompanyRegsDateChange}
                            options={{ dateFormat: "d M, Y" }}
                            placeholder="Select date"
                            defaultValue=""
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyAddress">
                            Company Address
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyAddress"
                            value={formData.companyAddress}
                            onChange={handleChange}
                            placeholder="Enter your Address here"
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyCity">
                            Company City
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyCity"
                            value={formData.companyCity}
                            onChange={handleChange}
                            placeholder="City"
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyCountry">
                            Country
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyCountry"
                            value={formData.companyCountry}
                            onChange={handleChange}
                            placeholder="Country"
                          />
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="companyZipcode">
                            Zip Code
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="companyZipcode"
                            value={formData.companyZipcode}
                            onChange={handleChange}
                            placeholder="Enter Zip Code"
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                          <Button type="submit" variant="primary">
                            Submit
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-subtle-danger"
                          >
                            Cancel
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
    </React.Fragment>
  );
};

export default Personal;


