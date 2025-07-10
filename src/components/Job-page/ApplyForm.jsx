import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ApplyModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: null,
    skills: "",
    experience: "",
    city: "",
    country: "India",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = "Invalid mobile number";

    if (!formData.resume) newErrors.resume = "Resume is required";
    else if (!formData.resume.name.endsWith(".pdf")) newErrors.resume = "Only PDF files allowed";

    if (!formData.experience) newErrors.experience = "Experience is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      alert("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        resume: null,
        skills: "",
        experience: "",
        city: "",
        country: "India",
      });
      setErrors({});
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply for Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Enter your full name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              isInvalid={!!errors.mobile}
              placeholder="e.g. 9876543210"
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.mobile}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Resume (.pdf only)</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleChange}
              isInvalid={!!errors.resume}
            />
            <Form.Control.Feedback type="invalid">
              {errors.resume}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Key Skills</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Form.Select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              isInvalid={!!errors.experience}
              required
            >
              <option value="">Select Experience</option>
              <option value="0">0 Years</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5+ Years</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.experience}
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="w-100 mt-2">
            Submit Application
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyModal;

