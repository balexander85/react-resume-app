import React from 'react';
import { titleTextDefaultLinkedIn } from '../../constants';

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
    <header className='contact-info'>
      <h1 className='contact-name'>{contactName}</h1>
      <div className='contact-location'>{contactLocation}</div>
      {contact.linkedIn &&
                (<div>
                  <a href={contact.linkedIn} target='_blank' rel='noreferrer'
                    title={contact.linkedIn === 'https://www.linkedin.com' ? titleTextDefaultLinkedIn : ''}
                  >
                            LinkedIn
                  </a>
                </div>
                )}
    </header>
  );
};

export default ContactHeader;
