import { render, screen } from "@testing-library/react";
import { Home } from "../pages/Home/Home"; // add the path of your Component
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {
    it('should render the heading and subheading', () => {
      const { getByText } = render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      expect(getByText('Pitch It!')).toBeInTheDocument();
      expect(getByText('A ferramenta para maximizar o desafio Liga Jovem.')).toBeInTheDocument();
    });

    it('should render the description paragraph', () => {
        const { getByText } = render(
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        );
        expect(getByText('A solução ideal para entregar o máximo de valor do seu projeto com um Pitch de alta qualidade!')).toBeInTheDocument();
      });

      it('should render the "Saiba Mais!" button', () => {
        const { getByText } = render(
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        );
        expect(getByText('Saiba Mais!')).toBeInTheDocument();
      });
    
      it('should render the image', () => {
        const { getByAltText } = render(
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        );
        expect(getByAltText('imagem de investimento')).toBeInTheDocument();
      });
})