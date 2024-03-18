import "./cards.css"
import Infocard from "../infocard/infoCard";
import { Fragment } from "react";

function Cards({nombre, img, data}){
  


    return(
        
        
<Fragment>
<div className="container d-flex flex-column justify-content-center align-items-center flex-wrap">
   
        <div className="personajes d-flex flex-column align-items-center">
           <img alt="imagen-personaje" className="img-personaje" src={img}/>
            <h3>{nombre}</h3>    
        </div>
                     
               
                
             
               <div>
                {<Infocard show ocupacion={data.Ocupacion} genero={data.Genero} historia={data.Historia} className="datos"  />}
               </div>
   
</div>
</Fragment>
        
    )
}
export default Cards;


