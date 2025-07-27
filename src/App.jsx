import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Greeting name="maryam" surname="ahmed" />
      <Greeting name="yasmin" surname="ahmed" />
      <Header />
      <Header />
    
    </>
  );
}

export default App;
