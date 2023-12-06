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

const EducationSX: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <section className='education'>
      <SectionHeader name='education' />
      {educationList.length > 0 ? (
        educationList.map((education, index) => (
          <div key={index}>
            <div className='education-header'>
              <p>{education.date}</p>
              <p className='bold'>{education.institution}</p>
              <p>{education.location}</p>
            </div>
            <p className='bold'>{education.degree}</p>
          </div>
        ))) : (
        <div>
          <div className='education-header'>
            <p>Month YYYY - Month YYYY</p>
            <p className='bold'>Institution Name</p>
            <p>Institution Location</p>
          </div>
          <p className='bold'>Degree or Certificate Name</p>
        </div>
      )}
    </section>
  );
};

export default EducationSX;