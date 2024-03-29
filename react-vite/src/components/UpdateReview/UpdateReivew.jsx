import { useDispatch, useSelector } from "react-redux"
import ReviewForm from "../ReviewForm/ReviewForm"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { reviewsByProductThunk } from "../../redux/review"

function UpdateReview(){
    const dispatch = useDispatch()
    const {reviewId, productId} = useParams()
    const reviews = useSelector(state => state.reviews.Reviews)

    useEffect(()=> {
        dispatch(reviewsByProductThunk(productId))
    },[dispatch])

    if(!reviews?.length){
        return <div>Loading...</div>
    }

    let rev
    for(let review of reviews){
        if(review.id ==reviewId){
            rev = review
        }
    }

    let button = 'Update'
    return(
        <>
            <h1>Update Review</h1>
            <ReviewForm rev={rev} button={button}/>
        </>
    )
}

export default UpdateReview
