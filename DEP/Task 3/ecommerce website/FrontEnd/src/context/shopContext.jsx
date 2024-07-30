import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function getInitialCart() {
    let cart = {};
    for (let index = 0; index < 300 ; index++) {
        cart[index] = 0;
    }
    return cart;
}

function ShopContextProvider({ children }) {
    const [allProducts, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getInitialCart());

    useEffect(function () {
        fetch("http://localhost:5000/all-products")
            .then((response) => response.json())
            .then((data) => setAllProduct(data.data));

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:5000/get-cart',{
                method:'GET',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application-json'
                },
                body:""
            }).then(response => response.json()).then(data=>setCartItems(data.data));
        }
    }, []);

    function addToCart(id) {
        if(localStorage.getItem('auth-token')){
            setCartItems((previous) => {
                return { ...previous, [id]: previous[id] + 1 };
            });

            fetch('http://localhost:5000/add-to-cart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application-json'
                },
                body:JSON.stringify({"id":id})
            }).then(response => response.json()).then(data => console.log(data));
        }
    }

    function removeFromCart(id) {
        setCartItems((previous) => {
            return { ...previous, [id]: previous[id] - 1 };
        });

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:5000/remove-from-cart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application-json'
                },
                body:JSON.stringify({"itemId":id})
            }).then(response => response.json())
            .then(data => console.log(data));
        }
    }

    function getTotalValue() {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let productInfo = allProducts.find(
                    (product) => product.id === Number(item)
                );
                total += productInfo.new_price * cartItems[item];
            }
        }
        return total;
    }

    function getTotalCartItems() {
        let count = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                count += cartItems[item];
            }
        }
        return count;
    }

    const contextValue = {
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalValue,
        getTotalCartItems,
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
