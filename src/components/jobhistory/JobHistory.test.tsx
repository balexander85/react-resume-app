import React from 'react';
import { render, screen } from '@testing-library/react';
import JobHistory, { Job } from './JobHistory';

describe('JobHistory component', () => {
    test('renders null for section header if no jobs', () => {
        render(<JobHistory jobs={[]} />);
        const sectionHeader = screen.queryByText(/experience/i);
        expect(sectionHeader).toBe(null);
    });

    test('renders provided job entries', () => {
        const jobs: Job[] = [
            {
                title: 'Software Developer',
                company: 'Tech Co.',
                date: 'January 2022 - Present',
                location: 'City, Country',
                descriptionList: [
                    'Developed and maintained web applications.',
                    'Collaborated with cross-functional teams.',
                ],
            },
            {
                title: 'Quality Assurance Analyst',
                company: 'QA Inc.',
                date: 'July 2019 - December 2021',
                location: 'Another City, Another Country',
                descriptionList: [
                    'Tested software for bugs and issues.',
                    'Automated test cases for improved efficiency.',
                ],
            },
        ];

        render(<JobHistory jobs={jobs} />);

        // Adjust the following expectations based on your actual job content
        const jobTitle1 = screen.getByText(/software developer/i);
        const jobCompany1 = screen.getByText(/tech co./i);
        const jobLocation1 = screen.getByText(/city, country/i);
        const jobDate1 = screen.getByText(/january 2022 - present/i);
        const jobDescription1 = screen.getByText(/developed and maintained web applications/i);

        expect(jobTitle1).toBeInTheDocument();
        expect(jobCompany1).toBeInTheDocument();
        expect(jobLocation1).toBeInTheDocument();
        expect(jobDate1).toBeInTheDocument();
        expect(jobDescription1).toBeInTheDocument();

        const jobTitle2 = screen.getByText(/quality assurance analyst/i);
        const jobCompany2 = screen.getByText(/qa inc./i);
        const jobLocation2 = screen.getByText(/another city, another country/i);
        const jobDate2 = screen.getByText(/july 2019 - december 2021/i);
        const jobDescription2 = screen.getByText(/tested software for bugs and issues/i);

        expect(jobTitle2).toBeInTheDocument();
        expect(jobCompany2).toBeInTheDocument();
        expect(jobLocation2).toBeInTheDocument();
        expect(jobDate2).toBeInTheDocument();
        expect(jobDescription2).toBeInTheDocument();
    });
});