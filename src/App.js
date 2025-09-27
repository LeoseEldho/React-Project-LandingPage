import Home from "./Components/Home";
import './App.css'
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
