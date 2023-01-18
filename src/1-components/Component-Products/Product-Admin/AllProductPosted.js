import "./../../../8-css/Admin/all-qeueu-posted.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteProduct, getProductAccepted } from "../../../4-actions/product";

import { CardProductQeueu } from "./CardProductQeueu";
import { UpdateProduct } from "./UpdateProduct";
import { Empty } from "../../Empty";

export const AllProductPosted = (props) => {

    const {handleChangePage , dispatch} = props ; 
    const [fetch , setFetch ] = useState(false);
    const [etat,setEtat] = useState(0);
    const [currentProduct , setCurrentProduct] = useState(null);
    const {productOwnerAccepted} = useSelector((state)=>state.product);

    const fetchData = () => {
        dispatch(getProductAccepted());
        setFetch(true);
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData();
    })

    if(productOwnerAccepted===null)
    {
        return <> Nothing to displat </>
    }

    if(fetch===true )
        {if(productOwnerAccepted!==null)
        {         
            if(productOwnerAccepted.length==0)
               return <Empty title=" List of Accepted products is empty "/>
        }
        else
        {
            return <Empty title=" List of accepted products is empty "/>
        }
    }

    const handleUpdate = ($product) => {
        setEtat(1);
        setCurrentProduct($product)
        
    }

    const handleDelete = (product) => {
        dispatch(deleteProduct(product.id))
    }
    
    const renderItems = 
            productOwnerAccepted.map((product)=>{
                return (
                    <CardProductQeueu type="posted" handleUpdate={handleUpdate} handleDelete={handleDelete} product={product}  key={product.id}></CardProductQeueu>
            ) 
    });

    const rendererComponent = () => {
        switch(etat)
        {
            case 1  : return <UpdateProduct product = {currentProduct} />
            default : 
            return ( <>{renderItems}</>
            )
        }
    }

    return (
        <div class="container-component">
                <div class="go-back-to-dashboard back-all-user">
                    <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
                </div>
                <>{rendererComponent()}</>
            
        </div>
    )
    
}