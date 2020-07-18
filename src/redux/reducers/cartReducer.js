export const initialState = {
 cart:[{id:1,description:'Doggles',quantity:1,price:5.00}],
 total:0,
};

export const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state.cart,{Id: action.id,Description:action.description,Quantity:action.quantity,Price:action.price}];
        case 'DELETE_FROM_CART':
            return state.cart.filter(id => id !== action.id);
        case 'UPDATE_CART':
            const updatedCart =  state.cart.filter(id => id !== action.id);
            return [...updatedCart,{Id:action.id,Description:action.description,Quantity:action.quantity,Price:action.price}]
        default:
            return state.cart;
    }
};

export const TotalPriceReducer = (state = initialState, action) => {

    return state.cart.reduce((sum,item) => sum += item.price);
}