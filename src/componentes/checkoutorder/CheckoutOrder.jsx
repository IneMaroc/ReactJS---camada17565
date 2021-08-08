import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

import "./checkoutorder.scss"

function CheckoutOrder () {

    const {emptyOrder, orderId, order, deleteOrder} = useContext(StoreContext);

    return (

        

        <div className="checkoutorder">

            <p> tu orden es <strong>{orderId}</strong> por favor <strong>NO LA PIERDAS!</strong></p>

            <table>
                <thead>
                    <tr>
                        <th> Producto </th>
                        <th> Cantidad </th>
                        <th> Precio </th>
                        <th> Subtotal </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        order.items.map(
                            (item) => {
                                return (
                                    <tr key={item.id}>
                                        <td> {item.name} </td>
                                        <td> {item.qty}</td>
                                        <td> $ {item.price} </td>
                                        <td> $ {item.price * item.qty}</td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4">
                            Precio total $ {order.tPrice}
                        </th>
                    </tr>
                </tfoot>

            </table>             


            <div>
                <button className="bttn" onClick={() => {
                
                
                    deleteOrder(orderId);
                    emptyOrder();

                
                }}> eliminar</button>

                <button className="bttn" onClick={() => {
                 
                    emptyOrder();                
                
                }}> Confirmar </button>

            </div>
            

        </div>   

    )

}

export default CheckoutOrder;