import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { allUserCartsThunk, createCartThunk } from "../../redux/cart";
import { addItemToCartThunk, updateQuantityThunk } from "../../redux/cartItems";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import Carts from "../Carts/Carts";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";
import './LandingPage.css'

function LandingPage(){
    const dispatch = useDispatch()
    const productsArr = useSelector(state => state.products.Products)
    const allCarts = useSelector(state => state.carts.Carts)
    const currUser = useSelector(state => state.session)

    // const [quantity, setQuantity] = useState('1') //quantity add to cart feature
    const [updateCart, setUpdateCart] = useState(false)

    useEffect(() => {
        dispatch(getAllProductsThunk())
        if(currUser?.user){
            dispatch(allUserCartsThunk())
        }
    },[dispatch, currUser?.user, updateCart])

    if(!productsArr?.length){ // || !allCarts
        return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    function formatDescription(description){
        let newDescription = description?.slice(0,120) + '...'
        return newDescription
    }

    // find active cart
    let activeCartObj
    if(allCarts?.length){
        for(let cart of allCarts){
            if(cart?.is_ordered == false){
                activeCartObj = cart
            }
        }
    }


    const addToCart = async (productId) => {
        let addItem = {
            cart_id: activeCartObj?.id,
            product_id: productId,
            quantity: 1
        }
        let findInCart = activeCartObj?.cart_items?.find(item => item?.product_id == productId)

        if(activeCartObj && findInCart){
            // product is already in the cart
            let updateQty = {
                product_id: productId,
                quantity: (parseInt(findInCart?.quantity) + 1)
            }
            return await dispatch(updateQuantityThunk(updateQty, findInCart?.id))
        }

        if(activeCartObj){
            // Has an open cart, add product to this cart
            await dispatch(addItemToCartThunk(addItem, activeCartObj?.id))
            setUpdateCart(!updateCart)
        }
        else{
            // create new cart, add product to new cart
            await dispatch(createCartThunk())
            .then((newCart) => {
                addItem.cart_id = newCart.id
                setUpdateCart(!updateCart)
                return dispatch(addItemToCartThunk(addItem, newCart.id))
            })
        }
        return
    }

    function avgRating(revArr){
        let starRating = 0
        for (let rev of revArr){
            starRating += rev?.rating
        }
        return (starRating/revArr?.length).toFixed(1)
    }
    function starsIcon(avgRating){
        let filledStar = Math.floor(avgRating) // round avg rating down
        let arr =[1,2,3,4,5]
        let starArr = []
        arr.forEach(i => {
            if( i <= filledStar){
                starArr.push(<MdOutlineStar key={i}/>)
            }
            else{
                starArr.push(<MdOutlineStarBorder key={i}/>)
            }
        })
        return starArr
    }

    return(
        <div className='landing-page-container'>
            {productsArr?.map (product => (
                <div className='landing-product-container' key={product?.id}>
                    <NavLink className='landing-nav-container' to={`/products/${product?.id}`}>
                        <img src={product?.image_url} className='product-img'/>
                        <div className='product-info'>
                            <div className='product-name-text'>{product?.name}</div>
                            <div className='product-description-text'>{formatDescription(product?.description)}</div>
                            <div className='landing-rating-container'>
                                {isNaN(product?.reviews) &&<div>{avgRating(product?.reviews)}</div>}
                                <div className='star-rating-icons'>{starsIcon(avgRating(product?.reviews))}</div>
                                <div>
                                    {product?.reviews?.length == 0 && <div className='product-num-ratings'>No ratings</div>}
                                    {product?.reviews?.length == 1 && <div className='product-num-ratings'>1 rating</div>}
                                    {product?.reviews?.length > 1 && <div className='product-num-ratings'>{product?.reviews?.length} ratings</div>}
                                </div>
                            </div>
                            <span className='product-cents-text'>$</span>
                            <span className='product-price-text'>{product?.price?.toString().split('.')[0]}</span>
                            <span className='product-cents-text'>{product?.price?.toString().split('.')[1]}</span>
                        </div>
                    </NavLink>
                    {currUser?.user?.id && (
                        <div className='cart-item-feature'>
                            {/* <form> //quantity add to cart feature
                                <select onChange={(e) => setQuantity(e.target.value)}>
                                    <option value='' disabled selected hidden>Qty: 1</option>
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
                            </form> */}
                            <button className='add-to-cart-btn' onClick={() => addToCart(product?.id)}>
                                <OpenModalMenuItem
                                    itemText="Add to cart"
                                    modalComponent={<Carts />}
                                />
                            </button>
                        </div>
                    )}
                    {!currUser?.user && (
                        <p className='msg-to-add-cart'>
                            <OpenModalMenuItem
                                itemText={<span className='login-signup-text'>Log In</span>}
                                modalComponent={<LoginFormModal />}
                                className='login-signup-text'
                            />
                            or
                            <OpenModalMenuItem
                                itemText={<span className='login-signup-text'>Sign Up</span>}
                                modalComponent={<SignupFormModal />}
                            />
                        to add this item to your cart</p>)
                    }
                </div>
            ))}
        </div>
    )
}

export default LandingPage
