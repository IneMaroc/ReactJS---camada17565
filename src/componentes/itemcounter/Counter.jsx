import { useContext, useState } from "react";
import './counter.scss';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";



const Counter = ({init, stock, item, onAdd, updateCartUp, updateQtyUp, updateCartDown, checkout, itemlist}) => {
    
    const [counter, setCounter] = useState(init );
    const {cart} = useContext(StoreContext);
    

    //handlers

    const handleUp = () => {

        if (checkout && stock > 0) {

            setCounter( counter + 1);
            updateCartUp(item.id, 1);
            updateQtyUp(cart);

        } else if (counter < stock) {

            
                setCounter( counter + 1);

        }
            
    }

    const handleDown = () => {
        if(checkout && counter > 1) {
            setCounter(counter - 1);
            updateCartDown(item.id, 1)
            
        }
        
        else if (counter > 1) {
            setCounter(counter - 1);
        }
        
    }

    return (

        <div className="counter">

            {checkout? <div className="handlers">
                <button onClick={ handleDown }>-</button>
                <input value={counter} size="4" readOnly />
                <button onClick={ handleUp } >+</button>
                
            </div> : 
            <div className="handlers">
                <button onClick={ handleDown }>-</button>
                <input value={counter} size="12" readOnly />
                <button onClick={ handleUp }>+</button>
                
            </div>}

            

            {checkout? <div></div> : itemlist? <div className="counterbtn">
                <button onClick={() => onAdd(item, counter) } className="counterbtn bttn" type="submit">Agregar al Carrito</button>
                </div>  : <div className="counterbtn">
                <button onClick={() => onAdd(item, counter) } className="counterbtn bttn" type="submit">Agregar al Carrito</button>
               <NavLink to={"/checkout"}> <button className="counterbtn bttn" type="submit">Ir al Carrito</button> </NavLink> </div> 
             }
            
           
        </div>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter