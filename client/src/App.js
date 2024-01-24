import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, Redirect } from "react-router-dom";
import Mainpage from "./Components/mainpage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Events from "./Components/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/socials" element={<Contacts />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );

  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
}

export default App;
