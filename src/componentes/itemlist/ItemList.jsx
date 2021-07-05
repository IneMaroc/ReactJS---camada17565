import Items from "../items/Items";
import "./itemlist.scss";

function ItemList ({items}){
 
    return (
        
        <div className="contenedor">

            {items.map(item => {
                return <Items item={item} key={item.id}/>
            })
            }
            
        </div>

    )

}



export default ItemList