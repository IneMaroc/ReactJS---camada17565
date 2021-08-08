import './items.scss';
import { Link } from "react-router-dom";
import Counter from '../itemcounter/Counter';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';


function Items ({item}) {

    const {onAdd} = useContext(StoreContext);

    return (


    <div className="cards">
            <Link className="cards_link" to={"/item/" + item.id}>
            <div className="cards_img"><img src={item.pictureUrl} alt=""/></div>
            
            <div className="cards-product">
                
                <p className="cards-text">stock: {item.stock} </p>
                <h6 className="cards-title">1 KG ${item.price}</h6>
                <h5 className="card-title"><strong>{item.title}</strong></h5>
                <p className="cards-desc">{item.description}</p>
                
                
            </div>
            </Link>
            {Number(item.stock) !== 0 ? <Counter className="cards-counter" init={1} stock={item.stock} item={item} onAdd={onAdd} checkout={false} itemlist={true}/> : <p>No hay stock del producto</p>}

    </div>
             

       
    )

}

export default Items;