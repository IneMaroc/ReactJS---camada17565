import { useContext} from "react";
import Checkout from "../componentes/checkout/Checkout"
import Form from "../componentes/form/Form";
import Loader from "../componentes/loader/Loader";
import CheckoutOrder from "../componentes/checkoutorder/CheckoutOrder";
import { StoreContext } from "../context/StoreContext";
import {ReactComponent as EmptyCart} from './emptycart.svg';
import FormValidation from "../util/utilidades";
import { NavLink } from "react-router-dom";
import "./container.scss"




function ItemsCheckoutContainer () {
    
    const {cart, cartQty, totalPrice, emptyCart, createOrder, orderId, form, loading, setLoading} = useContext(StoreContext)

    return (

        <div className="checkoutcont">

            {orderId? <div className="checkoutcont_order"> <h2 className="checkoutcont_buyerform-title"> orden </h2> <CheckoutOrder/> </div> : loading? <Loader/> :

            cartQty === 0? 
            
            
                <div className="checkoutcont_emptycart">

                    <div>
                        <h2> Carrito Vacio </h2> 
                        <EmptyCart/>
                        <NavLink exact to={"/"}> <button className="bttn" type="submit">Empeza tu Compra</button> </NavLink>
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

                  <div className="checkoutcont_buyerform-form"> <Form/> </div>
                

            </div>           

            <div className="checkoutcont_handlers">
                <h6 className="checkoutcont_handlers-tprice">Total $ {totalPrice}</h6>
                <h6 className="checkoutcont_handlers-tq">KG Totales: {cartQty}</h6>
                <div>
                    <button className="checkoutcont_handlers bttn" onClick={emptyCart} > Vaciar Carrito </button> 
                    <button className="checkoutcont_handlers bttn" onClick={() => {
                        
                        if (orderId) {
                            setLoading(false);

                        } else if (FormValidation(form)) {
                            setLoading(true);
                            createOrder();
                            emptyCart();

                        } else {

                            alert("Completa el formulario correctamente con datos reales");


                        }
                        
                        
                    }}> Crear Orden </button> 
                </div>        
            </div>  
            
            </> }
            
        </div>
        
    );

};

export default ItemsCheckoutContainer