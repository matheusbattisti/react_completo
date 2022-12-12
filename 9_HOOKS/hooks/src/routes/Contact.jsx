// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Contact = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>Contato</h1>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  );
};

export default Contact;
