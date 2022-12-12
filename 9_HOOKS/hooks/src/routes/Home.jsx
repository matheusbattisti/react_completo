import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

import HookUseRef from "../components/HookUseRef";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>Home</h2>
      {/* 1 - useState */}
      <HookUseState />
      {/* 2 - useReducer */}
      <HookUseReducer />
      {/* 3 - useEffect */}
      <HookUseEffect />
      {/* 4 - useContext */}
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      {/* 5 - useRef */}
      <HookUseRef />
      {/* 6 - useCallback */}
      <HookUseCallback />
      {/* 7 - useMemo */}
      <HookUseMemo />
      {/* 8 - useLayoutEffect */}
      <HookUseLayoutEffect />
      {/* 9 - useImperativeHandle */}
      <HookUseImperativeHandle />
      {/* 10 - custom hook */}
      <HookCustom />
    </div>
  );
};

export default Home;
