import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo({ generalInfo, onGeneralInfoChange }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    onGeneralInfoChange(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <section className="cv-section">
      <h2>General Information</h2>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-info">
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
export default GeneralInfo;