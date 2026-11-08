import "../styles/CVPreview.css";

function formatDate(date) {
  if (!date) return "";

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function CVPreview({ generalInfo, education, experience }) {
  return (
    <section className="cv-preview">
      <header className="preview-header">
        <h1>{generalInfo.name || "Your Name"}</h1>
        <div className="preview-contact">
            {generalInfo.email && <p>{generalInfo.email}</p>}
            {generalInfo.phone && <p>{generalInfo.phone}</p>}
        </div>
      </header>

      {(education.school || education.degree || education.studyDate) && (
        <div className="preview-section">
            <h2>Education</h2>

            {education.school && <h3>{education.school}</h3>}
            {education.degree && <p>{education.degree}</p>}
            {education.studyDate && <p>{education.studyDate}</p>}
        </div>
        )}

      {(experience.company ||
        experience.position ||
        experience.responsibilities ||
        experience.startDate ||
        experience.endDate) && (
        <div className="preview-section">
            <h2>Professional Experience</h2>

            {experience.position && <h3>{experience.position}</h3>}
            {experience.company && <p>{experience.company}</p>}
            {experience.responsibilities && <p>{experience.responsibilities}</p>}

            {(experience.startDate || experience.endDate) && (
                <p>
                    {formatDate(experience.startDate)}
                    {experience.startDate && " — "}
                    {formatDate(experience.endDate) ||
                    (experience.startDate ? "Present" : "")}
                </p>
                )}
        </div>
        )}
    </section>
  );
}
export default CVPreview;