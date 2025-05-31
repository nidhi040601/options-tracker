import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "../pages/signUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
