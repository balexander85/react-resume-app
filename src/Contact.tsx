import React from 'react';

interface Contact {
    name: string
    location: string
    linkedIn: string
}
interface ContactProps {
    contact: Contact;
}

const defaultName =  "Default Name"
const defaultLocation = "Default Location";

const ContactSX: React.FC<ContactProps> = ({ contact }) => {
    const contactName = contact.name ? contact.name : defaultName;
    const contactLocation = contact.location ? contact.location : defaultLocation;
    document.title = `${contactName} | ${contactLocation}`;
    return (
        <section className="contact-info">
            <div className="contact-name">{contactName}</div>
            <div className="contact-location">{contactLocation}</div>
            {contact.linkedIn &&
                (<div className="contact-linkedin">
                    <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            )}
        </section>
    );
};

export default ContactSX;
