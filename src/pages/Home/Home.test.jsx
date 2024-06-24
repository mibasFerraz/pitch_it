import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home component', () => {
  test('renders the heading', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const headingElement = screen.getByText(/Pitch It!/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the subheading', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const subheadingElement = screen.getByText(/A ferramenta para maximizar o Pitch!/i);
    expect(subheadingElement).toBeInTheDocument();
  });

  test('renders the paragraph', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const paragraphElement = screen.getByText(/A solução ideal para entregar o máximo de valor do seu projeto com um Pitch de alta qualidade!/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders the button with correct text', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByText(/Saiba Mais!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the image with alt text', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const imgElement = screen.getByAltText(/imagem de investimento/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '../../assets/home-image.svg');
  });
});
