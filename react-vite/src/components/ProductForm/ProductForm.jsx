import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from 'react-router-dom'
import './ProductForm.css'
import { PiPlantDuotone } from "react-icons/pi";
import { createProductThunk, updateProductThunk } from "../../redux/product";

function ProductForm({button, updateProduct}){
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { productId } = useParams()
    const currUser = useSelector(state => state.session.user)

    const [name, setName] = useState(updateProduct?.name)
    const [price, setPrice] = useState(updateProduct?.price)
    const [description, setDescription] = useState(updateProduct?.description)
    const [category, setCategory] = useState(updateProduct?.category)
    const [image_url, setImageUrl] = useState(updateProduct?.image_url)
    const [imageLoading, setImageLoading] = useState(false)
    const [validation, setValidation] = useState()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const errors = {}
        if (!currUser) {
            nav('/')
        }
        if(submitted){
            if(!name?.length || name?.length > 50){
                errors.name = 'Product name must be between 1 and 50 characters.'
            }
            if(!price){
                errors.price = 'Price is required.'
            }
            if(price && isNaN(price)){
                errors.priceNum = 'Price must only contain numbers.'
            }
            if(!description){
                errors.description = 'Product description is required.'
            }
            if(description?.length > 2000 || description?.length < 5){
                errors.descriptionLength = 'Description must be at least 5 and less than 2000 characters.'
            }
            let product_category=['Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine']
            if(!product_category.includes(category)){
                errors.category = 'Please select one of the listed categories.'
            }
            if(!image_url){
                errors.image_url = 'Product image is required.'
            }
        }
        setValidation(errors)
    }, [currUser, nav, submitted, name, price, description, category, image_url])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_url', image_url)
        formData.append('name', name)
        formData.append('price', parseFloat(price))
        formData.append('category', category)
        formData.append('description', description)

        setImageLoading(true);
        setSubmitted(true);

        if(!productId){
            // console.log('create new product')
            await dispatch(createProductThunk(formData))
        }
        else{
            console.log('update product')
            await dispatch(updateProductThunk(productId, formData))
        }
        nav(`/products/${productId}`)
    }

    return(
        <div className='product-form-page'>
            <hr></hr>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className='review-form-container'
            >
                <label className='prod-form-label'>
                    Product Name *
                    <input
                        type='text'
                        name={name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </label>
                {validation?.name && <p className='validation-message'>{validation?.name}</p>}
                <label className='prod-form-label'>
                    Category
                    <select
                        value = {category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value='' hidden>Select a Category</option>
                        <option value='Fern'>Fern</option>
                        <option value='Flower'>Flower</option>
                        <option value='Shrub'>Shrub</option>
                        <option value='Succulent'>Succulent</option>
                        <option value='Tree'>Tree</option>
                        <option value='Vine'>Vine</option>
                    </select>
                </label>
                {validation?.category && <p className='validation-message'>{validation?.category}</p>}

                <label className='prod-form-label'>
                    Price*
                    <input
                        type='text'
                        name={price}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        ></input>
                </label>
                {validation?.priceNum && <p className='validation-message'>{validation?.priceNum}</p>}
                {validation?.price && <p className='validation-message'>{validation?.price}</p>}
                <label className='prod-form-label'>
                    Product Description
                    <textarea
                        type='text'
                        name={description}
                        value={description}
                        placeholder="Describe your product"
                        rows={8}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>
                {validation?.description && <p className='validation-message'>{validation?.description}</p>}
                <label className='prod-form-label'>
                    <input
                        type='file'
                        accept="image/*"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                    ></input>
                </label>
                {validation?.image_url && <p className='validation-message'>{validation?.image_url}</p>}
                {image_url?.length > 0 && (
                    <label htmlFor="post-image-input" className="file-input-labels-noname"><img src={image_url} className="thumbnails-noname"></img></label>
                )}
                <button type='submit' className='product-form-btn'>{button}</button>
                {(imageLoading) && Object.values(validation).length < 0 && <p className='loading-txt'><PiPlantDuotone className='plant-icon'/></p>}
            </form>
        </div>
    )
}

export default ProductForm
