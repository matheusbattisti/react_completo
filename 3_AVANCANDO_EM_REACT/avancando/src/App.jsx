import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - render de lista
import ListRender from "./components/ListRender";

// 7 - renderizacao condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

// 11 - renderizacao de lista
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children prop
import Container from "./components/Container";

// 14 - funcao em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import { useState } from "react";

import MessageState from "./components/MessageState";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // 14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - render de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Matheus" />
      {/* 9 - destructuring em props */}
      <CarDetails brand="VW" km={99999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} />
      {/* 11 - renderizacao de lista */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - Fragments */}
      <Fragment />
      {/* 13 - children prop */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      {/* 14 - funcao em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
