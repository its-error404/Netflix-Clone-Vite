import React from "react";
import "./App.css";
import "./styles/_main.scss";
import Navbar from "./shared/components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
    </div>
  );
};

export default App;