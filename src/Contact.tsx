import React from 'react';

interface Contact {
    name: string
    location: string
    linkedIn: string
}

interface ContactProps {
    contact: Contact;
}

export const defaultName = 'Default Name';
export const defaultLocation = 'Default Location';

const ContactHeader: React.FC<ContactProps> = ({ contact }) => {
    const contactName = contact.name ? contact.name : defaultName;
    const contactLocation = contact.location ? contact.location : defaultLocation;
    document.title = `${contactName} | ${contactLocation}`;
    return (
        <section className='contact-info'>
            <div className='contact-name'>{contactName}</div>
            <div className='contact-location'>{contactLocation}</div>
            {contact.linkedIn &&
                (<div>
                        <a href={contact.linkedIn} target='_blank' rel='noreferrer'
                           title={contact.linkedIn === 'https://www.linkedin.com' ?
                               "To customize your LinkedIn link, you can either update the 'linkedin' entry " +
                               "in the candidate.json file with your actual LinkedIn profile URL or remove " +
                               "the default 'https://www.linkedin.com' value from the 'linkedin' entry to " +
                               "remove the LinkedIn link." : ''}
                        >
                            LinkedIn
                        </a>
                    </div>
                )}
        </section>
    );
};

export default ContactHeader;
