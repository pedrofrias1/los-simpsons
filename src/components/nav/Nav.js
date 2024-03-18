import "./navegacion.css"
import imagen from "../../los-simpson-fondo.jpg"
import { Link } from "react-router-dom"
function Nav(){
    return(
        <header className="d-flex">
          <nav className="w-100">
                <ul className="d-flex align-items-center justify-content-between">
                    <li><Link to="/" href="https"><img src={imagen} alt="logo-nav"/></Link></li>
                    <li><a>Personajes</a></li>
                </ul>
          </nav>  
        </header>
        
    )
}
export default Nav