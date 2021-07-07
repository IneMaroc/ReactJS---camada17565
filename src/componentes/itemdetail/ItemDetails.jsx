import {ReactComponent as ImagenModelo} from './imagen.svg';
import './itemdetails.scss';
import Counter from "../itemcounter/Counter";
import { useState } from 'react';

function ItemDetails ({item}) {

    const [updateCart, setUpdateCart] = useState();

    const onAdd = (e, q) => {

        setUpdateCart (item);

        alert(`Has agregado ${q} producto/s al carrito`)

    };

    console.log(updateCart);

    return (

        
            <div className="cont card flex-sm-column flex-lg-row">
                    <ImagenModelo/>
                    <div className="card-body">
                        <p className="card-id">ID: {item.id}</p>
                        <h4 className="card-title">{item.title}</h4>
                        <h5 className="card-text">{item.description}</h5>
                        <h6 className="card-fulltext">{item.fulldescription}</h6>
                        <h5 className="card-title"> PRECIO $ {item.price}</h5>
                        <Counter init={1} stock={item.stock} id={item.id} onAdd={onAdd} updateCart={updateCart}/>
                    </div>
                    
            </div>

       
    )

};

export default ItemDetails