import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from 'react-router-dom'
import { createReviewThunk, updateReviewThunk } from "../../redux/review"
import './ReviewForm.css'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ReviewForm({rev, button}){
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { productId, reviewId } = useParams()
    const currUser = useSelector(state => state.session.user)

    const [rating, setRating] = useState(rev?.rating)
    const [review, setReview] = useState(rev?.review)
    const [image_url, setImageUrl] = useState(rev?.image_url)
    const [validation, setValidation] = useState()
    const [imageLoading, setImageLoading] = useState(false)
    const [hover, setHover] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const errors = {}
        if (!currUser) {
            nav('/')
        }
        if(submitted){
            if(!rating || rating < 1 || rating > 5){
                errors.rating = 'Rating must be between 1 and 5 stars.'
            }
            if(review.length < 5){
                errors.minRev = 'Review must be more than 5 characters.'
            }
            if(review.length > 2000){
                errors.maxRev = 'Review must be less than 2000 characters.'
            }
            if(!image_url){
                errors.image_url = 'Image is required for your review.'
            }
        }
        setValidation(errors)
    }, [currUser, submitted, rating, review, image_url, nav])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_url', image_url)
        formData.append('rating', rating)
        formData.append('review', review)

        setImageLoading(true);
        setSubmitted(true);
        if(!reviewId){
            console.log('create new review')
            await dispatch(createReviewThunk(productId, formData))
        }
        else{
            console.log('update review')
            await dispatch(updateReviewThunk(reviewId, formData))
        }
        nav(`/products/${productId}`)
    }

    return(
        <>
            <div className='product-rev-container'>
                <img src=''/>
                <p></p>
            </div>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className='review-form-container'
            >
                <hr></hr>
                <h2>Overall rating</h2>
                <label>
                    <div className='Stars-field'>
                            {[1, 2, 3, 4, 5].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label key={i}>
                                        <span
                                            className='stars'
                                            onClick={() => setRating(ratingValue)}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(ratingValue)}
                                        >
                                            {ratingValue <= (hover || star) ? <FaStar /> : <FaRegStar />}
                                        </span>
                                    </label>
                                );
                            })}
                    </div>
                </label>
                {validation?.rating && (<p className='validation-message'>{validation.rating}</p>)}
                <hr></hr>
                <h2>Add a photo</h2>
                <p>Shoppers find images more helpful than text alone.</p>
                <label>
                    <input
                        type='file'
                        accept="image/*"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                    ></input>
                </label>
                {validation?.image_url && (<p className='validation-message'>{validation.image_url}</p>)}
                <hr></hr>
                <h2>Add a written review</h2>
                <textarea
                        className='review-textarea'
                        type='text'
                        name='review'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='What did you like or dislike? What did you use this product for?'
                        rows={7}
                        cols={70}
                />
                {validation?.minRev && (<p className='validation-message'>{validation.minRev}</p>)}
                {validation?.maxRev && (<p className='validation-message'>{validation.maxRev}</p>)}
                <hr></hr>
                <button type='submit'>{button}</button>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </>
    )
}

export default ReviewForm
