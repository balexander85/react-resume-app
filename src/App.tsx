import React from 'react';
import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContactSX contact={contactInfo} />
      <Summary summaryList={summaryText} />
      <JobHistory jobs={jobHistory} />
      <EducationSX educationList={educationHistory} />
      <Skills skillsList={skillsList} />
    </div>
  );
}

export default App;
