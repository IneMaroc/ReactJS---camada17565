import { useContext } from "react";
import Checkout from "../componentes/checkout/Checkout"
import { StoreContext } from "../context/StoreContext";

function ItemsCheckoutContainer () {

    const {cart, cartQty, totalPrice} = useContext(StoreContext)

    return (

        <div className="container">

            {cart.map(item => {
                return <Checkout item={item} key={item.id}/>
            })
            }
            <div>
                <h6 className="container-tprice">Total $ {totalPrice}</h6>
                <h6 className="container-tprice">Items Totales: {cartQty}</h6>
            </div>
            
        </div>
        
    );

};

export default ItemsCheckoutContainer