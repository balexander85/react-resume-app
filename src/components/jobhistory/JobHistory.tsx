import React from 'react';
import SectionHeader from '../SectionHeader';
import { Job } from '../../types/types';

interface JobHistoryProps {
    jobs: Job[];
}

interface JobEntryProps {
    job: Job;
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

const JobEntry = ({ job }: JobEntryProps) => {
    return (
        <div>
            <div className={'company-name'}>{job.company}</div>
            <div className={'job-title'}>{job.title}</div>
            <div className={'date-range'}>{job.date}</div>
            <div className={'job-location'}>{job.location}</div>
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
                <div className={'company-section'} key={groupIndex}>
                    {group.map((job: Job, jobIndex: number) => (
                        <JobEntry key={jobIndex} job={job} />
                    ))}
                    {parsedJobs.length != groupIndex + 1 &&
                      <hr className={'company-divider'} />}
                </div>
            ))}
        </section>
    ): null;
};

export default JobHistory;
