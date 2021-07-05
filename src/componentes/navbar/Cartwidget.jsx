import React from 'react';
import { RiShoppingBag3Fill } from "react-icons/ri";
import './CartWidget.scss';
import Badge from 'react-bootstrap/Badge'

function CartWidget () {

    return (
        
    
        <div>
        <RiShoppingBag3Fill size={32} /> Carrito <Badge pill variant="secondary">0</Badge>
        </div>
   
        
    )
}

export default CartWidget;