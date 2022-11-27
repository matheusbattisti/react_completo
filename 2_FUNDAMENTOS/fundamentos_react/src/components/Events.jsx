import React from "react";

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  //   8 - Função de renderizacao
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      {/* 6 - eventos */}
      <div>
        <button onClick={() => console.log("Testando evento")}>
          Clique aqui
        </button>
      </div>
      {/* 7 - evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>
      {/* 8 - Função de render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
