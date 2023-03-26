import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('render title About us page', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This is page ABOUT US');
  });
});
