import {render, fireEvent} from 'react-dom';
import MyForm from './Form';

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
    document.addEventListener('DOMContentLoaded', () => {
      render(<MyForm />, document.getElementById('root'));
      const nameInput = getByLabelText('Name');
      expect(nameInput).toBeInTheDocument();
    }); 
  });

  it('renders the job input', () => {
    document.addEventListener('DOMContentLoaded', () => {
      render(<MyForm />, document.getElementById('root'));
      const jobInput = getByLabelText('Job');
      enxpect(jobInput).toBeInTheDocument();
    });  
  });

  it('renders handleSubmit', () => {
    document.addEventListener('DOMContentLoaded', () => {
    const handleSubmitMock = jest.fn();
    const { getByText } = render(<MyForm handleSubmit={handleSubmitMock} />);
  
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
  
    expect(handleSubmitMock).toHaveBeenCalled();
    })
  })
});