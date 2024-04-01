import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneProductThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { reviewsByProductThunk } from "../../redux/review";
import { getAllUsersThunk } from "../../redux/users";
import { addItemToCartThunk } from "../../redux/cartItems";
import { createCartThunk } from "../../redux/cart";
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DeleteReview from "../DeleteReview/DeleteReview";
import Carts from "../Carts/Carts";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import './ProductDetails.css'

function ProductDetails(){
    const dispatch = useDispatch()
    const { productId } = useParams()
    const oneProduct = useSelector(state => state.products)
    const reviewsArr = useSelector(state => state.reviews.Reviews)
    const users = useSelector(state => state.user.users)
    const currUser = useSelector(state => state.session.user)
    const allCarts = useSelector(state => state.carts.Carts)

    const [deleteReivew, setDeleteReview ]= useState(false)

    useEffect(() => {
        dispatch(getOneProductThunk(productId))
        dispatch(reviewsByProductThunk(productId))
        dispatch(getAllUsersThunk())
    },[dispatch, deleteReivew, productId])

    if(!oneProduct || !users){
        return <div>Loading...</div>
    }
    const renderDelete = () => {
        setDeleteReview(!deleteReivew)
    }

    // find active cart
    let activeCartObj
    if(allCarts?.length){
        for(let cart of allCarts){
            if(cart.is_ordered == false){
                activeCartObj = cart
            }
        }
    }

    const addToCart = async (productId) => {
        let addItem = {
            cart_id: activeCartObj.id,
            product_id: productId,
            quantity: 1
        }
        if(activeCartObj){
            // Has an open cart, add product to this cart
            await dispatch(addItemToCartThunk(addItem, activeCartObj.id))
        }
        else{
            // create new cart, add product to new cart
            await dispatch(createCartThunk())
            await dispatch(addItemToCartThunk(addItem, activeCartObj.id))
        }
        return
    }

    let seller
    for(let user of users){
        if(user?.id == oneProduct?.user_id){
            seller = user
        }
    }

    function refactorDate(date){
        let newDate = date?.split(' ')[2] + " " + date?.split(' ')[3]
        return newDate
    }

    function avgRating(revArr){
        let starRating = 0
        if(revArr?.length){
            for (let rev of revArr){
                starRating += rev?.rating
            }
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

    let canReview = true
    if(reviewsArr?.length){
        for(let rev of reviewsArr){
            if(rev?.user_id == currUser?.id){
                canReview = false
            }
        }
    }

    return(
        <div className='details-page'>
        <div className='product-details-page'>
            <div className='product-detail-container'>
                <img src={oneProduct?.image_url} className='product-detail-img'/>
                <div className='product-info-container'>
                    <h1>{oneProduct?.name}</h1>
                    <div className='product-rating-container'>
                        <div>{avgRating(oneProduct?.reviews)}</div>
                        <div className='star-rating-icons'>{starsIcon(avgRating(oneProduct?.reviews))}</div>
                        <div>
                            {oneProduct?.reviews?.length == 0 && <div className='product-num-ratings'>No ratings</div>}
                            {oneProduct?.reviews?.length == 1 && <div className='product-num-ratings'>1 rating</div>}
                            {oneProduct?.reviews?.length > 1 && <div className='product-num-ratings'>{oneProduct?.reviews?.length} ratings</div>}
                        </div>
                    </div>
                    <span className='product-cents-text-d'>$</span>
                    <span className='product-price-text-d'>{oneProduct?.price?.toString().split('.')[0]}</span>
                    <span className='product-cents-text-d'>{oneProduct?.price?.toString().split('.')[1]}</span>
                    {currUser && (
                        <button className='add-to-cart-btn details-add-cart-btn' onClick={() => addToCart(oneProduct?.id)}>
                            <OpenModalMenuItem
                                itemText='Add to cart'
                                modalComponent={<Carts />}
                            />
                        </button>
                    )}
                    {!currUser && (
                        <p className='msg-to-add-cart detail-log-sign-msg'>
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
                    <h2>About this item</h2>
                    <p>{oneProduct.description}</p>
                    <h2>Seller Information</h2>
                    <div className='seller-details-container'>
                        <p className='seller-info-text'>Product listed by : {seller?.username}</p>
                        <p className='seller-info-text'>{seller?.first_name}</p>
                        <p className='seller-info-text'>Member since : {refactorDate(seller?.createdAt)}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='review-detail-container'>
                <h1>Customer Reviews</h1>
                {currUser && canReview && (
                    <button className='new-rev-btn'><NavLink to={`/products/${productId}/review/new`} className='new-rev-txt'>Write a customer review</NavLink></button>
                )}
                {reviewsArr?.map (review => (
                    <div key={review?.id} className='review-container'>
                        <div className='review-info-container'>
                            <p className='prod-det-rev-txt rev-name'>{users[(review.user_id)-1]?.first_name} <span className='review-date-txt'>wrote a review on {refactorDate(review.createdAt)}</span></p>
                            <p className='star-rating-icons prod-det-rev-txt'>{starsIcon(review?.rating)}</p>
                            <p className='prod-det-rev-txt review-txt'>{review?.review}</p>
                        </div>
                        <img src={review?.image_url} className='review-image'/>
                        {review?.user_id == currUser?.id  && (
                            <div className='review-buttons'>
                                <button className='review-btns'>
                                    <NavLink to={`/products/${productId}/review/${review?.id}/edit`} className='update-rev-btn'>Update Review</NavLink>
                                </button>
                                <button className='review-btns delete-rev-btn'>
                                    <OpenModalMenuItem
                                        itemText='Delete Review'
                                        modalComponent={<DeleteReview reviewId={review?.id} productId={productId} renderDelete={renderDelete}/>}
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProductDetails
