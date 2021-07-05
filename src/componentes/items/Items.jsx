import {ReactComponent as ImagenModelo} from './imagen.svg';
import './items.scss';
import Counter from "../itemcounter/Counter";
import { Link } from "react-router-dom";

function Items ({item}) {

    return (

        
            <div className="cards">
                    <Link className="cards_link" to={"/item/" + item.id}><ImagenModelo/></Link>
                    <div className="cards-body">
                        <h5 className="cards-title">{item.title}</h5>
                        <p className="cards-text">{item.description}</p>
                        <h6 className="cards-title">${item.price}</h6>
                        <Counter  init={1} stock={item.stock} id={item.id}/>  
                    </div>
                    
            </div>
            

       
    )

}

export default Items