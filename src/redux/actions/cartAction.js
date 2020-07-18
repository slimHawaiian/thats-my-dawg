export const AddToCart = Item => {
    return {
        Type:'ADD_TO_CART',
        Item:Item,
    }
}

export const DeleteFromCart = Item => {
    return {
        Type:'DELETE_FROM_CART',
        Item:Item,
    }
}

export const UpdateCart = Item => {
    return {
        Type:'UPDATE_CART',
        Item:Item,
    }
}