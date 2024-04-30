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
        <div className='create-rev-form'>
            <h1 className='rev-form-header'>Create Review</h1>
            <ReviewForm rev={rev} button={button}/>
        </div>
    )
}

export default CreateReview
