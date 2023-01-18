import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getMyProductLiked, getProductLiked, unLikeProduct } from "../../../4-actions/product";
import { Empty } from "../../Empty";
import { CardProductQeueu } from "./CardProductQeueu";

export const AllProductsLiked = (props) => {


    const [fetch , setFetch] = useState(false);
    const {productsLiked} = useSelector(state=>state.product);

    const {handleChangePage , dispatch } = props ; 

    const fetchData = () => {
            dispatch(getMyProductLiked())
            setFetch(true);
    }

    useEffect(()=>{
        if(fetch===false)
            fetchData();
    });

    if(fetch===true )
        {if(productsLiked!==null)
        {         
            if(productsLiked.length==0)
               return <Empty title=" List of liked product is empty "/>
        }
        else
        {
            return <Empty title=" List of liked product is empty "/>
        }}
         

    if(fetch===false&&productsLiked===null )
        return <> Wait please </>


    const handleUnlike = (product) => {
        dispatch(unLikeProduct(product.id))
    }

    const renderItems = 
    productsLiked.map((product)=>{
            return (
                <CardProductQeueu handleUnlike={handleUnlike} type="liked" product={product}  key={product.id} />
        ) 
    });

    

    return (
        <div class="container-component"> 
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>       
            <>{renderItems}</>
        </div>
    )
}