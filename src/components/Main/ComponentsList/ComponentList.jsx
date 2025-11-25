import React, { useState } from "react";
import ComponentsItem from "./ComponentsItem/ComponentItem.jsx";
import Tasks from "../../../../tasks.json";
import { v4 as uuidv4 } from "uuid";
import "./ComponentList.css"

const ComponentList = () => {
  const [items, setItems] = useState(Tasks); //Array de items a representar

//items → variable que contiene todas las tareas que se van a mostrar.
// setItems → función que actualiza esa variable.
// useState(Tasks) → el estado empieza con los datos del JSON.

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(e.target.title.value);
    console.log(e.target.description.value);
    //Añadir objeto al array items
    setItems([values, ...items]);

    // Limpiar el formulario y valores del estado
    
  setValues({
    title: "",
    description: ""
  });

  };

  const paintData = () =>
    items.map((item, index) => (
      <ComponentsItem
        data={item}
        remove={() => removeItem(index)}
        key={uuidv4()}
      />
    ));

  const loadData = () => setItems(Tasks); //items = products

  const removeData = () => setItems([]); //items = []

  const removeItem = (i) => {
    const filteresItems = items.filter((item, index) => index !== i);
    setItems(filteresItems); //Carga el estado con los items restantes
  };
// Recibe un índice.
// Crea un nuevo array con todos menos ese.
// Actualiza el estado para que se re-renderice la lista sin ese elemento.


  return (
    <div>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="title">Titulo</label>
        <br />
        <input type="text" value={values.title} name="title" onChange={handleChange} />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input type="text" value={values.description} name="description" onChange={handleChange} />
        <br />
        {values.title && values.description ? (
          <button type="submit">ADD </button>
        ) : (
          "Completa los campos"
        )}{" "}
      </form>

      <button onClick={loadData}> Cargar datos</button>

      <button onClick={removeData}> Resetear datos</button>

      {paintData()}
    </div>
  );
};

export default ComponentList;
