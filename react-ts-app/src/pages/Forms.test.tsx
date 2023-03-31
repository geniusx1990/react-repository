import { describe, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';

import Forms from './Forms';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUs file', () => {
  it('render title About us page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This is FORM PAGE');
  });

  it('renders Sumbit button', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    act(() => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.getByText('Please enter a name longer');
    expect(alert).toBeInTheDocument;
  });

  it('validates product name value', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    act(() => {
      const inputName = screen.getByPlaceholderText('enter product name');
      fireEvent.change(inputName, { target: { value: 'Apple' } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText('Please enter a name longer');
    expect(alert).toBeNull();
  });

  it('should correctly set default option', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByRole('option', { name: 'please select brand name' }).selected).toBe(true);
  });

  it('date validation', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    act(() => {
      const inputs = document.querySelectorAll('input');
      fireEvent.change(inputs[1], { target: { value: '2022-02-02' } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText('Please enter a date older than today');
    expect(alert).toBeNull();
  });

  it('should correctly set type option', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByRole('option', { name: 'please select type' }).selected).toBe(true);
  });

  it('discount radio box validation ', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    act(() => {
      const radio = screen.getAllByRole('radio');
      fireEvent.click(radio[0]);
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText('Please select a discount price or full price');
    expect(alert).toBeNull();
  });

  it('validates product thumbnail', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    act(() => {
      const inputs = document.querySelectorAll('input');
      const thumbnail = new File(['hello'], 'hello.png', { type: 'image/png' });
      fireEvent.change(inputs[2], { target: { files: [thumbnail] } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText('Please upload thumbnail');
    expect(alert).toBeNull();
  });
});
