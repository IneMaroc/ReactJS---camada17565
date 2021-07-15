import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreComponentContext = ({children}) => {

    const [listItems, setListItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
   
    

    const isInCart = (id) => {
        if (cart.find((p) => p.id === id)) {
            return false
        } else {
            return true
        }
            
    }

    const updateCart = (id, q) => {
       
        for (let i in cart) {
            if ((cart[i].id === id) && (cart[i].stock >= q)) {
                 cart[i].stock -= q;
                 cart[i].qty += q;
                                  
            } else {                             
                
                alert(`El stock disponible es ${cart[i].stock}`)
            }
        }

    }

    const updateQty = (cart) => {
        let qty = 0;
        let price = 0;
        cart.forEach((element) => {
            qty += element.qty;
            price += element.price * element.qty;
        })
        setCartQty(qty);
        setTotalPrice(price);

    }

    const onAdd = (item, q) => {

        if (isInCart(item.id)) {
            let qty = cartQty;
            let price = totalPrice;
            let aux = {
                "id": item.id,
                "name": item.title,
                "img": item.pictureUrl,
                "price": item.price,
                "stock": item.stock - q,
                "qty": q,                
            };
            setCart ([...cart, aux]);
            setCartQty(qty + q);
            setTotalPrice(price + (item.price * q))
        } else {
            
            updateCart(item.id, q);
            updateQty(cart);
            
        }      
                     
    };

    

    console.log(cart);
    console.log(cartQty);
    console.log(totalPrice)
  
    
    const getItems = async () => {
           
            
        const response = await fetch("/itemlist.json");
        const result = await response.json();
        setListItems(result);
        
    
    };
    

    useEffect(() => {
       getItems();
    }, []);

    
    return <StoreContext.Provider value={{listItems, setListItems, cart, setCart, cartQty, setCartQty, totalPrice, setTotalPrice, onAdd, getItems}}>{children}</StoreContext.Provider>
};