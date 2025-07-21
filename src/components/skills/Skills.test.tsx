import { render, screen } from '@testing-library/react';
import React from 'react';
import Skills from './Skills';

test('skills component renders with provided skills', () => {
    const skillsList = [
        {
            type: 'Programming Languages',
            items: 'JavaScript, Python, Java',
        },
        {
            type: 'Frameworks',
            items: 'React, Django',
        },
    ];
    render(<Skills skillsList={skillsList} />);

    skillsList.forEach((skill) => {
        const typeElement = screen.getByText(`${skill.type}:`);
        const itemsElement = screen.getByText(skill.items);
        expect(typeElement).toBeInTheDocument();
        expect(itemsElement).toBeInTheDocument();
    });
});

test('skills component renders default skills if no skills are provided', () => {
    render(<Skills skillsList={[]} />);

    const defaultTypeElement = screen.getByText('Type of skill:');
    const defaultOtherTypeElement = screen.getByText('Other type of skill:');

    expect(defaultTypeElement).toBeInTheDocument();
    expect(defaultOtherTypeElement).toBeInTheDocument();
});
