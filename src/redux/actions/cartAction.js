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

export const UpdateCart = Item => {
    return {
        type:'UPDATE_CART',
        item:Item,
    }
}