import React from 'react';

interface SummaryProps {
    summaryList: string[];
}

const Summary: React.FC<SummaryProps> = ({ summaryList }) => {
    return (
        <section>
            <br />
            <h3 className="section-header">SUMMARY</h3>
            <hr />
            <div className="summary-text">
                {summaryList.length > 0 ? (
                    summaryList.map((summaryText, index) => (
                        <p key={index}>{summaryText}</p>
                    ))
                ) : (
                    <>
                    <p>Veniam raclette butcher readymade before they sold out DIY. Banh mi whatever mollit laboris man braid fam, praxis squid gastropub succulents schlitz williamsburg XOXO fit sriracha. Pickled edison bulb four dollar toast, humblebrag hella 8-bit sint Brooklyn in DSA food truck. Banh mi cronut tumblr, farm-to-table aesthetic deep v lumbersexual selfies polaroid nulla twee. Vegan neutra DSA next level master cleanse wolf. Snackwave synth 8-bit, aesthetic incididunt food truck fanny pack vice try-hard meggings dolor man bun craft beer nulla.</p>
                    <p>Franzen readymade flexitarian ascot unicorn. Pug narwhal voluptate fit venmo polaroid aesthetic kombucha mixtape pabst offal church-key tattooed. Wayfarers enim echo park yuccie narwhal bespoke kitsch microdosing mollit woke tofu. Quinoa cillum mlkshk semiotics kombucha live-edge lomo hammock in jean shorts street art. Tbh trust fund reprehenderit gluten-free pug dolore lyft asymmetrical portland voluptate sint hexagon. Ennui gatekeep mixtape eu marxism, franzen duis poke sint bespoke XOXO Brooklyn. VHS cloud bread +1 kitsch waistcoat.</p>
                    </>
                )}
            </div>
            <br />
        </section>
    );
};

export default Summary;
