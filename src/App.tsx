import React from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './Summary';
import JobHistory from './JobHistory';
import EducationSX from './Education';
import Skills from "./Skills";
import { summaryText, jobHistory, educationHistory, skillsList } from './tempConstants';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <code className="contact-name">Brian Alexander</code>*/}
      {/*  <code>Austin, TX</code>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="http://www.linkedin.com/pub/brian-alexander/26/a63/962"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    LinkedIn*/}
      {/*  </a>*/}
      {/*</header>*/}
      <table id="contact_info">
          <tbody>
              <tr>
                  <td className="dates" id="contact_name">Brian Alexander</td>
              </tr>
              <tr>
                  <td className="dates">
                      <p>
                        Austin, TX<br />
                        {/*214.762.5564<br />*/}
                        {/*briandanielalexander@gmail.com*/}
                      </p>
                  </td>
              </tr>
              <tr>
                  <td>
                    <a href="http://www.linkedin.com/pub/brian-alexander/26/a63/962" target="_blank">http://www.linkedin.com/pub/brian-alexander/26/a63/962</a>
                  </td>
              </tr>
          </tbody>
      </table>
      <br />
      <Summary summaryList={summaryText} />
      <br />
      <JobHistory jobs={jobHistory} />
      <EducationSX educationList={educationHistory} />
      <Skills skillsList={skillsList} />
    </div>
  );
}

export default App;
