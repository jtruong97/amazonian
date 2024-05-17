import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.css"
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "../../redux/product";
import { useNavigate } from "react-router-dom";
// import { PiPlantDuotone } from "react-icons/pi";
// import { BiSearchAlt2 } from "react-icons/bi";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

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
        return
    }

    function navToSearch(){
        const product = productsArr.find(p => p.name?.toLowerCase() === searched?.toLowerCase());
        if (product) {
            nav(`/products/${product?.id}`)
            return
        }
        const valCategories = ['fern', 'flower', 'shrub', 'succulent', 'tree', 'vine', 'ferns', 'flowers', 'shrubs', 'succulents', 'trees', 'vines']
        for(let cat of valCategories){
            if(cat == searched.toLocaleLowerCase() && searched.endsWith('s')){
                let catUrl = cat[0].toUpperCase() + cat.slice(1,-1)
                nav(`products/categories/${catUrl}`)
                return
            }
        }
        nav(`/error/${searched}`)
    }

    // note: the id field is mandatory
    const items = [
        {
            id: 0,
            name: 'Alocasia'
        },
        {
            name: 'Fiddle Leaf Fig',
            id: 1,
        },
        {
            id: 2,
            name: 'Pink Tradescantia'
        },
        {
            id: 3,
            name: 'Monstera Albo '
        },
        {
            id: 4,
            name: 'Polka Dot Begonia'
        },
        {
            id:5,
            name:'Monstera'
        },
        {
            id:6,
            name:'String of Hearts'
        },
        {
            id:7,
            name:'Snake Plant'
        },
        {
            id:8,
            name:'Cotyledon Orbiculata'
        },
        {
            id:9,
            name:'Bird of Paradise'
        },
        {
            id:10,
            name:'Agave'
        },
        {
            id:11,
            name:'Asparagus Fern'
        },
        {
            id:12,
            name:'Money Tree'
        },
        {
            id:13,
            name:'Peace Lily'
        },
        {
            id:14,
            name:"Bird's Nest Fern"
        },
        {
            id:15,
            name:'Orchid'
        },
        {
            id:16,
            name:'Dracaena Marginata'
        },
        {
            id:17,
            name:'Aloe'
        },
        {
            id:18,
            name:'Calathea'
        },
        {
            id:19,
            name:'Boston Fern'
        },
        {
            id:20,
            name:'Ferns'
        },
        {
            id:21,
            name:'Flowers'
        },
        {
            id:22,
            name:'Shrubs'
        },
        {
            id:23,
            name:'Succulents'
        },
        {
            id:24,
            name:'Trees'
        },
        {
            id:25,
            name:'Vines'
        }
    ]
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
        // console.log(string, results)
        setSearched(results.name)
    }
    const handleOnHover = (result) => {
      // the item hovered
        // console.log(result)
        setSearched(result.name)
    }
    const handleOnSelect = (item) => {
      // the item selected
        // console.log(item)
        setSearched(item.name)
        navToSearch()
    }
    const handleOnFocus = () => {
        setSearched(searched)
    }

    return(
        <div className="search-container">
            <div className='search-bar' style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    className="autocomplete"
                    placeholder="Search..."
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                >
                </ReactSearchAutocomplete>
                {/* <button
                    className='search-btn'
                    onClick={() => navToSearch()}
                >
                    <svg class="sc-aXZVg jVORrT" width="20" height="20" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button> */}
            </div>
        </div>
    )
}

export default SearchBar;
