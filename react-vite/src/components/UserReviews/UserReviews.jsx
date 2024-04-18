import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviewsThunk } from "../../redux/review"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteReview from "../DeleteReview/DeleteReview";
import { PiPlantDuotone } from "react-icons/pi";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import './UserReviews.css'

function UserReviews(){
    const dispatch = useDispatch()
    const userRevs = useSelector(state => state.reviews.UserReviews)
    const prod = useSelector(state => state.products)
    const currUser = useSelector(state => state.session.user)
    const [deleteReivew, setDeleteReview ]= useState(false)

    useEffect(()=>{
        dispatch(getUserReviewsThunk())
        dispatch(getAllProductsThunk())
    },[dispatch, deleteReivew])

    const renderDelete = () => {
        setDeleteReview(!deleteReivew)
    }

    let products = Object.values(prod)

    if(!products?.length || currUser?.length){
        return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    function refactorDate(date){
        let newDate = date?.split(' ')[2] + " "+date?.split(' ')[1] +" "+ date?.split(' ')[3]
        return newDate
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
        <div className='user-reviews-page'>
            <h1>{currUser?.first_name} Reviews</h1>
            <hr></hr>
            {userRevs?.length == 0 && <p>You have no reviews</p>}
            {userRevs?.length == 1 && <p>You have {userRevs?.length} review</p>}
            {userRevs?.length >1 && <p>You have {userRevs?.length} reviews</p>}
            {userRevs?.map (review => (
                <div key={review?.id} className='rev-containers'>
                    <NavLink to={`/products/${prod[(review?.product_id)]?.id}`} className='nav-rev-prod'>
                        <h2>Product: {prod[(review?.product_id)]?.name}</h2>
                        <img src={prod[(review?.product_id)]?.image_url} className='rev-img'/>
                    </NavLink>
                    <hr></hr>
                    <div className='rev-rev-container'>
                        <h2 className='reviewed-txt'>Reviewed: </h2>
                        <p className='rev-date'>{refactorDate(review?.createdAt)}</p>
                    </div>
                    <span className='star-rating-icons star-rev'>{starsIcon(review?.rating)}</span>
                    <p className='rev-text'>{review?.review}</p>
                    <div className='rev-buttons'>
                        <img src={review?.image_url} className='rev-img'/>
                        <button className='review-btns rev-page-btns'>
                            <NavLink to={`/products/${prod[(review?.product_id)]?.id}/review/${review?.id}/edit`} className='update-rev-btn'>Update Review</NavLink>
                        </button>
                        <button className='review-btns delete-rev-btn rev-page-btns'>
                            <OpenModalMenuItem
                                itemText='Delete Review'
                                modalComponent={<DeleteReview reviewId={review?.id} productId={prod[(review?.product_id)]?.id} renderDelete={renderDelete}/>}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserReviews
