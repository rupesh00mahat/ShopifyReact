import { createStore } from "redux";

const INIT_VALUE = { tags: "products", displayType: "asc", cart: [] };

const reducer = (store = INIT_VALUE, action) => {
  let newStore = store;
  if (action.type == "EDIT_TAGS") {
    newStore = { ...store, tags: action.payload };
  }
  if (action.type == "SORT") {
    console.log(action);
    newStore = { ...store, displayType: action.payload };
  }
  if (action.type == "ADD_TO_CART") {
    let newArray = store.cart;
    let idExists = newArray.some((item) => item.id === action.payload.id);
    if (idExists) {
      newArray.map((item)=>{
        if(action.payload.id == item.id){
          item.quantity = item.quantity+1;
          item.price = item.price*item.quantity;
        }
      })
      newStore = { ...store, cart: [...newArray] };
    } else {
      newStore = { ...store, cart: [...store.cart, action.payload] };
    }
  }
  console.log(newStore);
  return newStore;
};

const store = createStore(reducer);

export default store;
