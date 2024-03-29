import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import './LandingPage.css'

function LandingPage(){
    const dispatch = useDispatch()
    const productsArr = useSelector(state => state.products.Products)

    useEffect(() => {
        dispatch(getAllProductsThunk())
    },[dispatch])

    if(!productsArr?.length){
        return <div>Loading...</div>
    }

    function formatDescription(description){
        let newDescription = description.slice(0,100) + '...'
        return newDescription
    }

    function reviewLength(){

    }
    function avgRating(){

    }


    return(
        <div className='landing-page-container'>
            {productsArr?.map (product => (
                <div className='landing-product-container'>
                    <NavLink className='landing-nav-container' to={`/products/${product.id}`} key={product.id}>
                        <img src={product.image_url} className='product-img'/>
                        <div className='product-info'>
                            <div>{product.name}</div>
                            <div>{formatDescription(product.description)}</div>
                            <div className='landing-rating-container'>
                                <div>Product Rating here</div>
                                <div>Number of Ratings here</div>
                            </div>
                            <div>${product.price}</div>
                            <button>Add to cart</button>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default LandingPage
