

export const CartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':        
            return [...state,action.item];

        case 'DELETE_FROM_CART':
            return state.filter(id => id !== action.id);

        case 'DELETE_CART':
            return action.item;

        case 'UPDATE_CART':
            const updatedItem = state.find(id => id === action.id);
            updatedItem.quantity = action.quanity;            
            return state;                

        default:
            return state;
    }
};