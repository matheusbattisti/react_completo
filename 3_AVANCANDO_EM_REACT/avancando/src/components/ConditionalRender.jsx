import React from "react";

const ConditionalRender = () => {
  const x = true;

  const name = "Matheus";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {/* 8 - adicionando else */}
      <h3>Render ternário:</h3>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
