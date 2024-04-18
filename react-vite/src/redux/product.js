const GET_ALL_PRODUCTS = '/products/getAllProducts'
const GET_ONE_PRODUCT = '/products/productId'
const GET_BY_CAT = '/categories/category'
const GET_USERS_PRODUCTS = '/products/currentUser'
const CREATE_PRODUCT = '/products/new'
const UPDATE_PRODUCT = '/product/edit'
const DELETE_PRODUCT = 'product/delete'

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

const getUserProducts = (products) => {
    return {
        type: GET_USERS_PRODUCTS,
        products
    }
}

const createProduct = (product) => {
    return{
        type: CREATE_PRODUCT,
        product
    }
}

const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
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

// get all products by category
export const getByCategoryThunk = (categoryName) => async (dispatch) => {
    const response = await fetch(`/api/products/categories/${categoryName}`)
    if(!response.ok){
        throw new Error ('Failed to get product by category.')
    }
    const data = await response.json()
    dispatch(getCategory(data))
    return data
}

// get current users products
export const getUserProductsThunk = () => async (dispatch) => {
    const response = await fetch ('/api/products/current')
    if(!response.ok){
        throw new Error ('Failed to get current user products')
    }
    const data = await response.json()
    dispatch(getUserProducts(data))
    return data
}

// create new product
export const createProductThunk = (newProduct) => async (dispatch) => {
    const response = await fetch(`/api/products/new`, {
        method: 'POST',
        body: newProduct
    })
    if(!response.ok){
        throw new Error ('Failed to create new product.')
    }
    const data = await response.json()
    dispatch(createProduct(data))
    return data
}

// update product by product id
export const updateProductThunk = (productId, updatedProduct) => async (dispatch) => {
    const response = await fetch (`/api/products/${productId}/edit`, {
        method: 'PUT',
        body: updatedProduct
    })
    if(!response.ok){
        throw new Error ('Failed to update product.')
    }
    const data = await response.json()
    dispatch(updateProduct(data))
    return data
}

// delete product by product id
export const deleteProductThunk = (productId) => async (dispatch) => {
    const response = await fetch (`/api/products/${productId}/delete`, {
        method: 'DELETE'
    })
    if(!response.ok){
        throw new Error ('Failed to delete product.')
    }
    const data = await response.json()
    dispatch(deleteProduct(data))
}

// REDUCER
function productReducer(state = {}, action) {
    switch(action.type){
        case GET_ALL_PRODUCTS:{
            const newState={};
            action.products.Products.forEach(p => {
                newState[p.id] = p
            })
            return newState;
        }
        case GET_ONE_PRODUCT:{
            return{...state, [action.product?.id]:action?.product}
        }
        case GET_BY_CAT:{
            const catState={};
            action.product.Category.forEach(p => {
                catState[p.id]= p
            })
            return catState
        }
        case GET_USERS_PRODUCTS: {
            return {...state, ...action.products}
        }
        case CREATE_PRODUCT: {
            return {...state, ...action.product}
        }
        case UPDATE_PRODUCT: {
            return {...state, ...action.product}
        }
        case DELETE_PRODUCT: {
            const deleteState = {...state}
            delete deleteState[action.product]
            return deleteState
        }
        default:
            return state
    }
}

export default productReducer
