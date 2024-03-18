import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "../pages/home";
import Character from "../pages/personajes/Character"
import Charact2 from "../pages/pagina2/charact2"
import Charact3 from "../pages/pagina3/Charact3";
import Charact4 from "../pages/pagina4/Charact4";

function Router (){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Character" element={<Character/>}/>
            <Route path="/Charact2" element={<Charact2/>}/>
            <Route path="/Charact3" element={<Charact3/>}/>
            <Route path="/Charact4" element={<Charact4/>}/>
        </Routes>
        
        
        </BrowserRouter>
    )
}
export default Router;