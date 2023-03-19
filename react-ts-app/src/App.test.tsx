import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
    it('navigation work correctly during work with menu links', () => {
        //  ARRANGE
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        act(() => {
            const aboutLink = screen.getByText('About Us');
            aboutLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(
            screen.getByRole('heading', {
                level: 4,
            })
        ).toHaveTextContent('You are now on About Us page');
    });
    it('renders pages', () => {
        render(
            <MemoryRouter initialEntries={['/', '/about-us']}>
                <App />
            </MemoryRouter>
        );
    });

    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('We cannot found this page');
    });
});
