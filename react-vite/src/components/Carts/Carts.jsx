import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allUserCartsThunk } from "../../redux/cart"
import { getAllProductsThunk } from "../../redux/product"
import './Carts.css'
import { deleteCartItemThunk, updateQuantityThunk } from "../../redux/cartItems"

function Carts(){
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const allCarts = useSelector(state => state.carts.Carts) // all current users carts
    const productsArr = useSelector(state => state.products.Products) // all avail products to purchase

    const [quantity, setQuantity] = useState()
    const [updateQuantity, setUpdateQuantity] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)

    useEffect(()=> {
        dispatch(allUserCartsThunk())
        dispatch(getAllProductsThunk())
    },[dispatch, deleteItem, updateQuantity, quantity])

    if(!currUser || !allCarts?.length || !productsArr?.length){
        return <div>Loading...</div>
    }

    // find active cart
    let activeCartObj
    if(allCarts?.length > 0){
        for(let cart of allCarts){
            if(cart?.is_ordered == false){
                activeCartObj = cart
            }
        }
    }
    const cartItemsArr = activeCartObj?.cart_items // arr of products in active cart

    const handleUpdate = async(e, cartItemId, productId) => {
        e.preventDefault()

        const updateItem = {
            product_id:productId,
            quantity: parseInt(quantity)
        }
        dispatch(updateQuantityThunk(updateItem, cartItemId))
        setUpdateQuantity(!updateQuantity)
    }

    const deleteCartItem = async(cartItemId) => {
        dispatch(deleteCartItemThunk(cartItemId))
        setDeleteItem(true)
    }

    return(
        <div className='carts-modal'>
            <h1 className='cart-compont-name'>Shopping Cart</h1>
            {!cartItemsArr?.length && (<p>Your cart is empty</p>)}
            {cartItemsArr?.map (item => (
                <div className='cart-items-container' key={item?.id}>
                    <img src={productsArr[(item?.product_id) -1]?.image_url}/>
                    <div>{productsArr[(item?.product_id) -1]?.name}</div>
                    <div>
                        Quantity: {item?.quantity}
                        <form
                            onSubmit={(e) => handleUpdate(e, item.id, item.product_id)}
                            className='update-quantity-form'
                        >
                            <select onChange={(e) => setQuantity(e.target.value)}>
                                <option value='' disabled selected hidden>Qty:{item.quantity}</option>
                                <option value = '1'>Qty: 1</option>
                                <option value = '2'>Qty: 2</option>
                                <option value = '3'>Qty: 3</option>
                                <option value = '4'>Qty: 4</option>
                                <option value = '5'>Qty: 5</option>
                                <option value = '6'>Qty: 6</option>
                                <option value = '7'>Qty: 7</option>
                                <option value = '8'>Qty: 8</option>
                                <option value = '9'>Qty: 9</option>
                                <option value = '10'>Qty: 10</option>
                            </select>
                            <button type='submit'>Update</button>
                        </form>
                            <button onClick={() => deleteCartItem(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carts
