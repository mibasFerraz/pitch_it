import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About/About'; // Adjust the path based on your project structure
import "@testing-library/jest-dom";

describe('About Component', () => {
  it('should render the heading', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(getByText('Sobre o Pitch It!')).toBeInTheDocument();
  });

  it('should render the first paragraph', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(
      getByText(
        /Pitch It! é uma plataforma web inovadora projetada para ajudar estudantes e empreendedores de startups a criar pitches de vendas impactantes./
      )
    ).toBeInTheDocument();
  });

  it('should render the second paragraph', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(
      getByText(
        /Além de auxiliar na criação de pitches, o Pitch It! oferece um chatbot avançado alimentado por inteligência artificial/
      )
    ).toBeInTheDocument();
  });
});
