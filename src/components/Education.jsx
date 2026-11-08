import { useState } from "react";
import "../styles/Education.css";

function Education({ education, onEducationChange }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    onEducationChange(name, value);
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
      <h2>Educational Experience</h2>

      {isEditing ? (
        <form className="cv-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="school">School Name</label>
            <input
              type="text"
              id="school"
              name="school"
              value={education.school}
              onChange={handleChange}
              placeholder="Enter your school name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="degree">Title of Study</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              placeholder="Enter your qualification or course"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studyDate">Date of Study</label>
            <input
              type="text"
              id="studyDate"
              name="studyDate"
              value={education.studyDate}
              onChange={handleChange}
              placeholder="e.g. 2022 – 2026"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-info">
          <p>School: {education.school}</p>
          <p>Title of Study: {education.degree}</p>
          <p>Date of Study: {education.studyDate}</p>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}

export default Education;