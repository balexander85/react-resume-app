import React from 'react';
import './App.css';
import Summary from './Summary';
import JobHistory from './JobHistory';
import EducationSX from './Education';
import Skills from "./Skills";
import {summaryText, jobHistory, educationHistory, skillsList, contactInfo} from './tempConstants';
import ContactSX from "./Contact";

function App() {
  return (
    <div className="App">
      <ContactSX contact={contactInfo} />
      <Summary summaryList={summaryText} />
      <JobHistory jobs={jobHistory} />
      <EducationSX educationList={educationHistory} />
      <Skills skillsList={skillsList} />
    </div>
  );
}

export default App;
