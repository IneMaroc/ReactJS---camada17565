import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

function CheckoutOrder () {

    const {emptyOrder, orderId} = useContext(StoreContext);

    return (

        <>
    
        <h2> tu orden es {orderId}</h2>

        <button onClick={() => {
            emptyOrder();

            
            
        }}> finalizar compra </button>

            

        </>
    )

}

export default CheckoutOrder;