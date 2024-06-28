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
    it('should render the login page with the header', () => {
        const { getByText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        expect(getByText('Realize seu Login')).toBeInTheDocument();
    });

    it('should render the login page with email field', () => {
        const { getByText, getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        expect(getByLabelText(/Email/i)).toBeInTheDocument();
    });

    it('should render the login page with senha field', () => {
        const { getByText, getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        expect(getByLabelText(/Senha/i)).toBeInTheDocument();
    });

    it('should render the login page with login text', () => {
        const { getByText, getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        expect(getByText('Login')).toBeInTheDocument();
    });

    it('should update email fields', () => {
        const { getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
    
        const emailInput = getByLabelText(/Email/i);
    
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
        expect(emailInput.value).toBe('test@example.com');
    });

    it('should update password fields', () => {
        const { getByLabelText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
    
        const passwordInput = getByLabelText(/Senha/i);
    
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
        expect(passwordInput.value).toBe('password123');
    })
    
})