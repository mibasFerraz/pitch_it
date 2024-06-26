import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State to manage validation error message
  const [showAlert, setShowAlert] = useState(false); // State to manage whether to show alert

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email and confirmEmail match
    if (email !== confirmEmail) {
      setError("Emails não são iguais!");
      setShowAlert(false); // Ensure alert is not shown if validation fails
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError("Senhas não são iguais!");
      setShowAlert(false); // Ensure alert is not shown if validation fails
      return;
    }

    // If validations pass, continue with signup logic
    console.log("Name:", name);
    console.log("CPF:", cpf);
    console.log("Email:", email);
    console.log("Confirm Email:", confirmEmail);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Show alert on successful submission
    setShowAlert(true);

    // Reset form fields and error state after successful submission (optional)
    setName("");
    setCpf("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <>
      <section className="hero min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Cadastre-se aqui!</h1>
          {showAlert && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Cadastro realizado com sucesso!</strong>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
              {/* Nome */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* CPF */}
              <div className="mb-4">
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* Confirm Email */}
              <div className="mb-4">
                <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirme o Email:</label>
                <input
                  type="email"
                  id="confirmEmail"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* Senha */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* Confirm Senha */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirme a Senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Cadastre-se
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
