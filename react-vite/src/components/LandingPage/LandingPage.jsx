import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsThunk } from "../../redux/product"
import { NavLink } from 'react-router-dom';
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import './LandingPage.css'
import Carts from "../Carts/Carts";
import { allUserCartsThunk, createCartThunk } from "../../redux/cart";

function LandingPage(){
    const dispatch = useDispatch()
    const productsArr = useSelector(state => state.products.Products)
    const allCarts = useSelector(state => state.carts.Carts)

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(allUserCartsThunk())
    },[dispatch])

    if(!productsArr?.length || !allCarts){
        return <div>Loading...</div>
    }

    function formatDescription(description){
        let newDescription = description.slice(0,100) + '...'
        return newDescription
    }

    // function reviewLength(){

    // }
    // function avgRating(){

    // }
    let activeCartObj
    for(let cart of allCarts){
        if(cart.is_ordered == false){
            activeCartObj = cart
        }
    }

    const addToCart = async (e) => {
        e.preventDefault()
        
        if(activeCartObj){
            // Has an open cart, add product to this cart
            console.log('ADD ITEM TO ACTIVE CART')
        }
        else{
            // create new cart, add product to new cart
            console.log('CREATE A NEW CART THEN ADD ITEM TO IT')
            await dispatch(createCartThunk())
        }
        return
    }


    return(
        <div className='landing-page-container'>
            {productsArr?.map (product => (
                <div className='landing-product-container' key={product.id}>
                    <NavLink className='landing-nav-container' to={`/products/${product.id}`}>
                        <img src={product.image_url} className='product-img'/>
                        <div className='product-info'>
                            <div>{product.name}</div>
                            <div>{formatDescription(product.description)}</div>
                            <div className='landing-rating-container'>
                                <div>Product Rating here</div>
                                <div>Number of Ratings here</div>
                            </div>
                            <div>${product.price}</div>
                        </div>
                    </NavLink>
                    <button className='add-to-cart-btn' onClick={addToCart}>
                        <OpenModalMenuItem
                            itemText="Add to cart"
                            modalComponent={<Carts />}
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default LandingPage
