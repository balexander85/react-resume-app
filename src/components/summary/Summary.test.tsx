import { render, screen } from '@testing-library/react';
import React from 'react';
import Summary from './Summary';

test('summary component renders with provided summary text', () => {
    const summaryList = [
        'Veniam raclette butcher readymade before they sold out DIY.',
        'Banh mi whatever mollit laboris man braid fam, praxis squid ' +
    'gastropub succulents schlitz williamsburg XOXO fit sriracha.',
    ];
    render(<Summary summaryList={summaryList} />);

    summaryList.forEach((summaryText) => {
        const summaryElement = screen.getByText(summaryText);
        expect(summaryElement).toBeInTheDocument();
    });
});

test('summary component renders default text if no summary is provided', () => {
    render(<Summary summaryList={[]} />);

    const defaultText1Element = screen.getByText(/Veniam raclette butcher readymade before they sold out DIY./i);
    const defaultText2Element = screen.getByText(/Banh mi whatever mollit laboris man braid fam/i);

    expect(defaultText1Element).toBeInTheDocument();
    expect(defaultText2Element).toBeInTheDocument();
});
