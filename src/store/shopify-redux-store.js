import { createStore } from "redux";

const INIT_VALUE = { tags: 'products', displayType : "asc"};

const reducer = (store = INIT_VALUE, action) => {

  let newStore = store;
  if(action.type == 'EDIT_TAGS'){
    newStore = {...store, tags: action.payload}
  }
  if(action.type == 'SORT'){
    console.log(action);
    newStore = {...store, displayType: action.payload}

  }

  return newStore;
  
};

const store = createStore(reducer);

export default store