import Navbar from "./components/Navbar";
import Home from "./Pages/Home/components/Home";
import About from "./Pages/about/components/About";
import Contact from "./Pages/contact/components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
