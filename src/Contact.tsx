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
        <section>
            <table id="contact_info" className="contact-info">
                <tbody>
                <tr>
                    <td className="contact-name">{contact.name}</td>
                </tr>
                <tr>
                    <td>
                        <p>{contact.location}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href={contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ContactSX;
