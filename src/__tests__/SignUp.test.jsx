import React from 'react';
import { render } from '@testing-library/react';
import Signup from '../pages/SignUp/SignUp';
import '@testing-library/jest-dom';

describe('Signup Component', () => {
  it('Check if the input fields are rendered', () => {
    const { getByLabelText } = render(<Signup />);

    expect(getByLabelText('Nome:')).toBeInTheDocument();
    expect(getByLabelText('CPF:')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByLabelText('Confirme o Email:')).toBeInTheDocument();
    expect(getByLabelText('Senha:')).toBeInTheDocument();
    expect(getByLabelText('Confirme a Senha:')).toBeInTheDocument();
  });

  it('Check if the heading is rendered', () => {
    const { getByText } = render(<Signup />);

    expect(getByText('Cadastre-se aqui!')).toBeInTheDocument();
  });
  
  it('Check if the signup button is rendered', () => {
    const { getByRole } = render(<Signup />);

    expect(getByRole('button', { name: /Cadastre-se/i })).toBeInTheDocument();

  });
  
  it('Check if the error message is not rendered initially', () => {
    const { queryByText } = render(<Signup />);

    expect(queryByText(/Emails não são iguais!/i)).not.toBeInTheDocument();
    expect(queryByText(/Senhas não são iguais!/i)).not.toBeInTheDocument();
  });
});
