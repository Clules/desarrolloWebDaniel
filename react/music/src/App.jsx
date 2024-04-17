import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
