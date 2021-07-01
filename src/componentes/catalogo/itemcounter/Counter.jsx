import { useState } from "react";
import './counter.scss'
import PropTypes from 'prop-types';


const Counter = (props) => {

    const [counter, setCounter] = useState( props.init );

    const onAdd = (e, q) => {

        alert(`Has agregado ${q} producto/s al carrito`)

    }

    //manejadores

    const handleUp = () => {
        if (counter < props.stock) {
            setCounter( counter + 1);

        }
    }

    const handleDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
        
    }

    return (

        <div>

        <div>
            <button onClick={ handleDown }>-</button>
            <input value={counter}/>
            <button onClick={ handleUp }> +</button>
            
        </div>
        <button onClick={e => onAdd(e, counter)} className="btn btn-secondary" type="submit">Agregar al Carrito</button>
        </div>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter