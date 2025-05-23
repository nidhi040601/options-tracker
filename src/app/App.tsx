import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "../pages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
