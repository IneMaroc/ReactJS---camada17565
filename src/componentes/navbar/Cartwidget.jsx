import React from 'react';
import { RiShoppingBag3Fill } from "react-icons/ri";
import './CartWidget.scss';

function CartWidget () {

    return (
        
    
        <div>
        <RiShoppingBag3Fill size={32} /> Carrito ({0})
        </div>
   
        
    )
}

export default CartWidget;