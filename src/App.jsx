import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/favs" element={<Favs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/detail/:id" element={<Detail/>}/>
              <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
