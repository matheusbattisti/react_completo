import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  // 8 - textarea
  const [bio, setBio] = useState();

  // 9 - select
  const [role, setRole] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email);

  // 5 -  envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    // validacao
    // envio

    // 7 - limpar form
    setName("");
    setEmail("");

    setBio("");
  };

  return (
    <div>
      {/* 5 - envio de formulário */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 - controlled inputs
            value={name || ""}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            // 4 - simplificando a manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled inputs
            value={email || ""}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
