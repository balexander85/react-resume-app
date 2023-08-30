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
        <section className="job-history">
            <h3 className="section-header">EXPERIENCE</h3>
            <hr />
            {jobs.map((job, index) => (
                <div key={index} className="job-entry">
                    <div className="job-header">
                        <p className="dates">{job.date}</p>
                        <p className="company bold">{job.company}</p>
                        <p className="job-location">{job.location}</p>
                    </div>
                    <p className="job-title bold">{job.title}</p>
                    <ul className="description-list">
                        {job.descriptionList.map((description, index) => (
                            <li key={index} className="description">{description}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default JobHistory;
