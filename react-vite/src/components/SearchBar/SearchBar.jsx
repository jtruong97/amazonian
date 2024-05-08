import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.css"
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "../../redux/product";
import { useNavigate } from "react-router-dom";
import { PiPlantDuotone } from "react-icons/pi";
import { BiSearchAlt2 } from "react-icons/bi";
import ProductError from "../ProductError/ProductError";

function SearchBar () {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const products = useSelector(state => state.products)

    const [searched, setSearched] = useState('');

    useEffect(()=> {
        dispatch(getAllProductsThunk())
    },[dispatch])

    let productsArr = Object.values(products)
    if(!productsArr?.length){
        return <div className='loading-txt'>Loading...<PiPlantDuotone className='plant-icon'/></div>
    }

    function navToSearch(){
        const valCategories = ['fern', 'flower', 'shrub', 'succulent', 'tree', 'vine', 'ferns', 'flowers', 'shrubs', 'succulents', 'trees', 'vines']
        for(let cat of valCategories){
            if(cat == searched.toLocaleLowerCase() && searched.endsWith('s')){
                let catUrl = cat[0].toUpperCase() + cat.slice(1,-1)
                nav(`products/categories/${catUrl}`)
                setSearched('')
                return
            }
            else if(cat == searched.toLowerCase()){
                let catUrl = cat[0].toUpperCase() + cat.slice(1)
                nav(`products/categories/${catUrl}`)
                setSearched('')
                return
            }
            else{
                for(let p of productsArr){
                    if(p?.name?.toLowerCase()?.includes(searched?.toLowerCase())){
                        setSearched('')
                        nav(`/products/${p?.id}`)
                        return
                    }
                }
            }
        }
        nav(`/error/${searched}`)
    }

    function keyDown(e){
        if(e.key == 'Enter'){
            navToSearch()
        }
    }

    return(
        <div className="search-container">
            <input
                className='search-bar'
                type="text"
                value={searched}
                placeholder=" Search..."
                onChange={(e) => setSearched(e.target.value)}
                onKeyDown={(e) => keyDown(e)}
            ></input>
            <button
                className='search-btn'
                onClick={() => navToSearch()}
            ><BiSearchAlt2/></button>
        </div>
    )
}

export default SearchBar;
