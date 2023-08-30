import React from 'react';

interface Education {
    degree: string;
    institution: string;
    date: string;
    location: string;
}

interface EducationProps {
    educationList: Education[];
}

const EducationSX: React.FC<EducationProps> = ({ educationList }) => {
    return (
        <section className="education">
            <h3 className="section-header">EDUCATION</h3>
            <hr />
            {educationList.map((education, index) => (
                <div key={index} className="education-entry">
                    <div className="education-header">
                        <p className="dates">{education.date}</p>
                        <p className="institution bold">{education.institution}</p>
                        <p className="job-location">{education.location}</p>
                    </div>
                    <p className="degree bold">{education.degree}</p>
                </div>
            ))}
            <br />
        </section>
    );
};

export default EducationSX;