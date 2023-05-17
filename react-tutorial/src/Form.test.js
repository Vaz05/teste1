import React from 'react';
import { render, screen} from '@testing-library/react';
import MyForm from './Form';
import '@testing-library/jest-dom';

describe('MyForm', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

    it('renders the name input', () => {
      render(<MyForm />);
      const nameInput = screen.getByLabelText('Name');
      expect(nameInput).toBeInTheDocument();

    });
  
    it('renders the job input', () => {
      render(<MyForm />);
      const jobInput = screen.getByLabelText('Job');
      expect(jobInput).toBeInTheDocument();
    });
});
