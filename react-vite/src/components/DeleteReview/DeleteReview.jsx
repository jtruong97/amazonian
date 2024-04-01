import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { deleteReviewThunk } from "../../redux/review";
import { useDispatch } from "react-redux";
import './DeleteReview.css'

function DeleteReview({reviewId, productId, renderDelete}){
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const nav = useNavigate()

    const deleteReview = async (e) => {
        e.preventDefault()
        await dispatch(deleteReviewThunk(reviewId))
        renderDelete()
        closeModal()
        nav(`/products/${productId}`)
    }

    return(
        <div className='delete-rev-modal'>
            <h1 className='confirm-del-txt'>Are you sure you want to remove this review?</h1>
            <button className='del-rev-btns confirm-delete-btn' onClick={deleteReview}>Yes (Delete Review)</button>
            <button className='del-rev-btns cancel-delete-btn' onClick={closeModal}>Cancel</button>
        </div>
    )
}

export default DeleteReview
