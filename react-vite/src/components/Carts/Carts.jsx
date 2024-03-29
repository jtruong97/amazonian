import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allUserCartsThunk } from "../../redux/cart"
import { getAllProductsThunk } from "../../redux/product"
import './Carts.css'
import { deleteCartItemThunk } from "../../redux/cartItems"

function Carts(){
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const allCarts = useSelector(state => state.carts.Carts)
    const productsArr = useSelector(state => state.products.Products)

    const [quantity, setQuantity] = useState('1')

    useEffect(()=> {
        dispatch(allUserCartsThunk())
        dispatch(getAllProductsThunk())
    },[dispatch])

    if(!currUser || !allCarts?.length){
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

    const handleUpdate = async(e) => {
        e.preventDefault()
        console.log('update quantity')
    }

    const deleteCartItem = async(cartItemId) => {
        console.log(cartItemId, 'cart item id to delete')
        dispatch(deleteCartItemThunk(cartItemId))
    }

    return(
        <div className='carts-modal'>
            <h1 className='cart-compont-name'>Cart component</h1>
            {activeCartObj?.cart_items?.map (item => (
                <div className='cart-items-container' key={item?.id}>
                    <img src={productsArr[(item?.product_id) -1]?.image_url}/>
                    <div>{productsArr[(item?.product_id) -1]?.name}</div>
                    <div>
                        Quantity: {item?.quantity}
                        <form
                            onSubmit={handleUpdate}
                            className='update-quantity-form'
                        >
                            <select onChange={(e) => setQuantity(e.target.value)}>
                                <option value='' disabled selected hidden>Select Quantity</option>
                                <option value = '1'>1</option>
                                <option value = '2'>2</option>
                                <option value = '3'>3</option>
                                <option value = '4'>4</option>
                                <option value = '5'>5</option>
                                <option value = '6'>6</option>
                                <option value = '7'>7</option>
                                <option value = '8'>8</option>
                                <option value = '9'>9</option>
                                <option value = '10'>10</option>
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
