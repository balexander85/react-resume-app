import React from 'react';
import SectionHeader from '../SectionHeader';

interface Education {
    degree: string;
    institution: string;
    date: string;
    location: string;
}

interface EducationProps {
    educationList: Education[];
}

const EducationEntry = ({ date, institution, location, degree }: Education) => {
    return (
        <div>
            <div className='education-header'>
                <p>{date}</p>
                <p className='bold'>{institution}</p>
                <p>{location}</p>
            </div>
            <p className='bold'>{degree}</p>
        </div>
    );
};

const Education = ({ educationList } : EducationProps) => {
    return educationList.length > 0 ? (
        <section data-testid="education" className={'education'}>
            <SectionHeader name={'EDUCATION'} />
            {educationList.map((education, index) => (
                <EducationEntry key={index} {...education} />
            ))}
        </section>
    ) : null;
};

export default Education;