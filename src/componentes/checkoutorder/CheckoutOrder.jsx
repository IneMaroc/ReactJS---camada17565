import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

import "./checkoutorder.scss"

function CheckoutOrder () {

    const {emptyOrder, orderId} = useContext(StoreContext);

    return (

        

        <div className="checkoutorder">
    
            <p> tu orden es <strong>{orderId}</strong> por favor <strong>NO LA PIERDAS!</strong></p>

            

            <div>
                <button className="bttn" onClick={() => {
                
                
                    //changeOrder();               
                
                }}> eliminar</button>

                <button className="bttn" onClick={() => {
                 
                    emptyOrder();                
                
                }}> finalizar </button>

            </div>
            

        </div>   

    )

}

export default CheckoutOrder;