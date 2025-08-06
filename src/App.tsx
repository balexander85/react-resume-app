import React from 'react';
import './App.css';
import Summary from './components/summary/Summary';
import JobHistory from './components/jobhistory/JobHistory';
import EducationComponent from './components/education/Education';
import Skills from './components/skills/Skills';
import ContactHeader from './components/contact/Contact';

import candidateData from './candidate.json';
import { Candidate } from './types/types';

function App() {
    const candidate: Candidate = candidateData;

    return (
        <main className='App'>
            <ContactHeader {...candidate.contact} />
            <Summary summaryList={candidate.summary} />
            {candidate.history && <JobHistory jobs={candidate.history} />}
            {candidate.education && <EducationComponent educationList={candidate.education}/>}
            {candidate.skills && <Skills skillsList={candidate.skills}/>}
        </main>
    );
}

export default App;
