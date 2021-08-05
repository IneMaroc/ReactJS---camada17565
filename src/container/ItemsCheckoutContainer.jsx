import { useContext, useState } from "react";
import Checkout from "../componentes/checkout/Checkout"
import BuyerForm from "../componentes/checkoutform/BuyerForm";
import Loader from "../componentes/loader/Loader";
import CheckoutOrder from "../componentes/checkoutorder/CheckoutOrder";
import { StoreContext } from "../context/StoreContext";
import {ReactComponent as EmptyCart} from './emptycart.svg';
import { NavLink } from "react-router-dom";
import "./container.scss"


function ItemsCheckoutContainer () {
    const [loading, setLoading] = useState(false);
    const {cart, cartQty, totalPrice, emptyCart, createOrder, orderId} = useContext(StoreContext)

    return (

        <div className="checkoutcont">

            {orderId? <div className="checkoutcont_order"> <h2 className="checkoutcont_buyerform-title"> orden </h2> <CheckoutOrder/> </div> : loading? <Loader/> :

            cartQty === 0? 
            
            
                <div className="checkoutcont_emptycart">

                    <div>
                        <h2> Carrito Vacio </h2> 

                        <EmptyCart/>
                        <button as={NavLink} to={"/"} className="bttn">Empeza tu compra</button>
                    </div>                   
                
                
                </div> :

            <>
            <div className="checkoutcont_items">

                <h2 className="checkoutcont_buyerform-title"> Carrito </h2>

                {cart.map(item => {
                    return <Checkout item={item} key={item.id}/>
                })
                }

            </div>

            <div className="checkoutcont_buyerform">

                  <h2 className="checkoutcont_buyerform-title"> Ingresa tus datos </h2>

                  <div className="checkoutcont_buyerform-form"> <BuyerForm/> </div>
                

            </div>           

            <div className="checkoutcont_handlers">
                <h6 className="checkoutcont_handlers-tprice">Total $ {totalPrice}</h6>
                <h6 className="checkoutcont_handlers-tq">KG Totales: {cartQty}</h6>
                <div>
                    <button className="checkoutcont_handlers bttn" onClick={emptyCart} > Vaciar Carrito </button> 
                    <button className="checkoutcont_handlers bttn" onClick={() => {
                        
                        if (orderId) {
                            setLoading(false);

                        } else {
                            setLoading(true);
                            createOrder();
                            emptyCart();

                        }
                        
                        
                    }}> Crear Orden </button> 
                </div>        
            </div>  
            
            </> }
            
        </div>
        
    );

};

export default ItemsCheckoutContainer