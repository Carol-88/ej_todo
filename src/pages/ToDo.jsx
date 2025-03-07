import React, { useState } from "react";
import { Card } from "../components/Card";
import useTareas from "../hooks/useTareas";

const ToDo = () => {
  const { tareas, addTask, deleteTodo, doneTodo } = useTareas();
  const [newTask, setNewTask] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.name.trim() === "" || newTask.message.trim() === "") return;

    const newTarea = {
      id: Date.now(),
      name: newTask.name,
      message: newTask.message,
      done: false,
    };

    addTask(newTarea);
    setNewTask({ name: "", message: "" });
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="name"
          placeholder="Nombre de la tarea"
          value={newTask.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Descripción de la tarea"
          value={newTask.message}
          onChange={handleChange}
        />
        <button type="submit">Añadir Tarea</button>
      </form>

      {tareas.length > 0 ? (
        tareas.map((tarea) => (
          <Card
            key={tarea.id}
            tarea={tarea}
            deleteTodo={() => deleteTodo(tarea.id)}
            doneTodo={() => doneTodo(tarea.id)}
          />
        ))
      ) : (
        <p>No hay tareas pendientes</p>
      )}
    </div>
  );
};

export default ToDo;
