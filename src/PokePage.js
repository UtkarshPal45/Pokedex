
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const PokePage = () => {
    const {index} = useParams() 
    const api = `https://pokeapi.co/api/v2/pokemon/${index}/`

    const [main,setMain]= useState([])
    const [loading,setLoading]= useState(true)
    const [moves,setMoves]=useState([])

    const fetchApiData= async (url)=>{
        try{
            const res= await fetch(url);
            const data= await res.json();
            setMain(data);
            setLoading(false);
            setMoves(data.moves.map((arr)=>arr.move.name))
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApiData(api);
    },[])

    function idx(arr){
        let l=arr.length;
        let m=Math.min(5,l);
        console.log(m);
        return m;
        
    }
   

  return (
    <div>
        {loading?<div>loading</div>:
        <div className='Pokepage'>
            <div className='abilities'>
                    <h1>ABILITIES</h1>
                    <ul>
                        {
                            main.abilities.slice(0,idx(main.abilities)).map(
                            (item)=>{
                                console.log(item);
                            return (<li>{item.ability.name}</li>)
                            }
                            )
                        } 
                    </ul>
            </div>
            <div className='image'>
                    <img src={main.sprites.other.dream_world.front_default}></img>
            </div>
            <div className='moves'>
                <h1>Moves</h1>
                <ul>
                    {
                        moves.slice(0,idx(moves)).map(
                        (item)=>{
                            console.log(item);
                         return (<li>{item}</li>)
                        }
                        )
                    }
                </ul>
            </div>
        </div>
        }
    </div>
    
    )
}

export default PokePage
