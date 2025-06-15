import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "../pages/signUp";
import LoginPage from "../pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
