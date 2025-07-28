import "./App.css";
import Counter from "./components/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import Form from "./components/Form";
import MouseEvent from "./components/MouseEvent";
import Welcomemessage from "./components/Welcomw message";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification"

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Header />
      <Dashboard isAdmin={false} />
      <Inputer />
      <Notification show={true} />
      <Greeting name="maryam" surname="ahmed" />
      <Clicker />
      <Welcomemessage loggedIn={true} />
      <Greeting name="maryam" surname="ahmed" />
      <Form />
      <MouseEvent />
      <Counter />
    </>
  );
}

export default App;
