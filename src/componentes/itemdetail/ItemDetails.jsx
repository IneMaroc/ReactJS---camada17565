import {ReactComponent as ImagenModelo} from './imagen.svg';
import './itemdetails.scss';
import Counter from "../itemcounter/Counter";

function ItemDetails ({item}) {

    return (

        
            <div className="cont card flex-sm-column flex-lg-row">
                    <ImagenModelo/>
                    <div className="card-body">
                        <p className="card-id">ID: {item.id}</p>
                        <h4 className="card-title">{item.title}</h4>
                        <h5 className="card-text">{item.description}</h5>
                        <h6 className="card-fulltext">{item.fulldescription}</h6>
                        <h5 className="card-title"> PRECIO $ {item.price}</h5>
                        <Counter init={1} stock={item.stock} id={item.id}/>  
                    </div>
                    
            </div>

       
    )

}

export default ItemDetails