import React from 'react';
import SectionHeader from '../SectionHeader';

export interface Job {
    title: string;
    company: string;
    date: string;
    location: string;
    descriptionList?: string[];
}

interface JobHistoryProps {
    jobs: Job[];
}

const JobEntry = (
    { company, date, location, title, descriptionList } : Job
) => {
    return (
        <div className='job-entry'>
            <div className='job-header'>
                <p>{date}</p>
                <p className='bold'>{company}</p>
                <p>{location}</p>
            </div>
            <p className='bold'>{title}</p>
            {descriptionList && descriptionList.length == 1 && (
                <div className={'job-entry-description'}>{descriptionList[0]}</div>
            )}
            <ul>
                {descriptionList && descriptionList.length > 1 &&
                descriptionList.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </div>
    );
};

const JobHistory= ({ jobs } : JobHistoryProps) => {
    return jobs.length > 0 ? (
        <section>
            <SectionHeader name={'EXPERIENCE'} />
            {(jobs.map((job, index) => (
                <JobEntry key={index} { ...job } />))
            )}
        </section>
    ): null;
};

export default JobHistory;
