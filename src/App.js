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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
