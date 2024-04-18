import ProductForm from "../ProductForm/ProductForm";
import './CreateProduct.css'

function CreateProduct(){

    const button = 'Submit'
    return(
        <div className='create-product-page'>
            <h1 className='prod-form-header'>List Your Product</h1>
            <ProductForm button={button}/>
        </div>
    )
}

export default CreateProduct
