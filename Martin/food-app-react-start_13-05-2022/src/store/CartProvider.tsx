import { ReactNode, useReducer } from "react";
import CartContext, { CartItem } from "./cart-context";

interface CartProviderProps{
    children: ReactNode;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}

const defaultCartState: CartState ={
    items: [],
    totalAmount: 0
}

function cartReducer(state: CartState, action: {type: string, item: CartItem}){
    //state -> aktuelle Snapshot von unserem Warenkorb
    //action -> welche aktion wir ausführen möchten (ADD, REMOVE) + daten (obj)

    if(action.type === 'ADD'){
        const newItemToAdd = action.item;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === newItemToAdd.id
        );

        const existingItem = state.items[existingCartItemIndex];

        let updatedItems: CartItem[];
                
        if(existingItem){

            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount + newItemToAdd.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
                    
        }else{
            //item(s) zu bisherigem State hinzufügen
            updatedItems = state.items.concat(newItemToAdd);
        }

        //totalamount berechnen
        const updatedTotalAmount = state.totalAmount + newItemToAdd.price * newItemToAdd.amount;    
       
        //neuer state mit daten zurückgeben
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    
    }

    if(action.type === 'REMOVE'){
        //item löschen
    }

    return defaultCartState; //TODO: neue aktualisierte state
}

export default function CartProvider(props: CartProviderProps){
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler(item: CartItem){
        dispatchCartAction({type: 'ADD', item: item})
    }

    function removeItemFromCarthandler(id: string){
        //TODO
        //dispatchCartAction({type: 'REMOVE', id: id})

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCarthandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}