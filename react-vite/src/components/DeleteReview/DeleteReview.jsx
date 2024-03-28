import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { deleteReviewThunk } from "../../redux/review";
import { useDispatch } from "react-redux";

function DeleteReview({reviewId, productId, renderDelete}){
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const nav = useNavigate()

    const deleteReview = async (e) => {
        e.preventDefault()
        dispatch(deleteReviewThunk(reviewId))
        renderDelete()
        closeModal()
        nav(`/products/${productId}`)
    }

    return(
        <>
            <h1>Are you sure you want to remove this review?</h1>
            <button onClick={deleteReview}>Yes (Delete Review)</button>
            <button onClick={closeModal}>Cancel</button>
        </>
    )
}

export default DeleteReview
