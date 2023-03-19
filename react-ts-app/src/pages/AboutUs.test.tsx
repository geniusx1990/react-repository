import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('AboutUs', () => {
    it('renders title', () => {
        render(<AboutUs />);
        expect(
            screen.getByRole('heading', {
                level: 2,
            })
        ).toHaveTextContent('This is page ABOUT US');
    });
});
