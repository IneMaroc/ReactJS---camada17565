import {ReactComponent as ImagenModelo} from './imagen.svg';
import './items.scss';
import Counter from "../itemcounter/Counter";

function Items ({item}) {

    return (

        
            <div className="card">
                    <ImagenModelo/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <h6 className="card-title">${item.price}</h6>
                        <Counter init={1} stock={item.stock} id={item.id}/>  
                    </div>
                    
            </div>

       
    )

}

export default Items