import Navbar from "./components/Navbar";
import Home from "./Pages/Home/components/Home";
import About from "./Pages/about/components/About";
import Contact from "./Pages/contact/components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEmployee from "./Pages/Home/components/EditEmployee";
import AddEmployee from "./Pages/Home/components/AddEmployee";

const App = () => {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              exact path="/" 
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              } 
            />
            <Route 
                exact path="/about" 
                element={
                  <>
                    <Navbar />
                    <About />
                  </>
                } 
              />
            <Route 
                exact path="/contact" 
                element={
                    <>
                      <Navbar />
                      <Contact />
                    </>
                  } 
              />
            <Route 
              exact path="/adduser" 
              element={
                  <>
                    <Navbar />
                    <AddEmployee />
                  </>
                } 
              />
            <Route 
                exact path="/edit/:empid" 
                element={
                    <>
                      <Navbar />
                      <EditEmployee />
                    </>
                  } 
              />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
