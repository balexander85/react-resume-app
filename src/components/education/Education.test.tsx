import { render, screen } from '@testing-library/react';
import React from 'react';
import Education from './Education';

describe('<Education />', () => {
    test('education renders', () => {
        const educationList = [{
            'degree': 'Bachelor of Arts in Political Science',
            'institution': 'Texas State University',
            'date': 'August - May',
            'location': 'San Marcos, TX'
        }];
        render(<Education educationList={educationList} />);
        const educationSection = screen.getByTestId('education');
        const institutionName = screen.getByText(educationList[0].institution);
        const degree = screen.getByText(educationList[0].degree);
        const date = screen.getByText(educationList[0].date);
        const location = screen.getByText(educationList[0].location);

        expect(educationSection).toBeInTheDocument();
        expect(institutionName).toBeInTheDocument();
        expect(degree).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(location).toBeInTheDocument();
    });

    test('does not render education if none configured', () => {
        render(<Education educationList={[]} />);
        const educationSection = screen.queryByTestId('education');
        expect(educationSection).not.toBeInTheDocument();
    });

    test('education renders multiple entries', () => {
        const educationList = [
            {
                'degree': 'Bachelor of Arts in Political Science',
                'institution': 'Texas State University',
                'date': 'August - May',
                'location': 'San Marcos, TX'
            },
            {
                'degree': 'Master of Science in Computer Science',
                'institution': 'Sample University',
                'date': 'September - June',
                'location': 'City, Country'
            },
        ];
        render(<Education educationList={educationList} />);

        const degree1 = screen.getByText(educationList[0].degree);
        const degree2 = screen.getByText(educationList[1].degree);

        expect(degree1).toBeInTheDocument();
        expect(degree2).toBeInTheDocument();
    });
});