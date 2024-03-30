import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import './LandingPage.css'
import Carts from "../Carts/Carts";
import { allUserCartsThunk, createCartThunk } from "../../redux/cart";
import { addItemToCartThunk } from "../../redux/cartItems";

function LandingPage(){
    const dispatch = useDispatch()
    const productsArr = useSelector(state => state.products.Products)
    const allCarts = useSelector(state => state.carts.Carts)

    const [quantity, setQuantity] = useState('1')

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(allUserCartsThunk())
    },[dispatch])

    if(!productsArr?.length || !allCarts){
        return <div>Loading...</div>
    }

    function formatDescription(description){
        let newDescription = description.slice(0,100) + '...'
        return newDescription
    }

    // find active cart
    let activeCartObj
    for(let cart of allCarts){
        if(cart.is_ordered == false){
            activeCartObj = cart
        }
    }

    const addToCart = async (productId) => {
        let addItem = {
            cart_id: activeCartObj.id,
            product_id: productId,
            quantity: quantity
        }
        if(activeCartObj){
            // Has an open cart, add product to this cart
            console.log('ADD ITEM TO ACTIVE CART')
            await dispatch(addItemToCartThunk(addItem, activeCartObj.id))
        }
        else{
            // create new cart, add product to new cart
            console.log('CREATE A NEW CART THEN ADD ITEM TO IT')
            await dispatch(createCartThunk())
            await dispatch(addItemToCartThunk(addItem, activeCartObj.id))
        }
        return
    }


    return(
        <div className='landing-page-container'>
            {productsArr?.map (product => (
                <div className='landing-product-container' key={product.id}>
                    <NavLink className='landing-nav-container' to={`/products/${product.id}`}>
                        <img src={product.image_url} className='product-img'/>
                        <div className='product-info'>
                            <div>{product.name}</div>
                            <div>{formatDescription(product.description)}</div>
                            <div className='landing-rating-container'>
                                <div>Product Rating here</div>
                                <div>Number of Ratings here</div>
                            </div>
                            <div>${product.price}</div>
                        </div>
                    </NavLink>
                    <div>
                            <form>
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
                            </form>
                    </div>
                    <button className='add-to-cart-btn' onClick={() => addToCart(product.id)}>
                        <OpenModalMenuItem
                            itemText="Add to cart"
                            modalComponent={<Carts />}
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default LandingPage
