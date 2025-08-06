import React from 'react';

interface SectionHeaderProps {
    name: string;
}

const SectionHeader = ({ name } : SectionHeaderProps) => {
    return (
        <>
            <h3 className="section-header">{name}</h3>
            <hr />
        </>
    );
};

export default SectionHeader;