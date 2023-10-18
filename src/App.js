import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
