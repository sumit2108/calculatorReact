import { useState } from "react";
import "./App.css";
let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let symbols = ["+", "-", "/", "*"];

function App() {
  let [state, setState] = useState("");
  let [result, setResult] = useState(0);

  function handleOnclick(e) {  
    setResult("")
    if (state.length < 15) setState((state = state + e.target.name));
  }

  function handleSymbolClick(e){
    setResult("")
   if(symbols.includes(state.slice(-1)))return
   if(state.length < 15 &&state!="")
   setState(state=state+e.target.name)
  }
  function handleEquals() {
    if(symbols.includes(state.slice(-1)))return
    setState("");

    var str = state;
    setResult(eval(str));
  }
  function handleDelete() {
    
    var str = state;
    str = str.slice(0, str.length - 1);
    setState(str);
  }

  return (
    <div className="App">
      <h2 id="Header">BASIC CALCULATOR</h2>
      <div className="calculator">
        <input
          value={state}
          disabled
          className="display"
          placeholder={result}
        />
        <div className="numbers">
          {numbers.map((item) => (
            <button name={item} onClick={handleOnclick} key={item}>
              {item}
            </button>
          ))}
          {symbols.map((item) => (
            <button name={item} onClick={handleSymbolClick} key={item}>
              {item}
            </button>
          ))}
          <button
            id="equals"
            onClick={handleEquals}
            style={{ backgroundColor: "red", width: "6rem" }}
          >
            =
          </button>
          <button
            id="clear"
            onClick={handleDelete}
            style={{ backgroundColor: "red", width: "6rem" }}
          >
            CE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
