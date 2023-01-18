import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { accepteProduct, deleteProduct, getProductQueue } from "../../../4-actions/product";
import { Empty } from "../../Empty";
import { CardProductQeueu } from "./CardProductQeueu";

export const AllProductQueue = (props) => {

    const {productOwnerQueue} = useSelector(state=>state.product);
    const {handleChangePage , dispatch} = props ; 
    const [fetch , setFetch] = useState(false);
    
    const fetchData = () => {
        dispatch(getProductQueue());
        console.log(productOwnerQueue)
            setFetch(true);
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData ();
    })

    const handleUpdate = (product) => {
        console.log(product);
    }

    const handleDelete = (product) => {
         dispatch(deleteProduct(product.id))
    }

    const handleAccepte = (product) => {
        dispatch(accepteProduct(product.id));
    }
    

    if(productOwnerQueue===null)
    {
        return <> Nothing to displat </>
    }

    
    if(fetch===true )
        {if(productOwnerQueue!==null)
        {         
            if(productOwnerQueue.length==0)
               return <Empty title=" List of Qeueu products is empty "/>
        }
        else
        {
            return <Empty title=" List of Qeueu products is empty "/>
        }
    }


    const renderItems = 
        productOwnerQueue.map((product)=>{
                return (
                    <CardProductQeueu handleAccepte={handleAccepte} is_admin={props.isAdmin} type="qeueu" product={product}  key={product.id} handleUpdate={handleUpdate} handleDelete={handleDelete} />
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