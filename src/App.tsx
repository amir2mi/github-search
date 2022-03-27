import { storeProps } from "./store";
import { useSelector } from "react-redux";

function App() {
  const searchValue = useSelector((state: storeProps) => state.search.value);
  console.log(searchValue);

  return (
    <div className="App">
      <header className="App-header">
        <p>{searchValue}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
