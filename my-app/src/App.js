import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Movie from "./components/Movie";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
       <Route path="home" element={<Home/>}/>
       <Route path="exercise" element={<Exercise/>}/>
       <Route path="movie" element={<Movie />} />
       <Route path="dashboard" element={<Dashboard />} />
       <Route path="form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
