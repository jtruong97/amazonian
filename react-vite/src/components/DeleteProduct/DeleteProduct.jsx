import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteProductThunk } from "../../redux/product";
import './DeleteProduct.css'

function DeleteProduct({productId, renderDelete}){
    const { closeModal } = useModal()
    const dispatch = useDispatch()

    const deleteProduct = async (e) => {
        e.preventDefault()
        await dispatch(deleteProductThunk(productId))
        renderDelete()
        closeModal()
    }

    return(
        <div className='delete-product-modal'>
            <h1 className='confirm-del-txt'>Are you sure you want to remove this product?</h1>
            <button className='del-prod-btns confirm-delete-btn' onClick={deleteProduct}>Yes (Delete Product)</button>
            <button className='del-prod-btns cancel-delete-btn' onClick={closeModal}>Cancel</button>
        </div>
    )
}

export default DeleteProduct
