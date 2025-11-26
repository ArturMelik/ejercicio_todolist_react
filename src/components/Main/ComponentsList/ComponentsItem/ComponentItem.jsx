import React, { useState } from "react";
import "./ComponentItem.css";

const ComponentsItem = ({ data, remove, edit }) => {
  const [isEditing, setIsEditing] = useState(false); //Para mostrar u esconder el formulario

  const [editValues, setEditValues] = useState({ ...data });

  const handleEditChange = (e) => {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editValues);
    edit(editValues); // Editar el elemento.
    setIsEditing(false);
  };

  const { title, description } = data;

  return (
    <article className="card">
      <h4>{title || "--"}</h4>
      <p>{description || "--"}</p>
      
      <br />
      <button onClick={remove}>Borrar</button>
      <button onClick={() => setIsEditing(true)}>Editar</button>

      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="form-edit">
          <label>Titulo</label>
          <input
            type="text"
            name="title"
            value={editValues.title}
            onChange={handleEditChange}
          />
          <label>Descripcion</label>
          <textarea name="description" id="description"
            value={editValues.description}
            onChange={handleEditChange}
            rows={4}          
            cols={30}
          ></textarea>
          <button type="submit" id="boton-guardar">Guardar</button>
          <button type="button" id="boton-cancelar" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </form>
      ) : null}
    </article>
  );
};

export default ComponentsItem;
