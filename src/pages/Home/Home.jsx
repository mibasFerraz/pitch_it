import React from "react";
import { Link } from "react-router-dom";
import ImgHome from "../../assets/home-image.svg";

export const Home = () => {
  return (
    <>
      <section className="hero flex justify-center items-center bg-white">
        <div className="w-2/5">
          <h1 className="text-6xl pt-2 font-mono">Pitch It!</h1>
          <h2 className="text-3xl pt-2">A ferramenta para maximizar o desafio Liga Jovem.</h2>
          <p className="pt-6">
            A solução ideal para entregar o máximo de valor do seu projeto com um Pitch de alta qualidade!
          </p>
          <Link to="/about">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Saiba Mais!
            </button>
          </Link>
        </div>
        <div className="w-3/5">
          <img src={ImgHome} className="w-4/6" alt="imagem de investimento" />
        </div>
      </section>
    </>
  );
};

export default Home;
