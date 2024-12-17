import React, { useState } from "react";
import { Card, Form, Button, Col, Alert, Spinner } from "react-bootstrap";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
// import ParticlesAuth from "./ParticlesAuth";
import { newPasswordCreate } from "../../helpers/fakebackend_helper";

const PasswordCreate = () => {
  const [searchParams] = useSearchParams(); // Fetch email and otp from URL
  const navigate = useNavigate();

  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle form submission
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = searchParams.get("email");
    const otp = searchParams.get("otp");

    const password = (
      document.getElementById("password-input") as HTMLInputElement
    ).value;
    const confirmPassword = (
      document.getElementById("confirm-password-input") as HTMLInputElement
    ).value;

    // Validation: Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      // Make the API call with query params (email, otp) and form data (password)
      await newPasswordCreate({ email, otp, newPassword: password });
      setSuccess("Password reset successfully!");

      // Redirect to sign-in page after success
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || "Password reset failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <ParticlesAuth>
      <React.Fragment>
        <Col xxl={6} className="mx-auto">
          <Card className="mb-0 border-0 shadow-none">
            <Card.Body className="p-sm-5 m-lg-4">
              <div className="text-center">
                <h5 className="fs-3xl">Create New Password</h5>
                <p className="text-muted mb-5">
                  Your new password must be different from previous passwords.
                </p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <Form.Label htmlFor="password-input">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password-input"
                    className="pe-5 password-input"
                    placeholder="Enter password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                </div>

                <div className="mb-3">
                  <Form.Label htmlFor="confirm-password-input">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="confirm-password-input"
                    className="pe-5 password-input"
                    placeholder="Confirm password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-100 btn-primary"
                  disabled={isLoading}
                >
                  {isLoading && <Spinner size="sm" animation="border" />} Reset
                  Password
                </Button>
              </Form>

              <div className="mt-4 text-center">
                <p>
                  Wait, I remember my password...{" "}
                  <Link
                    to={process.env.PUBLIC_URL + "/signin"}
                    className="fw-semibold text-primary text-decoration-underline"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    // </ParticlesAuth>
  );
};

export default PasswordCreate;
