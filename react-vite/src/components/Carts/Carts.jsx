import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allUserCartsThunk } from "../../redux/cart"

function Carts(){
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const allCarts = useSelector(state => state.carts.Carts)

    useEffect(()=> {
        dispatch(allUserCartsThunk())
    },[dispatch])

    if(!currUser || !allCarts){
        return <div>Loading...</div>
    }

    let activeCartObj
    for(let cart of allCarts){
        if(cart.is_ordered == false){
            activeCartObj = cart
        }
    }

    console.log(activeCartObj)
    // let itemsInCart


    return(
        <div>
            <h1>Cart component</h1>
        </div>
    )
}

export default Carts
