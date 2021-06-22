import Counter from "./Counter"
import PropTypes from 'prop-types';



const ItemCounter = () => {

    const onAdd = (e, q) => {

        alert(`Has agregado ${q} producto/s al carrito`)

    }
return (

        <Counter init={1} stock={10} onAdd={onAdd}/>

    )
}

ItemCounter.prototype = {
    value: PropTypes.number
}

export default ItemCounter