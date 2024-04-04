import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from 'react-router-dom'
import { createReviewThunk, updateReviewThunk } from "../../redux/review"
import './ReviewForm.css'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { getOneProductThunk } from "../../redux/product"
import { PiPlantDuotone } from "react-icons/pi";

function ReviewForm({rev, button}){

    const dispatch = useDispatch()
    const nav = useNavigate()
    const { productId, reviewId } = useParams()
    const currUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products)

    const [rating, setRating] = useState(rev?.rating)
    const [review, setReview] = useState(rev?.review)
    const [image_url, setImageUrl] = useState(rev?.image_url)
    const [validation, setValidation] = useState()
    const [imageLoading, setImageLoading] = useState(false)
    // const [hover, setHover] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    useEffect(()=>{
        dispatch(getOneProductThunk(productId))
        if (rev) {
            setRating(rev?.rating)
            setReview(rev?.review)
            setImageUrl(rev?.image_url)
        }
    },[dispatch, productId, rev])

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
        formData.append('rating', parseInt(rating))
        formData.append('review', review)

        setImageLoading(true);
        setSubmitted(true);
        if(!reviewId){
            await dispatch(createReviewThunk(productId, formData))
        }
        else{
            await dispatch(updateReviewThunk(reviewId, formData))
        }
        nav(`/products/${productId}`)
    }

    return(
        <div className='review-product-form'>
            <div className='product-rev-container'>
                <img src={product?.image_url} className='product-rev-img'/>
                <p className='product-rev-name'>Product: {product?.name}</p>
            </div>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className='review-form-container'
            >
                <hr></hr>
                <div className='header-w-require'>
                    <h2 className='rev-form-head'>Overall rating</h2>
                    <p className='requried-txt'>required*</p>
                </div>
                <p className='rev-form-txt'>What would you rate your overall experience with this product?</p>
                <label>
                    <div className='Stars-field'>
                            {[1,2,3,4,5].map(star => (
                                <span
                                    key={star}
                                    className='stars'
                                    // onMouseEnter={()=> setHover(star)}
                                    // onMouseLeave={()=> {
                                    //     if (!rating) {
                                    //         setHover(0);
                                    //     }
                                    // }}
                                    onClick={() => {
                                        // setHover(0);
                                        setRating(star);
                                    }}
                                >
                                    {(star <= rating)? <MdOutlineStar /> : <MdOutlineStarBorder />}
                                </span>
                            ))}
                    </div>
                </label>
                {validation?.rating && (<p className='validation-message'>{validation?.rating}</p>)}
                <hr></hr>
                <div className='header-w-require'>
                    <h2 className='rev-form-head'>Add a photo</h2>
                    <p className='requried-txt'>required*</p>
                </div>
                <p className='rev-form-txt'>Shoppers find images more helpful than text alone.</p>
                <label>
                    <input
                        type='file'
                        accept="image/*"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                    ></input>
                </label>
                {validation?.image_url && (<p className='validation-message'>{validation?.image_url}</p>)}
                {image_url?.length > 0 && (
                    <label htmlFor="post-image-input" className="file-input-labels-noname"><img src={image_url} className="thumbnails-noname"></img></label>
                )}
                <hr></hr>
                <div className='header-w-require'>
                    <h2 className='rev-form-head'>Add a written review</h2>
                    <p className='requried-txt'>required*</p>
                </div>
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
                {validation?.maxRev && (<p className='validation-message'>{validation?.maxRev}</p>)}
                {validation?.minRev && (<p className='validation-message'>{validation?.minRev}</p>)}
                <hr></hr>
                <button type='submit' className='rev-form-btn'>{button}</button>
                {(imageLoading) && Object.values(validation).length < 0 && <p className='loading-txt'><PiPlantDuotone className='plant-icon'/></p>}
            </form>
        </div>
    )
}

export default ReviewForm
