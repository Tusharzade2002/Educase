import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Createaccount from "./Pages/Createaccount";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<Createaccount/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
