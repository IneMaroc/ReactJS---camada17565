import { useState } from "react";
import './counter.scss'
import PropTypes from 'prop-types';
//import { NavLink } from "react-router-dom";


const Counter = ({init, stock, item, onAdd}) => {
    
    const [counter, setCounter] = useState(init );
    
    //manejadores

    const handleUp = () => {
        if (counter < stock) {
            setCounter( counter + 1);

        }
    }

    const handleDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
        
    }

    return (

        <div className="counter">

            <div className="handlers">
                <button onClick={ handleDown }>-</button>
                <input value={counter} readOnly />
                <button onClick={ handleUp }> +</button>
                
            </div>

            <div className="counterbtn">
                <button onClick={() => onAdd(item, counter) } className="counterbtn-button" type="submit">Agregar al Carrito</button>
                <button className="counterbtn-button" type="submit">Ir al Carrito</button>
            </div>
           
        </div>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter