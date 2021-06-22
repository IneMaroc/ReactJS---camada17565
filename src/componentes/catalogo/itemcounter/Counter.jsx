import { useState } from "react";
import './counter.scss'


const Counter = ({init, stock, onAdd}) => {

    const [counter, setCounter] = useState( init );

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

        <>
        <button onClick={ handleUp }> +</button>
        <input value={counter}/>
        <button onClick={ handleDown }>-</button>
        <button onClick={e => onAdd(e, counter)} className="btn btn-secondary" type="submit">Add to Cart</button>
        </>
    )
}

export default Counter