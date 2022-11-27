// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia de componentes
import MyComponent from "./components/MyComponent";

// 6 - eventos
import Events from "./components/Events";

import "./App.css";

function App() {
  // 3 - Comentários na função ou fora
  return (
    <div className="App">
      {/* 3 - Comentários no componente */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
