import Item from "../item/Item";
import "./itemdetail.scss";


function ItemDetail({items}){
    return (

        <div className="contenedor">

            {items.map(item => {
                if (item.id == 2) {
                    return <Item item={item} key={item.id}/>
                }
                
            })
            }
            
        </div>

    )

    
}


export default ItemDetail