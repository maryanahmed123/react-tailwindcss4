import "./App.css";
import Counter from "./components/counter";
import Greeting from "./components/Greeting";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      
      <Greeting name="maryam" surname="ahmed" />

      <Counter />
    </>
  );
}

export default App;
