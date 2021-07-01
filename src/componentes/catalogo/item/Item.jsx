import {ReactComponent as ImagenModelo} from './imagen.svg';
import './item.scss';
import Counter from "../itemcounter/Counter";

function Items ({item}) {

    return (

        
            <div className="card">
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

export default Items