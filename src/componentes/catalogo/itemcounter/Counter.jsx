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

        <>
        <button onClick={ handleUp }> +</button>
        <input value={counter}/>
        <button onClick={ handleDown }>-</button>
        <button onClick={e => onAdd(e, counter)} className="btn btn-secondary" type="submit">Add to Cart</button>
        </>
    )
}

Counter.prototype = {
    value: PropTypes.number
}

export default Counter