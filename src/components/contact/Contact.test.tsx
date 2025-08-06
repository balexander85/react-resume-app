import * as candidate from '../../candidate.json';
import ContactHeader, { defaultName } from './Contact';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';

describe('<Contact />', () => {

    test('renders contact name in app', () => {
        const contactName = candidate.contact.name ? candidate.contact.name : defaultName;
        const regex = RegExp(contactName, 'i');
        render(<App/>);
        const contactNameElement = screen.getByText(regex);
        expect(contactNameElement).toBeInTheDocument();
    });

    test('renders contact name ContactHeader', () => {
        const contactName = candidate.contact.name ? candidate.contact.name : defaultName;
        const regex = RegExp(contactName, 'i');
        render(<ContactHeader contact={candidate.contact}/>);
        const contactNameElement = screen.getByText(regex);
        expect(contactNameElement).toBeInTheDocument();
    });

    test('renders linkedIn hyperlink when value configured', () => {
        const testLinkedIn = 'https://www.linkedin.com/in/brian-alexander-962a6326/';
        candidate.contact.linkedIn = testLinkedIn;
        render(<ContactHeader contact={candidate.contact}/>);
        const linkedInElement = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedInElement).toHaveAttribute('href', testLinkedIn);
    });

    test('does not render linkedIn hyperlink when value is not configured', () => {
        candidate.contact.linkedIn = '';
        render(<ContactHeader contact={candidate.contact}/>);
        const linkedInElement = screen.queryByText('LinkedIn');
        expect(linkedInElement).not.toBeInTheDocument();
    });
});

