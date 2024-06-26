const GET_ALL_USERS_CARTS = '/all/carts'
const GET_ACTIVE_CART ='/carts/active'
const CREATE_NEW_CART = '/carts/new'

// ACTION TYPES
const getAllCarts = (carts) => {
    return{
        type: GET_ALL_USERS_CARTS,
        carts
    }
}

const getActiveCart = (cart) => {
    return {
        type: GET_ACTIVE_CART,
        cart
    }
}

const createCart = (cart) => {
    return {
        type: CREATE_NEW_CART,
        cart
    }
}


// THUNKS

// get all curr user's carts (ordered and active)
export const allUserCartsThunk = () => async (dispatch) => {
    const response = await fetch('/api/carts/all')
    if(!response.ok){
        throw new Error ('Failed to get user carts')
    }
    const data = await response.json()
    dispatch(getAllCarts(data))
    return data
}

// get current user's active cart
export const activeCartThunk = () => async (dispatch) => {
    const response = await fetch ('/api/carts/active')
    if(!response.ok){
        throw new Error('Failed to get active cart')
    }
    const data = await response.json()
    dispatch(getActiveCart(data))
    return data
}

//  create new cart
export const createCartThunk = () => async (dispatch) => {
    const response = await fetch(`/api/carts/new`, {
        method: 'POST'
    })
    if(!response.ok){
        throw new Error ('Failed to create new cart')
    }
    const data = await response.json()
    dispatch(createCart(data))
    return data
}

// REDUCER
function cartReducer (state ={}, action){
    switch(action.type){
        case GET_ALL_USERS_CARTS:{
            return{...state, ...action.carts}
        }
        case GET_ACTIVE_CART: {
            return {...state, ...action.cart}
        }
        case CREATE_NEW_CART: {
            return{...state, ...action.cart}
        }
        default:
            return state
    }
}

export default cartReducer
