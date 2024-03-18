import "./infocard.css"
function Infocard({ocupacion, genero,historia,setShow}){
    return(
        
            <div className="datos ">
                
                <ul class="list-group">
                    <li class="list-group-item item-1">{ocupacion}</li>
                    <li class="list-group-item item-2">{genero}</li>
                    <li class="list-group-item item-3">{historia}</li>
                </ul>
            </div>
        
    )
}
export default Infocard;