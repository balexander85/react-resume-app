import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import candidate from './candidate.json';
import { defaultName } from "./Contact";

test('renders contact name', () => {
    const contactName = candidate.contact.name ? candidate.contact.name : defaultName;
    const regex = RegExp(contactName, 'i')
    render(<App/>);
    const contactNameElement = screen.getByText(regex);
    expect(contactNameElement).toBeInTheDocument();
});
