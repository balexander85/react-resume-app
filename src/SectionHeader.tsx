import React from 'react';

interface SectionHeaderProps {
    name: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ name }) => {
  return (
    <>
      <h3 className="section-header">{name}</h3>
      <hr />
    </>
  );
};

export default SectionHeader;