import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllProductsThunk} from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { allUserCartsThunk, createCartThunk } from "../../redux/cart";
import { addItemToCartThunk, updateQuantityThunk } from "../../redux/cartItems";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import Carts from "../Carts/Carts";
import './Categories.css'
import { PiPlantDuotone } from "react-icons/pi";


function Categories(){
    const { category } = useParams()
    const dispatch = useDispatch()

    const catObj = useSelector(state => state.products)
    const allCarts = useSelector(state => state.carts.Carts)
    const currUser = useSelector(state => state.session)

    const [updateCart, setUpdateCart] = useState(false)

    useEffect(()=> {
        dispatch(getAllProductsThunk())
        if(currUser?.user){
            dispatch(allUserCartsThunk())
        }
    },[dispatch, category, currUser.user, updateCart])

    let catArr = Object.values(catObj)
    if(!catArr?.length){
        return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    let categoriesArr = catArr.filter(p => p.category == category)

    const valCategories = ['Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine']
    let findValCat = valCategories.find(cat => cat == category)
    if(!findValCat){
        return <h1 className="invalid-cat-txt">No results for this category</h1>
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
                if(!categoriesArr?.length){
                    return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
                }
        return starArr
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
                quantity: (parseInt(findInCart.quantity) + 1)
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

    return(
        <div className='categories-page'>
            <h1>Amazonian: {category}s</h1>
            {categoriesArr?.length == 1 && <p>{categoriesArr?.length} result</p>}
            {categoriesArr?.length > 1 && <p>{categoriesArr?.length} results</p>}
            {categoriesArr?.map (product => (
                <div key={product?.id} className='cat-product-containers'>
                    <NavLink className='cat-nav-container' to={`/products/${product?.id}`}>
                        <img src={product?.image_url} className='cat-product-img'/>
                        <div className='cat-product-info'>
                            <div className='cat-name-text'>{product?.name}</div>
                            <div className='cat-description-text'>{product?.description}</div>
                            <div className='cat-rating-container'>
                                <div>{avgRating(product?.reviews)}</div>
                                <div className='star-rating-icons'>{starsIcon(avgRating(product?.reviews))}</div>
                                <div>
                                    {product?.reviews?.length == 0 && <div className='product-num-ratings'>No ratings</div>}
                                    {product?.reviews?.length == 1 && <div className='product-num-ratings'>1 rating</div>}
                                    {product?.reviews?.length > 1 && <div className='product-num-ratings'>{product?.reviews?.length} ratings</div>}
                                </div>
                            </div>
                            <span className='cat-cents-text'>$</span>
                            <span className='cat-price-text'>{product?.price?.toString().split('.')[0]}</span>
                            <span className='cat-cents-text'>{product?.price?.toString().split('.')[1]}</span>
                        </div>
                    </NavLink>
                    {currUser?.user?.id && (
                        <div className='cat-add-cart'>
                            <button className='add-to-cart-btn' onClick={() => addToCart(product?.id)}>
                                <OpenModalMenuItem
                                    itemText="Add to cart"
                                    modalComponent={<Carts />}
                                />
                            </button>
                        </div>
                    )}
                    {!currUser?.user && (
                        <p className='msg-to-add-cart cat-modals'>
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

export default Categories
