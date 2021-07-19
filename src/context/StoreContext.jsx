import { createContext, useEffect, useState } from "react";
import { getFireStore } from "../firebase/client";

export const StoreContext = createContext();

export const StoreComponentContext = ({children}) => {

    const [listItems, setListItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
   
    const emptyCart = () => {
        setCart([]);
        setCartQty(0);
        setTotalPrice(0);
    }

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

    const updateCartDown = (id, q) => {
       
        for (let i in cart) {
            if ((cart[i].id === id) && (cart[i].stock > 0)) {
                 cart[i].stock += q;
                 cart[i].qty -= q;
                 updateQty(cart);
                                  
            } else {                             
                
                removeItem(id);
            }
        }

    }

    const removeItem = (id) => {

        let aux = cart.filter(element => element.id !== id)
          console.log(aux);
        setCart(aux);
        updateQty(aux);

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
           
        const DB = getFireStore() // data base conection
        const COLLECTION= DB.collection("products") // we get the hole collection
        const RESPONSE = await COLLECTION.get()
        setListItems(RESPONSE.docs.map(element => element.data()));
        
    
    };
    

    useEffect(() => {
       getItems();
    }, []);

    
    return <StoreContext.Provider value={{listItems, setListItems, cart, setCart, cartQty, setCartQty, totalPrice, setTotalPrice, onAdd, updateCart, updateCartDown, removeItem, updateQty, getItems, emptyCart}}>{children}</StoreContext.Provider>
};