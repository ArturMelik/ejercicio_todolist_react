import React from "react";
import ComponentList from "./ComponentsList/ComponentList";
import "../Main/Main.css/"

const Main = () => {
  return <main className="container-main">
    <h2>Añadir tarea</h2>
    <ComponentList/>
    </main>;
};

export default Main;
