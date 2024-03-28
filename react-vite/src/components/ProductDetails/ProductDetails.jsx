import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneProductThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { reviewsByProductThunk } from "../../redux/review";
import { getAllUsersThunk } from "../../redux/users";
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteReview from "../DeleteReview/DeleteReview";
import './ProductDetails.css'

function ProductDetails(){
    const dispatch = useDispatch()
    const { productId } = useParams()
    const oneProduct = useSelector(state => state.products)
    const reviewsArr = useSelector(state => state.reviews.Reviews)
    const users = useSelector(state => state.user.users)
    const currUser = useSelector(state => state.session.user)

    const [deleteReivew, setDeleteReview ]= useState(false)

    useEffect(() => {
        dispatch(getOneProductThunk(productId))
        dispatch(reviewsByProductThunk(productId))
        dispatch(getAllUsersThunk())
    },[dispatch, deleteReivew])

    if(!oneProduct || !users){
        return <div>Loading...</div>
    }
    const renderDelete = () => {
        setDeleteReview(!deleteReivew)
    }

    let seller
    for(let user of users){
        if(user.id == oneProduct.user_id){
            seller = user
        }
    }

    function refactorDate(date){
        let newDate = date.split(' ')[2] + " " + date.split(' ')[3]
        return newDate
    }

    return(
        <div className='details-page'>
        <div className='product-details-page'>
            <div className='product-detail-container'>
                <img src={oneProduct.image_url} className='product-detail-img'/>
                <div className='product-info-container'>
                    <h1>{oneProduct.name}</h1>
                    <div className='product-rating-container'>
                        <div>Product Rating here</div>
                        <div>Product Num Reviews here</div>
                    </div>
                    <p>${oneProduct.price}</p>
                    <button><NavLink>Add to Cart</NavLink></button>
                    <h2>About this item</h2>
                    <p>{oneProduct.description}</p>
                    <h2>Seller Information</h2>
                    <div className='seller-details-container'>
                        <p className='seller-info-text'>Username: {seller?.username}</p>
                        <p className='seller-info-text'>{seller?.first_name}</p>
                        <p className='seller-info-text'>Joined: {refactorDate(seller?.createdAt)}</p>
                    </div>
                </div>
            </div>
            <div className='review-detail-container'>
                <h1>Customer Reviews</h1>
                <button><NavLink to={`/products/${productId}/review/new`}>Write a customer review</NavLink></button>
                {reviewsArr?.map (review => (
                    <div key={review?.id} className='review-container'>
                        <div className='review-info-container'>
                            <p>{users[(review.user_id)-1]?.first_name}</p>
                            <p>Rating: {review?.rating}</p>
                            <p>Reviewed on {refactorDate(review.createdAt)}</p>
                            <p>{review?.review}</p>
                        </div>
                        <img src={review?.image_url} className='review-image'/>
                        {review.user_id == currUser.id  && (
                            <>
                                <button className='review-btns'>
                                    <OpenModalMenuItem
                                        itemText='Delete Review'
                                        modalComponent={<DeleteReview reviewId={review.id} productId={productId} renderDelete={renderDelete}/>}
                                    />
                                </button>
                                <button className='review-btns'>
                                    <NavLink to={`/products/${productId}/review/${review.id}/edit`}>Update Review</NavLink>
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProductDetails
