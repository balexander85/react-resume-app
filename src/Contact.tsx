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
            <div className="contact-name">{contact.name ? contact.name : "Default Name"}</div>
            <div className="contact-location">{contact.location ? contact.location : "Default Location"}</div>
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
