import {ReactComponent as ImagenModelo} from './imagen.svg';
import './itemdetails.scss';
import Counter from "../itemcounter/Counter";
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

function ItemDetails ({item}) {

    const [updateCart, setUpdateCart] = useState(null);
    const context = useContext(StoreContext);

    const onAddToCart = (e, q) => {

        if (item.stock !== 0) {

            setUpdateCart (item);
            context.onAdd(item, q);
            

            alert(`Has agregado ${q} producto/s al carrito`)

        } else {
            alert("No hay Stock del producto");
        };
        console.log(updateCart);

    }

   
    return (

        
            <div className="cont card flex-sm-column flex-lg-row">
                    <ImagenModelo/>
                    <div className="card-body">
                        <p className="card-id">ID: {item.id}</p>
                        <h4 className="card-title">{item.title}</h4>
                        <h5 className="card-text">{item.description}</h5>
                        <h6 className="card-fulltext">{item.fulldescription}</h6>
                        <h5 className="card-title"> PRECIO $ {item.price} Stock: {item.stock}</h5>
                        {Number(item.stock) !== 0 ? <Counter init={1} stock={item.stock} id={item.id} onAdd={onAddToCart} updateCart={updateCart}/> : <p>No hay stock del producto</p>}
                    </div>
                    
            </div>

       
    )

};

export default ItemDetails