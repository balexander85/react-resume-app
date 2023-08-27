import React from 'react';

interface SummaryProps {
    summaryList: string[];
}

const Summary: React.FC<SummaryProps> = ({ summaryList }) => {
    return (
        <div>
            <h3 className="section-header">SUMMARY</h3>
            <hr />
            <div className="summary-text">
            {summaryList.map((summaryText, index) => (
                <p key={index} >{summaryText}</p>
            ))}
            </div>
        </div>
    );
};

export default Summary;
