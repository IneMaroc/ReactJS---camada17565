import './itemdetails.scss';
import Counter from "../itemcounter/Counter";
import { useContext} from 'react';
import { StoreContext } from '../../context/StoreContext';

function ItemDetails ({item}) {

    
    const {onAdd} = useContext(StoreContext);

    
       
    return (

        
            <div className="card">
                    <div className="card_img"><img src={item.pictureUrl} alt=""/></div>
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                        <h6 className="card-fulltext">{item.fulldescription}</h6>
                        <p className="card-text">Stock: {item.stock}</p>
                        <h5 className="card-title"> PRECIO x KG $ {item.price} </h5>
                        
                        {Number(item.stock) !== 0 ? <Counter className="card-counter" init={1} stock={item.stock} item={item} onAdd={onAdd} checkout={false}/> : <p>No hay stock del producto</p>}
                    </div>
                    
            </div>

       
    )

};

export default ItemDetails