import PropTypes from "prop-types";
import React from "react";

export const Card = ({ tarea, doneTodo, deleteTodo }) => {
  return (
    <div className={`card ${tarea.done ? "completed" : ""}`}>
      <h2>{tarea.name}</h2>
      <p>{tarea.message}</p>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={doneTodo}>Complete</button>
    </div>
  );
};

Card.propTypes = {
  tarea: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  doneTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

/*
¿Qué hace PropTypes.shape?

Define la estructura de un objeto:
PropTypes.shape te permite especificar qué propiedades debe tener un objeto y de qué tipo deben ser.
Esto es útil cuando esperas que una prop sea un objeto con una estructura específica.
Valida las propiedades del objeto:
Cuando se utiliza PropTypes.shape, React verifica que el objeto pasado como prop coincida con la estructura definida.
Si el objeto no coincide, React muestra una advertencia en la consola.
*/
