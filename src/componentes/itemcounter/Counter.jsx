import { useState } from "react";
import './counter.scss'
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


const Counter = ({init, onAdd, updateCart, stock, id}) => {
    
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
                <input value={counter}/>
                <button onClick={ handleUp }> +</button>
                
            </div>
            {updateCart? <NavLink to={"/checkout"}><button  className="btn btn-secondary" > Terminar Compra </button></NavLink> : <button onClick={(e) => onAdd(e, counter, id)} className="btn btn-secondary" type="submit">Agregar al Carrito</button>}

           
        </div>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter