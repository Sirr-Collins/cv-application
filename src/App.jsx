import { useState } from "react";
import "./styles/App.css";
import CVPreview from "./components/CVPreview";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    studyDate: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  function handleGeneralInfoChange(name, value) {
    setGeneralInfo((previousInfo) => ({
      ...previousInfo,
      [name]: value,
    }));
  }

  function handleEducationChange(name, value) {
    setEducation((previousEducation) => ({
      ...previousEducation,
      [name]: value,
    }));
  }

  function handleExperienceChange(name, value) {
    setExperience((previousExperience) => ({
      ...previousExperience,
      [name]: value,
    }));
  }

  return (
  <main>
    <header className="app-header">
      <span>RESUME BUILDER</span>
      <h1>CV Application</h1>
      <p>Create, edit and preview your professional CV.</p>
    </header>

    <div className="cv-container">
      <div className="cv-editor">
        <GeneralInfo
          generalInfo={generalInfo}
          onGeneralInfoChange={handleGeneralInfoChange}
        />

        <Education
          education={education}
          onEducationChange={handleEducationChange}
        />

        <PracticalExperience
          experience={experience}
          onExperienceChange={handleExperienceChange}
        />
      </div>

      <CVPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  </main>
);
}
export default App;