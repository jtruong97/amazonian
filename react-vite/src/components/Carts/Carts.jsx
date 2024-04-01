import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allUserCartsThunk } from "../../redux/cart"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { deleteCartItemThunk, updateQuantityThunk } from "../../redux/cartItems"
import './Carts.css'

function Carts(){
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const allCarts = useSelector(state => state.carts.Carts) // all current users carts
    const productsArr = useSelector(state => state.products.Products) // all avail products to purchase

    const [quantity, setQuantity] = useState()
    const [updateQuantity, setUpdateQuantity] = useState(false)
    const [deleteItem, setDeleteItem ] = useState(false)

    let activeCartObj

    useEffect(()=> {
        dispatch(allUserCartsThunk())
        dispatch(getAllProductsThunk())
    },[dispatch, updateQuantity, deleteItem, quantity, activeCartObj?.length, allCarts?.length, productsArr?.length])

    if(!currUser || !productsArr?.length){
        return <div>Loading...</div>
    }
    if(!allCarts?.length){
        return <div>Your cart is empty</div>
    }

    // find active cart
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
        await dispatch(updateQuantityThunk(updateItem, cartItemId))
        setUpdateQuantity(!updateQuantity)
    }

    const deleteCartItem = async(cartItemId) => {
        await dispatch(deleteCartItemThunk(cartItemId))
        setDeleteItem(!deleteItem)
    }

    let subTotal = 0

    const handleCheckout = async () => {
        for(let item of cartItemsArr){
            await dispatch(deleteCartItemThunk(item.id))
        }
        setDeleteItem(!deleteItem)
    }

    return(
        <div className='carts-modal'>
            <h1 className='cart-compont-name'>Shopping Cart</h1>
            <hr className="line"></hr>
            {/* <p className='price-head-txt'>Price</p> */}
            {!cartItemsArr?.length && (<p>Your cart is empty</p>)}
            {cartItemsArr?.map (item => (
                <div className='cart-items-container' key={item?.id}>
                    <NavLink to={`/products/${item?.product_id}`} className='cart-img-nav'>
                        <img src={productsArr[(item?.product_id) -1]?.image_url} className="cart-prod-img"/>
                    </NavLink>
                    <div className='cart-product-info'>
                        <NavLink className='item-name-price-container' to={`/products/${item?.product_id}`}>
                            <div className='cart-prod-name'>{productsArr[(item?.product_id) -1]?.name}</div>
                            <div className='cart-prod-price'>${productsArr[(item?.product_id) -1]?.price}</div>
                            <div hidden='hidden'>{subTotal+= productsArr[(item?.product_id) -1]?.price}</div>
                        </NavLink>
                        <div className='qty-container'>
                            Quantity: {item?.quantity}
                            <form
                                onSubmit={(e) => handleUpdate(e, item.id, item.product_id)}
                                className='update-quantity-form'
                            >
                                <select onChange={(e) => setQuantity(e.target.value)} className='select-qty-dropdown'>
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
                                <button type='submit' className='cart-btns updat-btn'>Update</button>
                            </form>
                                <button onClick={() => deleteCartItem(item.id)} className='cart-btns delete-cart-btn'>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <hr></hr>
            {cartItemsArr?.length == 1 && <h3 className='sub-total-txt'>
                Subtotal (<span>{cartItemsArr?.length} item</span>) : {subTotal.toFixed(2)}
            </h3>}
            {cartItemsArr?.length >1 && <h3 className='sub-total-txt'>
                Subtotal (<span>{cartItemsArr?.length} items</span>) : ${subTotal.toFixed(2)}
            </h3>}
            {cartItemsArr?.length > 0 && <button onClick={handleCheckout} className='checkout-btn'>Proceed to checkout</button>}
        </div>
    )
}

export default Carts
