
import { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

return (
  <div className="form-container">
    <h2 className="form-title">Simple Form</h2>

    <form className="simple-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>

    {submittedData && (
      <div className="submitted-data">
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong> {submittedData.name}</p>
        <p><strong>Email:</strong> {submittedData.email}</p>
        <p><strong>Message:</strong> {submittedData.message}</p>
      </div>
    )}
  </div>
);
}

export default SimpleForm;
