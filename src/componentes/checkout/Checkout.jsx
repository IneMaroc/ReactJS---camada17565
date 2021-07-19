import {ReactComponent as ImagenModelo} from './imagen.svg';
import { Link } from "react-router-dom";
import "./checkout.scss"
import Counter from '../itemcounter/Counter';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


function Checkout ({item}) {
    
    const {updateCart, updateQty} = useContext(StoreContext);
    

    return (
        <div className="checkout">

        
                    <Link className="checkout_link" to={"/item/" + item.id}>
                    <ImagenModelo/>
                    
                    <div className="checkout-body">
                        <h5 className="checkout-title">{item.name}</h5>
                        <p className="checkout-text">id:{item.id} Stock Remanente: {item.stock} </p>
                        
                                      
                    </div>
                    </Link>
                    <div>
                        <Counter init={item.qty} stock={item.stock} item={item} updateCartUp={updateCart} updateQtyUp={updateQty} checkout = {true} />
                    </div>
                    <div> 
                            <h6 className="checkout-qty">Cantidad {item.qty}</h6>
                            <h6 className="checkout-price">Precio Unitario: ${item.price}</h6> 
                            <h6 className="checkout-tprice">Total Parcial: ${item.price * item.qty}</h6>  
                    </div>
                                    

                  

        </div>
            
        
    )
   
    
};

export default Checkout