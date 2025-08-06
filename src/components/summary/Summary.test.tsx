import { render, screen } from '@testing-library/react';
import React from 'react';
import Summary from './Summary';

describe('<Summary />', () => {
    test('summary component renders with provided summary text', () => {
        const summaryList = [
            'Veniam raclette butcher readymade before they sold out DIY.',
            'Banh mi whatever mollit laboris man braid fam, praxis squid ' +
            'gastropub succulents schlitz williamsburg XOXO fit sriracha.',
        ];
        render(<Summary summaryList={summaryList} />);
        const summarySection = screen.queryByTestId('summary');

        expect(summarySection).toBeInTheDocument();
        summaryList.forEach((summaryText) => {
            const summaryElement = screen.getByText(summaryText);
            expect(summaryElement).toBeInTheDocument();
        });
    });

    test('summary component renders default text if no summary is provided', () => {
        render(<Summary summaryList={[]} />);
        const summarySection = screen.queryByTestId('summary');
        expect(summarySection).not.toBeInTheDocument();
    });
});