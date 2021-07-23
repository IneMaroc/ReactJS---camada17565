import { useContext } from "react";
import Checkout from "../componentes/checkout/Checkout"
import CheckoutForm from "../componentes/checkoutform/CheckoutForm";
import { StoreContext } from "../context/StoreContext";
import "./container.scss"
function ItemsCheckoutContainer () {

    const {cart, cartQty, totalPrice, emptyCart, createOrder, form} = useContext(StoreContext)

    return (

        <div className="container">

            <div className="checkoutitems">

                {cart.map(item => {
                    return <Checkout item={item} key={item.id}/>
                })
                }

            </div>

            <div className="checkoutform"> <CheckoutForm/> </div>

            
            <div className="checkoutcontainer">
                <h6 className="checkoutcontainer-tprice">Total $ {totalPrice}</h6>
                <h6 className="checkoutcontainer-tq">Items Totales: {cartQty}</h6>
                <div>
                    <button className="checkoutcontainer-btn" onClick={emptyCart} > Vaciar Carrito </button> 
                    <button className="checkoutcontainer-btn" onClick={() => {
                        createOrder();
                    }}> Crear Orden </button> 
                </div>         
            </div>

           
            
        </div>
        
    );

};

export default ItemsCheckoutContainer