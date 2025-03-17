import { useReducer } from "react";
import { tareasReducer } from "../reducers/todoReducer";

const useTareas = () => {
  const [tareas, dispatch] = useReducer(tareasReducer, []);

  const addTask = (newTarea) => {
    dispatch({ type: "ADD_TASK", payload: newTarea });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const doneTodo = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  return { tareas, addTask, deleteTodo, doneTodo };
};

export default useTareas;
