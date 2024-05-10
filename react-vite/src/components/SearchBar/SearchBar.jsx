import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.css"
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "../../redux/product";
import { useNavigate } from "react-router-dom";
import { PiPlantDuotone } from "react-icons/pi";
import { BiSearchAlt2 } from "react-icons/bi";
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
            console.log('print key down')
            navToSearch()
        }
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
            name:'Fern'
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
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                >
                </ReactSearchAutocomplete>
            </div>
        </div>
    )
}

export default SearchBar;
