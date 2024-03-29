import ReviewForm from "../ReviewForm/ReviewForm"
import './CreateReview.css'

function CreateReview(){

    const rev = {
        review: '',
        rating:'',
        image_url:''
    }
    const button = 'Create Review'

    return(
        <>
            <h1>Create Review</h1>
            <ReviewForm rev={rev} button={button}/>
        </>
    )
}

export default CreateReview
