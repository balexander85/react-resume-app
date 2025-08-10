import React from 'react';
import SectionHeader from '../SectionHeader';
import { Job } from '../../types/types';

interface JobHistoryProps {
    jobs: Job[];
}

interface JobEntryProps {
    job: Job;
    showCompany: boolean;
}

interface JobDescriptionProps {
    descriptionList: string[];
}

const groupJobs = (jobs: Job[]): Job[][] => {
    const groupedJobs: Job[][] = [];
    let currentCompany = null;
    let currentGroup: Job[] = [];

    for (const job of jobs) {
        if (job.company === currentCompany) {
            currentGroup.push(job);
        } else {
            if (currentGroup.length > 0) {
                groupedJobs.push(currentGroup);
            }
            currentCompany = job.company;
            currentGroup = [job];
        }
    }

    if (currentGroup.length > 0) {
        groupedJobs.push(currentGroup);
    }
    return groupedJobs;
};

const JobDescription = ({ descriptionList }: JobDescriptionProps) => {
    if (!descriptionList || descriptionList.length === 0) return null;

    return descriptionList.length > 0
        ? descriptionList.length === 1
            ? <div className={'job-description'}>{descriptionList[0]}</div>
            :
            <div>
                <ul>{descriptionList.map((description, index) => <li key={index}>{description}</li>)}</ul>
            </div>
        : null;
};

const JobEntry = ({ job, showCompany }: JobEntryProps) => {
    return (
        <div>
            <div className='job-header'>
                <p>{job.date}</p>
                {showCompany && <p className="bold">{job.company}</p>}
                <p>{job.location}</p>
            </div>
            <p className='bold'>{job.title}</p>
            <JobDescription descriptionList={job.descriptionList} />
        </div>
    );
};

const JobHistory= ({ jobs } : JobHistoryProps) => {
    const parsedJobs = groupJobs(jobs);

    return parsedJobs.length > 0 ? (
        <section data-testid="experience">
            <SectionHeader name={'EXPERIENCE'} />
            {parsedJobs.map((group: Job[], groupIndex: number) => (
                <div key={groupIndex}>
                    {/* Display Company Name (only for the first job in the group) */}
                    {group.map((job: Job, jobIndex: number) => (
                        jobIndex === 0 ? (
                            <JobEntry key={jobIndex} job={job} showCompany={true} />
                        ) : (
                            <JobEntry key={jobIndex} job={job} showCompany={false} />
                        )
                    ))}
                </div>
            ))}
        </section>
    ): null;
};

export default JobHistory;
