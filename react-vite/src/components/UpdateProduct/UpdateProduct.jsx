import { useDispatch, useSelector } from "react-redux"
import { useParams} from 'react-router-dom'
import ProductForm from "../ProductForm/ProductForm";
import './UpdateProduct.css'
import { useEffect } from "react";
import { getOneProductThunk } from "../../redux/product";
import { PiPlantDuotone } from "react-icons/pi";


function UpdateProduct(){
    const { productId } = useParams()
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)

    useEffect(()=>{
        dispatch(getOneProductThunk(productId))
    }, [dispatch, productId])

    let product = allProducts[productId]
    if(product?.id != productId){
            return <div className="loading-txt">Loading...<PiPlantDuotone className='plant-icon'/></div>
        }

    const updateProduct = {
        name: product?.name,
        category: product?.category,
        price: product?.price,
        description: product?.description,
        image_url: product?.image_url
    }

    const button = 'Update'
    return(
        <div className='create-product-page'>
            <h1 className='prod-form-header'>Update Your Product</h1>
            <ProductForm button={button} updateProduct={updateProduct}/>
        </div>
    )
}

export default UpdateProduct
