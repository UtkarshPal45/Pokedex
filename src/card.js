import React from 'react';
import { Link } from 'react-router-dom';


export default function Card({pname,url}){
    const i = url.slice(34,url.length -1);


    return(
        <>
        <Link to={`pokeInfo/${i}`} >
        <button >
            {pname}
        </button>
        </Link>
        </>
    )
};