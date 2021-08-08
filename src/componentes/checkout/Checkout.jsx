import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./checkout.scss"
import Counter from '../itemcounter/Counter';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


function Checkout ({item}) {
    
    const {updateCart, updateQty, updateCartDown, removeItem} = useContext(StoreContext);
    

    return (
        <div className="checkout">

        
                    <Link className="checkout_link" to={"/item/" + item.id}>
                    <div className="checkout_img"><img src={item.img} alt=""/></div>
                    
                    <div className="checkout-body">
                    <h4 className="card-title"><strong>{item.name}</strong></h4>
                        <p className="checkout-text"> Stock Remanente: {item.stock} </p>
                        
                                      
                    </div>
                    </Link>
                    <div>
                        <Counter init={item.qty} stock={item.stock} item={item} updateCartUp={updateCart} updateQtyUp={updateQty} updateCartDown= {updateCartDown} checkout = {true} />
                    </div>
                    <div> 
                            <h6 className="checkout-qty">KG {item.qty}</h6>
                            <h6 className="checkout-price">Precio Unitario x KG: ${item.price}</h6> 
                            <h6 className="checkout-tprice">Total Parcial: ${item.price * item.qty}</h6>  
                    </div>
                    <div>
                        <button className="checkout_button" onClick={() => removeItem(item.id)}><FaTrashAlt size={32} ></FaTrashAlt></button>
                    </div>
                                    

                  

        </div>
            
        
    )
   
    
};

export default Checkout