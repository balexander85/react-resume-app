import React from 'react';
import './App.css';
import Summary from './components/summary/Summary';
import JobHistory from './components/jobhistory/JobHistory';
import EducationSX from './components/education/Education';
import Skills from './components/skills/Skills';
import candidate from './candidate.json';
import ContactHeader from './components/contact/Contact';

function App() {
  return (
    <main className='App'>
      <ContactHeader contact={candidate.contact} />
      <Summary summaryList={candidate.summary} />
      <JobHistory jobs={candidate.history} />
      <EducationSX educationList={candidate.education} />
      <Skills skillsList={candidate.skills} />
    </main>
  );
}

export default App;
