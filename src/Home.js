import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.js';
import {useEffect,useState} from 'react';

function Home(){

  const [info,setInfo]=useState([]);
  const [main,setMain]=useState([]);
  const [offset,setOffset]=useState(0);

  let API="https://pokeapi.co/api/v2/pokemon?offset="+offset+"&limit=20";

  const fetchApiData= async (url)=>{
      try{
          const res= await fetch(url);
          const data= await res.json();
          setMain(data);
          setInfo(data.results);
      }catch(error){
          console.log(error);
      }
    }

    useEffect(()=> {
      fetchApiData(API);
    },[offset]);

    
  function next()
  {
      if(offset<1280)
      {
        var p=offset+20;
        setOffset(p);
      }
  }
  
  function prev()
  {
    if(offset>0)
    {
      var p=offset-20;
      setOffset(p);
    }
  }

    return(
      <div className="yes">
        <h1>POKEDEX</h1>
        <div>
        {info.map((item)=>{
            return(
            <div key={item.url}>
            <Card pname={item.name} url={item.url} />
            </div>)
            })}
            
        </div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
    </div>
    );
};

export default Home;