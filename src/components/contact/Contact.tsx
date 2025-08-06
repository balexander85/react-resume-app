import React from 'react';

import { Contact } from '../../types/types';

export const defaultName = 'Default Name';
export const defaultLocation = 'Default Location';

const ContactHeader = ({ name, location, linkedIn } : Contact) => {
    const contactName = name ? name : defaultName;
    const contactLocation = location ? location : defaultLocation;
    document.title = `${contactName} | ${contactLocation}`;
    return (
        <header className='contact-info'>
            <h1 className='contact-name'>{contactName}</h1>
            <div className='contact-location'>{contactLocation}</div>
            {!!linkedIn &&
                (<div className={'no-print'}>
                    <a href={linkedIn} target='_blank' rel='noreferrer'>
                            LinkedIn
                    </a>
                </div>
                )}
        </header>
    );
};

export default ContactHeader;
