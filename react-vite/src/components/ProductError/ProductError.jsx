import { useParams } from 'react-router-dom';
import './ProductError.css'

function ProductError(){
    const {txt} = useParams()

    return(
        <div className='product-err-container'>
            <h1>No Product `{txt}` Found</h1>
            <p>Please search by product name or category</p>
        </div>
    )
}

export default ProductError;
