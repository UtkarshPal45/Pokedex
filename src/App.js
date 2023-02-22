import React,{useEffect,useState} from 'react';
import './App.css';

import {Routes,Route} from 'react-router-dom';
import Home from "./Home";
import PokePage from "./PokePage";


function App() {
  return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='pokeInfo/:index' element={<PokePage/>}/>
    </Routes>
  );

};

export default App;
