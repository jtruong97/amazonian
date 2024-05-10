import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserProductsThunk } from '../../redux/product';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import './UserProducts.css'
import DeleteProduct from '../DeleteProduct/DeleteProduct';

function UserProducts(){
    const dispatch = useDispatch()
    const nav = useNavigate()

    const currUser = useSelector(state => state.session.user)
    const userProducts = useSelector(state => state.products.myProducts)
    const [deleteProduct, setDeleteProduct ]= useState(false)

    useEffect(() => {
        dispatch(getUserProductsThunk())
        if(!currUser?.first_name){
            nav('/')
        }
    },[dispatch, currUser?.first_name, nav, deleteProduct])

    const renderDelete = () => {
        setDeleteProduct(!deleteProduct)
    }

    const noNav = (e) => {
        e.preventDefault()
    }

    return(
        <div className='user-products-page'>
            <h1>{currUser?.first_name}&apos;s Amazonian Products</h1>
            <hr></hr>
            {userProducts?.length == 0 && <p>You have no listings</p>}
            {userProducts?.length == 1 && <p>You have 1 listing</p>}
            {userProducts?.length > 1 && <p>You have {userProducts?.length} listings</p>}
            <button className='new-prod-btn'><NavLink to='/products/new' className='create-prod-btn'>Create a New Product Listing</NavLink></button>
            <hr></hr>
            {userProducts?.map (product => (
                <NavLink to={`/products/${product.id}`} key={product?.id} className='user-prod-container'>
                    <img src={product?.image_url} alt={product?.image_url} className='user-prod-img'/>
                    <div className='user-prod-info'>
                        <div className='prod-txt user-prod-name'>{product?.name}</div>
                        <div className='prod-txt '>Listed On: {(product?.createdAt.slice(0,-13))}</div>
                        <div className='prod-txt '>Product Category: {product?.category}</div>
                        <div className='prod-txt '>Listing Price: ${product?.price}</div>
                        <div className='prod-txt '>{product?.description}</div>
                        <button className='prod-btns'><NavLink to={`/products/${product?.id}/edit`} className='prod-update-btn'>Update</NavLink></button>
                        <button className='prod-btns prod-del-btn' type='button' onClick={(noNav)}>
                            <OpenModalMenuItem
                                itemText='Delete Product'
                                modalComponent={<DeleteProduct productId={product?.id} renderDelete={renderDelete}/>}
                            />
                        </button>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default UserProducts
