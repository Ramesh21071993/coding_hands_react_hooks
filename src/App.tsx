import React from "react";
import logo from "./logo.png";
import "./App.css";

import UseCallback from "./Hooks/UseCallback";
import UseContext from "./Hooks/UseContext";
import UseDebugValue from "./Hooks/UseDebugValue";
import UseDeferredValue from "./Hooks/UseDeferredValue";
import UseEffect from "./Hooks/UseEffect";
import UseId from "./Hooks/UseId";
import UseImperativeHandle from "./Hooks/UseImperativeHandle";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coding Hands</p>
      </header>
      <body className="App-body">
        {/* <UseCallback /> */}
        {/* <UseContext /> */}
        {/* <UseDebugValue /> */}
        {/* <UseDeferredValue /> */}
        {/* <UseEffect /> */}
        {/* <UseId /> */}
        <UseImperativeHandle />
      </body>
    </div>
  );
}

export default App;
