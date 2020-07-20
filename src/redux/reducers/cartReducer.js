

export const CartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':        
            return [...state,action.item];

        case 'DELETE_FROM_CART':
            console.log(action.item);
            return state.filter(item => item.id !== action.item.id);

        case 'DELETE_CART':
            return action.item;

        case 'UPDATE_CART_ADD':
            const updatedItem = state.find(item => item.id === action.item.id);
            updatedItem.quantity += action.item.quantity;         
            return state.filter(item => item.quantity !== 0);  

            case 'UPDATE_CART_SUB':
                const locatedItem = state.find(item => item.id === action.item.id);
                if(locatedItem &&locatedItem.quantity > 0)  
                    locatedItem.quantity -= action.item.quantity;   
                
                return state.filter(item => item.quantity !== 0);              

        default:
            return state;
    }
};