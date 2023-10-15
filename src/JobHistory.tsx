import React from 'react';
import SectionHeader from './SectionHeader';

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
        <section>
            <SectionHeader name={'EXPERIENCE'} />
            {jobs.length > 0 ? (
                jobs.map((job, index) => (
                    <div key={index} className='job-entry'>
                        <div className='job-header'>
                            <p>{job.date}</p>
                            <p className='bold'>{job.company}</p>
                            <p>{job.location}</p>
                        </div>
                        <p className='bold'>{job.title}</p>
                        <ul>
                            {job.descriptionList.map((description, index) => (
                                <li key={index}>{description}</li>
                            ))}
                        </ul>
                    </div>))
            ) : (
                <>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                        <div className="job-entry">
                            <div className="job-header">
                                <p>Month YYYY - Month YYYY</p>
                                <p className="bold">Company Name</p>
                                <p>Job Location</p>
                            </div>
                            <p className="bold">Default Job Title</p>
                            <ul>
                                <li>Veniam raclette butcher readymade before they sold out DIY.</li>
                                <li>Pickled edison bulb four dollar toast, humblebrag hella 8-bit sint Brooklyn in DSA food truck.</li>
                                <li>Banh mi whatever mollit laboris man braid fam, praxis squid gastropub succulents schlitz williamsburg XOXO fit sriracha.</li>
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
