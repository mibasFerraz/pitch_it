import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Navbar from "../components/Navbar/index"; 
import '@testing-library/jest-dom';


jest.mock("../context/auth-context", () => ({
    useAuth: jest.fn(),
  }));

describe("Navbar Component", () => {
  it("should render Navbar when user is not authenticated and find Home", () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it("should render Navbar when user is not authenticated and find Sobre", () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText('Sobre')).toBeInTheDocument();
  });

  it("should render Navbar when user is not authenticated and find Login", () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText('Login')).toBeInTheDocument();
  });

  it("should render Navbar when user is not authenticated and find Cadastre-se", () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText('Cadastre-se')).toBeInTheDocument();
  });

  it("should render Navbar when user is authenticated and find Gerador de Pitch", () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText("Gerador de Pitch")).toBeInTheDocument();
  });

  it("should render Navbar when user is authenticated and find Logoff", () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText("Logoff")).toBeInTheDocument();
  });
});
