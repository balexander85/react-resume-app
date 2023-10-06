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
            {jobs.length > 0 ? (
                jobs.map((job, index) => (
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
                    </div>))
            ) : (
                <>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                        <div className="job-entry">
                            <div className="job-header">
                                <p className="dates">Month YYYY - Month YYYY</p>
                                <p className="company bold">Company Name</p>
                                <p className="job-location">Job Location</p>
                            </div>
                            <p className="job-title bold">Default Job Title</p>
                            <ul className="description-list">
                                <li className="description">Veniam raclette butcher readymade before they sold out DIY.</li>
                                <li>Pickled edison bulb four dollar toast, humblebrag hella 8-bit sint Brooklyn in DSA food truck.</li>
                                <li className="description">Banh mi whatever mollit laboris man braid fam, praxis squid gastropub succulents schlitz williamsburg XOXO fit sriracha.</li>
                            </ul>
                        </div>
                        ))
                    }
                </>
            )}
        </section>
    );
};

export default JobHistory;
