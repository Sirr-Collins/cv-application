import { useState } from "react";
import "../styles/PracticalExperience.css";

function PracticalExperience({ experience, onExperienceChange }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    onExperienceChange(name, value);
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
      <h2>Practical Experience</h2>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={experience.company}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position Title</label>
            <input
              type="text"
              id="position"
              name="position"
              value={experience.position}
              onChange={handleChange}
              placeholder="Enter your job title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">
              Main Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={experience.responsibilities}
              onChange={handleChange}
              placeholder="Describe your main responsibilities"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-info">
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>
            Responsibilities: {experience.responsibilities}
          </p>
          <p>Start Date: {experience.startDate}</p>
          <p>
            End Date: {experience.endDate || "Present"}
          </p>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
export default PracticalExperience;