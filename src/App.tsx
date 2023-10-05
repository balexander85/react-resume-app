import React from 'react';
import './App.css';
import Summary from './Summary';
import JobHistory from './JobHistory';
import EducationSX from './Education';
import Skills from "./Skills";
import candidate from './candidate.json';
import ContactSX from "./Contact";

function App() {
  return (
    <div className="App">
      <ContactSX contact={candidate.contact} />
      <Summary summaryList={candidate.summary} />
      <JobHistory jobs={candidate.history} />
      <EducationSX educationList={candidate.education} />
      <Skills skillsList={candidate.skills} />
    </div>
  );
}

export default App;
