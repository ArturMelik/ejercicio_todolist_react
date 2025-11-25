import React from "react";
import "./ComponentItem.css"

const ComponentsItem = ({data, remove}) => {


 const {title, description} = data;

  return <article className ="card">
      <h4>{ title || "--"}</h4>
      <p>{description || "--"}</p>
      <br/>
      <button onClick={remove}>Borrar</button>


    </article>;
};

export default ComponentsItem;
