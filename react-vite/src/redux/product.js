const GET_ALL_PRODUCTS = '/products/getAllProducts'
const GET_ONE_PRODUCT = '/products/productId'
const GET_BY_CAT = '/categories/category'

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

const getCategory = (product) => {
    return{
        type: GET_BY_CAT,
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

export const getByCategoryThunk = (categoryName) => async (dispatch) => {
    const response = await fetch(`/api/products/categories/${categoryName}`)
    if(!response.ok){
        throw new Error ('Failed to get product by category.')
    }
    const data = await response.json()
    dispatch(getCategory(data))
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
        case GET_BY_CAT:{
            return{...state, ...action.product}
        }
        default:
            return state
    }
}

export default productReducer
