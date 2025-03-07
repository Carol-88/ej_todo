import { useState } from "react";

const useTareas = () => {
  const [tareas, setTareas] = useState([]);

  const addTask = (newTarea) => {
    setTareas([...tareas, newTarea]);
  };

  const deleteTodo = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const doneTodo = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, done: !tarea.done } : tarea
      )
    );
  };

  return {
    tareas,
    addTask,
    deleteTodo,
    doneTodo,
  };
};

export default useTareas;
