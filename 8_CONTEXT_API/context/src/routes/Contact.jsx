import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);

  const { color, dispatch } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
