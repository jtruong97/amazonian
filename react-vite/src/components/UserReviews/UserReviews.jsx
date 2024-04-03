import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviewsThunk } from "../../redux/review"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import { PiPlantDuotone } from "react-icons/pi";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import './UserReviews.css'

function UserReviews(){
    const dispatch = useDispatch()
    const userRevs = useSelector(state => state.reviews.UserReviews)
    const products = useSelector(state => state.products.Products)
    const currUser = useSelector(state => state.session.user)

    useEffect(()=>{
        dispatch(getUserReviewsThunk())
        dispatch(getAllProductsThunk())
    },[dispatch])

    if(!products?.length || currUser?.length){
        return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    console.log(userRevs, 'user rev arr')

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
            {userRevs?.length==0 && <p>You have no reviews</p>}
            {userRevs?.length ==1 && <p>You have {userRevs?.length} review</p>}
            {userRevs?.length >=1 && <p>You have {userRevs?.length} reviews</p>}
            {userRevs?.map (review => (
                <div key={review?.id} className='rev-containers'>
                    <NavLink to={`/products/${products[(review?.product_id) -1]?.id}`} className='nav-rev-prod'>
                        <h2>Product: {products[(review?.product_id) -1]?.name}</h2>
                        <img src={products[(review?.product_id) - 1]?.image_url} className='rev-img'/>
                    </NavLink>
                    <hr></hr>
                    <div className='rev-rev-container'>
                        <h2>Reviewed: </h2>
                        <p className='rev-date'>{refactorDate(review?.createdAt)}</p>
                    </div>
                    <span className='star-rating-icons'>{starsIcon(review?.rating)}</span>
                    <p className='rev-text'>{review?.review}</p>
                    <img src={review.image_url} className='rev-img'/>
                </div>
            ))}
        </div>
    )
}

export default UserReviews
