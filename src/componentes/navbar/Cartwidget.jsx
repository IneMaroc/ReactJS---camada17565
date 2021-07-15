import { RiShoppingBag3Fill } from "react-icons/ri";
import './CartWidget.scss';
import Badge from 'react-bootstrap/Badge'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from "react";

function CartWidget () {

    const {cartQty} = useContext(StoreContext);

    

    return (
        
    
        <div>
        <RiShoppingBag3Fill size={32} /> Carrito <Badge pill variant="secondary">{cartQty}</Badge>
        </div>
   
        
    )
}

export default CartWidget;