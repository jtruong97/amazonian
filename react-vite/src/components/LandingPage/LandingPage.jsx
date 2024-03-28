import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';

function LandingPage(){
    const dispatch = useDispatch()
    const productsArr = useSelector(state => state.products.Products)

    useEffect(() => {
        dispatch(getAllProductsThunk())
    },[dispatch])

    if(!productsArr?.length){
        return <div>Loading...</div>
    }

    return(
        <>
            {productsArr?.map (product => (
                <NavLink className='product-container' to={`/products/${product.id}`} key={product.id}>
                    <img src={product.image_url}/>
                    <div>{product.name}</div>
                </NavLink>
            ))}
        </>
    )
}

export default LandingPage
