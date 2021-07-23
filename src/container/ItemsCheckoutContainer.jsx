import { useContext } from "react";
import Checkout from "../componentes/checkout/Checkout"
import CheckoutForm from "../componentes/checkoutform/CheckoutForm";
import CheckoutOrder from "../componentes/checkoutorder/CheckoutOrder";
import { StoreContext } from "../context/StoreContext";
import "./container.scss"


function ItemsCheckoutContainer () {

    const {cart, cartQty, totalPrice, emptyCart, createOrder, orderId} = useContext(StoreContext)

    return (

        <div className="container">

            <div className="checkoutitems">

                {cart.map(item => {
                    return <Checkout item={item} key={item.id}/>
                })
                }

            </div>

            <div className="checkoutform">

                {cartQty === 0 ? <div> <h2> Tu Carrito esta vacio </h2> </div> : <div className="checkoutform-form"> <CheckoutForm/> </div>
                }

            </div>

            {orderId? <div className="checkoutorder"> <CheckoutOrder/> </div>  : <div className="checkouthandlers">
                <h6 className="checkouthandlers-tprice">Total $ {totalPrice}</h6>
                <h6 className="checkouthandlers-tq">Items Totales: {cartQty}</h6>
                <div>
                    <button className="checkouthandlers-btn" onClick={emptyCart} > Vaciar Carrito </button> 
                    <button className="checkouthandlers-btn" onClick={() => {
                        createOrder();
                        emptyCart();
                        
                    }}> Crear Orden </button> 
                </div>         
            </div> }

                        
            

           
            
        </div>
        
    );

};

export default ItemsCheckoutContainer