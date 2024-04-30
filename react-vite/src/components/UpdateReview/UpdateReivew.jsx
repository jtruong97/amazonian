import { useDispatch, useSelector } from "react-redux"
import ReviewForm from "../ReviewForm/ReviewForm"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { reviewsByProductThunk } from "../../redux/review"
import { PiPlantDuotone } from "react-icons/pi";
import './UpdateReview.css'

function UpdateReview(){
    const dispatch = useDispatch()
    const {reviewId, productId} = useParams()
    const reviews = useSelector(state => state?.reviews?.Reviews)

    useEffect(()=> {
        dispatch(reviewsByProductThunk(productId))
    },[dispatch, productId])

    if(!reviews?.length){
        return <div className="loading-txt">Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    let rev
    for(let review of reviews){
        if(review?.id == reviewId){
            rev = review
        }
    }

    let button = 'Update'
    return(
        <div className='update-prod-page'>
            <h1 className='rev-form-header'>Update Review</h1>
            <ReviewForm rev={rev} button={button}/>
        </div>
    )
}

export default UpdateReview
