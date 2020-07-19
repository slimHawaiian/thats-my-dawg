
export const CartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':          
            return [...state,action.item];

        case 'DELETE_FROM_CART':
            const newCart = state.cart.filter(id => id !== action.id);
            return newCart;

        case 'DELETE_ALL':
            return {cart:[],total:0};

        case 'UPDATE_CART':
            const updatedCart =  state.cart.filter(id => id === action.id);
            updatedCart.quantity = action.quatity;            
            return {
                cart:[...updatedCart],total:state.cart.reduce((sum,item) => sum + (item.price * item.quantity),0)
            } 

        default:
            return state;
    }
};