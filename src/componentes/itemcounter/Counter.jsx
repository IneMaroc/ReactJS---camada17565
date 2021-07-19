import { useContext, useState } from "react";
import './counter.scss';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";



const Counter = ({init, stock, item, onAdd, updateCartUp, updateQtyUp, updateCartDown, checkout}) => {
    
    const [counter, setCounter] = useState(init );
    const {cart} = useContext(StoreContext);
    

    //handlers

    const handleUp = () => {

        if (checkout && counter < stock) {

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
                <input value={counter} readOnly />
                <button onClick={ handleUp } >+</button>
                
            </div> : 
            <div className="handlers">
                <button onClick={ handleDown }>-</button>
                <input value={counter} readOnly />
                <button onClick={ handleUp }>+</button>
                
            </div>}

            

            {checkout? <div></div> : <div className="counterbtn">
                <button onClick={() => onAdd(item, counter) } className="counterbtn-button" type="submit">Agregar al Carrito</button>
               <NavLink to={"/checkout"}> <button className="counterbtn-button" type="submit">Ir al Carrito</button> </NavLink>
            </div>}
            
           
        </div>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter