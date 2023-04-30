import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUs file', () => {
  it('render title About us page', () => {
    render(<AboutUs />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This is page ABOUT US');
  });
});
