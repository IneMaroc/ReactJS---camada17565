import {ReactComponent as ImagenModelo} from './imagen.svg';
import './itemdetails.scss';
import Counter from "../itemcounter/Counter";
import { useContext} from 'react';
import { StoreContext } from '../../context/StoreContext';

function ItemDetails ({item}) {

    //const [updateCart, setUpdateCart] = useState(null);
    const {onAdd} = useContext(StoreContext);

    
       
    return (

        
            <div className="cont flex-sm-column flex-xs-column flex-lg-row">
                    <ImagenModelo/>
                    <div className="card-body">
                        <p className="card-id">ID: {item.id}</p>
                        <h4 className="card-title">{item.title}</h4>
                        <h5 className="card-text">{item.description}</h5>
                        <h6 className="card-fulltext">{item.fulldescription}</h6>
                        <h5 className="card-title"> PRECIO $ {item.price} Stock: {item.stock}</h5>
                        {Number(item.stock) !== 0 ? <Counter init={1} stock={item.stock} item={item} onAdd={onAdd} checkout={false}/> : <p>No hay stock del producto</p>}
                    </div>
                    
            </div>

       
    )

};

export default ItemDetails