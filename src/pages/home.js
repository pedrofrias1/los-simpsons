import { Link } from "react-router-dom"
import "./home.css"



function Home(){
    return(
       <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column  align-items-center fondo gap-4">
            <h1 className="fw-bold">Welcome to the page of  <span>The Simpsons</span></h1>
            <p className="fw-bolder">This page it´s about the characters to <span>The Simpsons</span>, and have more information.</p>
            <Link to="/Character" className="btn boton p-3 fw-bolder">Characters</Link>
        </div>
       </div>
        
        
         
    )
}
export default Home