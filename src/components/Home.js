import React from "react";
import "./Home.css";
import BuscadorFundacion from "./BuscadorFundacion";

function Home() {
  return (
    <div className="home">
      <div className="textoBanner">
        Contamos con xxx fundaciones validadas en toda Colombia. Te ayudamos a
        encontrar la tuya en pocos clicks
      </div>
      <BuscadorFundacion />
    </div>
  );
}

export default Home;
