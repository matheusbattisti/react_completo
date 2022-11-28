// 2 - CSS de componente
import MyComponent from "./components/MyComponent";

// 6 - CSS Modules
import Title from "./components/Title";

function App() {
  // 4 - css inline dinamico
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <p>Pegou CSS do componente</p>
      <MyComponent />
      {/* 3 - inline css */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      {/* 4 - css inline dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      {/* 6 - CSS modules */}
      <Title />
      <h1 className="title">Este não recebe título do CSS modules</h1>
    </div>
  );
}

export default App;
