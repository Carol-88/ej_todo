import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { NotFound } from "./pages/NotFound";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
