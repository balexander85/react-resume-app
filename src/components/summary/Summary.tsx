import React from 'react';
import SectionHeader from '../SectionHeader';

interface SummaryProps {
    summaryList: string[];
}

const Summary: React.FC<SummaryProps> = ({ summaryList }) => {
  return (
    <section>
      <SectionHeader name={'SUMMARY'} />
      <div className='summary-text'>
        {summaryList.length > 0 ? (
          summaryList.map((summaryText, index) => (
            <p key={index}>{summaryText}</p>
          ))
        ) : (
          <p>Veniam raclette butcher readymade before they sold out DIY. Banh mi whatever mollit laboris
            man braid fam, praxis squid gastropub succulents schlitz williamsburg XOXO fit sriracha.
            Pickled edison bulb four dollar toast, humblebrag hella 8-bit sint Brooklyn in DSA food truck.
            Banh mi cronut tumblr, farm-to-table aesthetic deep v lumbersexual selfies polaroid nulla twee.
            Vegan neutra DSA next level master cleanse wolf. Snackwave synth 8-bit, aesthetic incididunt
            food truck fanny pack vice try-hard meggings dolor man bun craft beer nulla.
          </p>
        )}
      </div>
    </section>
  );
};

export default Summary;
