import { Routes, Route } from "react-router-dom";
import { Nav } from "./component/Nav/Nav";
import "./App.css";
import { Contacto, Nosotros,RRHH,Productos,Inicio } from "./Pages";
import {Footer } from "./component/Footer/Footer"
function App() {
  return (
    <>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/RRHH" element={<RRHH/>} />
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
