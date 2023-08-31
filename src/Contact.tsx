import React from 'react';

interface Contact {
    name: string
    location: string
    linkedIn: string
}
interface ContactProps {
    contact: Contact;
}

const ContactSX: React.FC<ContactProps> = ({ contact }) => {
    return (
        <section className="contact-info">
            <div className="contact-name">{contact.name}</div>
            <div className="contact-location">{contact.location}</div>
            <div className="contact-linkedin">
                <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default ContactSX;
