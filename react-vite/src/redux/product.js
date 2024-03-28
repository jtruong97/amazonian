const GET_ALL_PRODUCTS = '/products/getAllProducts'
const GET_ONE_PRODUCT = '/products/productId'

// ACTION TYPES
const getAllProducts = (products) => {
    return{
        type: GET_ALL_PRODUCTS,
        products
    }
}
const getOneProduct = (product) => {
    return{
        type: GET_ONE_PRODUCT,
        product
    }
}

// THUNKS

// get all products thunk
export const getAllProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/products')
    if(!response.ok){
        throw new Error ('Failed to get all products.')
    }
    const data = await response.json()
    dispatch(getAllProducts(data))
    return data
}

// get one product by id thunk
export const getOneProductThunk = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`)
    if(!response.ok){
        throw new Error ('Failed to get specific product.')
    }
    const data = await response.json()
    dispatch(getOneProduct(data))
    return data
}

// REDUCER
function productReducer(state = {}, action) {
    switch(action.type){
        case GET_ALL_PRODUCTS:{
            return{...state, ...action.products}
        }
        case GET_ONE_PRODUCT:{
            return{...state, ...action.product}
        }
        default:
            return state
    }
}

export default productReducer
