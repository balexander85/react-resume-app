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
        <div className="education">
            <h3 className="section-header">EDUCATION</h3>
            <hr />
            <table>
                <tbody>
                    {educationList.map((education, index) => (
                        <div>
                            <tr key={index}>
                                <td className="dates">{education.date}</td>
                                <td className="institution">{education.institution}</td>
                                <td className="job-location">{education.location}</td>
                            </tr>
                            <tr>
                                <td className="job-title">{education.degree}</td>
                            </tr>
                        </div>
                    ))}
                </tbody>
            </table>
            <br />
        </div>
    );
};

export default EducationSX;