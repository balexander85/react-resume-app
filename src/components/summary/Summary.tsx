import React from 'react';
import SectionHeader from '../SectionHeader';

interface SummaryProps {
    summaryList?: string[];
}

const Summary = ({ summaryList } : SummaryProps) => {
    return summaryList && summaryList.length > 0 ? (
        <section data-testid="summary">
            <SectionHeader name={'SUMMARY'} />
            <div className='summary-text'>
                {summaryList.map((summaryText, index) => (
                    <p key={index}>{summaryText}</p>
                ))}
            </div>
        </section>
    ) : null;
};

export default Summary;
