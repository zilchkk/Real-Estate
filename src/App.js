import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./index.css";
import "./App.css"
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/contactus/Contact";
import { Getstarted } from "./components/Get started/Getstarted";
import {Footer} from "./components/Footer/Footer"
function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <div>
          <Residencies/>
          <Value/>
          <Contact/>
          <Getstarted/>
          
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
