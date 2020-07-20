export const AddToCart = Item => {
    return {
        type:'ADD_TO_CART',
        item:Item,
    }
}

export const DeleteFromCart = Item => {
    return {
        type:'DELETE_FROM_CART',
        item:Item,
    }
}

export const UpdateCartAdd = Item => {
    return {
        type:'UPDATE_CART_ADD',
        item:Item,
    }
}

export const UpdateCartSub = Item => {
    return {
        type:'UPDATE_CART_SUB',
        item:Item,
    }
}

export const DeleteAll = () => {
    return {
        type:'DELETE_CART',
        item:[],
    }
}