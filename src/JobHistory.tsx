import React from 'react';

interface Job {
    title: string;
    company: string;
    date: string;
    location: string;
    descriptionList: string[];
}

interface JobHistoryProps {
    jobs: Job[];
}

const JobHistory: React.FC<JobHistoryProps> = ({ jobs }) => {
    return (
        <div className="job-history">
            <h3 className="section-header">EXPERIENCE</h3>
            <hr />
                {jobs.map((job, index) => (
                    <div key={index}>
                        <table>
                            <tbody>
                            <tr>
                                <td className="date">{job.date}</td>
                                <td className="company">{job.company}</td>
                                <td className="job-location">{job.location}</td>
                            </tr>
                            <tr><td className="job-title">{job.title}</td></tr>
                            </tbody>
                        </table>
                        <ul className="description-list">
                        {job.descriptionList.map((description, index) => (
                            <li className="description">{description}</li>
                        ))}
                        </ul>
                        <br />
                    </div>
                ))}
        </div>
    );
};

export default JobHistory;
