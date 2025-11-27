import React, { useState } from "react";
import "./StudentForm.css";

function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // ✅ Return false if there are errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Student Registered!\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}`);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        course: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Select Course:
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">--Choose a course--</option>
            <option value="B.TECH Computer Science">B.TECH Computer Science</option>
            <option value="M.C.A">M.C.A</option>
            <option value="M.B.A">M.B.A</option>
            <option value="B.E IT">B.E IT</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegistrationForm;
