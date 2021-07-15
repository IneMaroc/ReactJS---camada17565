import {ReactComponent as ImagenModelo} from './imagen.svg';
import './items.scss';
import { Link } from "react-router-dom";


function Items ({item}) {

    return (


    <div className="cards">
            <Link className="cards_link" to={"/item/" + item.id}>
            <ImagenModelo/>
            
            <div className="cards-product">
                
                <p className="cards-text">id:{item.id} stock: {item.stock} </p>
                <h6 className="cards-title">${item.price}</h6>
                <h5 className="cards-title">{item.title}</h5>
                <p className="cards-desc">{item.description}</p>
                
            </div>
            </Link>

    </div>
             

       
    )

}

export default Items;