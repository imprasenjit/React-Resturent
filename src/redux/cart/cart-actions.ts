export const setCartValue = (product:any) => ({
    type: 'SET_PRODUCT',
    payload:product
})
export const removeCartItem = (product:any) => ({
    type: 'REMOVE_PRODUCT',
    payload:product
})