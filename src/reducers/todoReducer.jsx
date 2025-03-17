export const tareasReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((tarea) =>
        tarea.id === action.payload ? { ...tarea, done: !tarea.done } : tarea
      );

    default:
      return state;
  }
};
