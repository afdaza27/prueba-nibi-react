import Header from "./components/Header";
import Home from "./components/Home";
import Voluntariados from "./components/Voluntariados";
import React, { useState } from "react";

function App() {
  const [voluntariados, setVoluntariados] = useState([
    {
      id: 1,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 2,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 3,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 4,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 5,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 6,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 7,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 8,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
    {
      id: 9,
      nombre: "FURAS EMPRENDIMIENTO FEMENINO",
      titulo: "Traductores",
      descripcion:
        "Traducir de español a ingles/frances la información y contenido que publicamos, con el fin de apoyar el área",
      fecha: "01-09",
      mes: "Septiembre",
      sesiones: 10,
      categoria: "Otro",
      inscritos: 4,
      diasRestantes: 70,
      imagen: "/imgs/placeholder.jpg",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Home />
      <Voluntariados voluntariados={voluntariados} />
    </div>
  );
}

export default App;
