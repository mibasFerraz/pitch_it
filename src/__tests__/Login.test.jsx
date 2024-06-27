import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login/Login'; // Adjust the path based on your project structure
import "@testing-library/jest-dom";

jest.mock('../context/auth-context', () => ({
    useAuth: () => ({
      login: jest.fn(),
    }),
  }));

describe('Login Page', () => {
    it('should render the login page with necessary elements', () => {
        const { getByText, getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        expect(getByText('Realize seu Login')).toBeInTheDocument();
        expect(getByLabelText(/Email/i)).toBeInTheDocument();
        expect(getByLabelText(/Senha/i)).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
    });

    it('should update email and password fields', () => {
        const { getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
    
        const emailInput = getByLabelText(/Email/i);
        const passwordInput = getByLabelText(/Senha/i);
    
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
      });
    
})