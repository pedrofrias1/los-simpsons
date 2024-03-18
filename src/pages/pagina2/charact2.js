import { useState, useEffect, Fragment } from "react";
import Cards from "../../components/cards/Cards";
import Nav from "../../components/nav/Nav";
import { Link } from "react-router-dom";
import "../personajes/personajes.css"

function Character2(){

    let [personaje,setPersonaje]=useState([]);

    let traerPersonaje=async()=>{
        let dato = await fetch("https://apisimpsons.fly.dev/api/personajes?limit=20&page=2")
        .then(respuesta=>respuesta.json())
        .catch(err=>console.log("hubo un error: " + err))

    return dato;
}

useEffect(()=>{
    let guardarPersonaje=async()=>{
        let info =await traerPersonaje();
    
        let docum=info.docs;
        // console.log(docum);
        setPersonaje(docum);
        
    }
    
    guardarPersonaje();
},[])

    return(
        <Fragment>
            <Nav/>
        
        <main className="container d-flex flex-wrap">
            <div className="container-fluid d-flex flex-wrap container-grid gap-4 mt-5">
                {personaje.map((persona)=>{
                return <Cards key={persona._id} data={persona} nombre={persona.Nombre} img={persona.Imagen} />
                })}:
            </div>
        </main>
            
            <div className="d-flex justify-content-center align-items-center gap-2 mt-2 pb-3">
                <Link to="/Character"className="btn next ">1</Link>
                <Link to="/Charact2" className="btn next ">2</Link>
                <Link to="/Charact3" className="btn next ">3</Link>
                <Link to="/Charact4" className="btn next ">4</Link>
            </div>
        </Fragment>
            
        
    )
}

export default Character2