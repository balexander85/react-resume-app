import candidate from "./candidate.json";
import ContactHeader, {defaultName} from "./Contact";
import {render, screen} from "@testing-library/react";
import React from "react";
import App from "./App";


test('renders contact name in app', () => {
    const contactName = candidate.contact.name ? candidate.contact.name : defaultName;
    const regex = RegExp(contactName, 'i')
    render(<App/>);
    const contactNameElement = screen.getByText(regex);
    expect(contactNameElement).toBeInTheDocument();
});

test('renders contact name ContactHeader', () => {
    const contactName = candidate.contact.name ? candidate.contact.name : defaultName;
    const regex = RegExp(contactName, 'i')
    render(<ContactHeader contact={candidate.contact}/>);
    const contactNameElement = screen.getByText(regex);
    expect(contactNameElement).toBeInTheDocument();
});

test('renders title for default linkedIn value', () => {
    candidate.contact.linkedIn = 'https://www.linkedin.com';
    render(<ContactHeader contact={candidate.contact}/>);
    const linkedInElement = screen.getByText('LinkedIn');
    expect(linkedInElement.title).toEqual('To customize your LinkedIn link, you can either update the \'linkedin\' entry in the candidate.json file with your actual LinkedIn profile URL or remove the default \'https://www.linkedin.com\' value from the \'linkedin\' entry to remove the LinkedIn link.')
});

test('does NOT render title for non default linkedIn value', () => {
    candidate.contact.linkedIn = 'https://www.linkedin.com/in/brian-alexander-962a6326/';
    render(<ContactHeader contact={candidate.contact}/>);
    const linkedInElement = screen.getByText('LinkedIn');
    expect(linkedInElement.title).toEqual('');
});