import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { setAllProductsInDB } from "../../../4-actions/product";
import { CardProductQeueu } from "./CardProductQeueu";

export const AllProductsDataBase = (props) => {

    const [fetch , setFetch] = useState(false);

    const {allProductsInDb} = useSelector(state=>state.product);

    const {handleChangePage , dispatch} = props ; 

    const fetchAllProductsInDataBase = () =>{
        dispatch(setAllProductsInDB());

        setFetch(true);
    };

    useEffect(()=>{
        if(!fetch)
            fetchAllProductsInDataBase();
    })

    if(allProductsInDb==null)
        return <> Wait pls !!!!!</>

    const renderItems = 
    allProductsInDb.map((product)=>{
        console.log(product);
            return (
               <> <CardProductQeueu is_admin={props.isAdmin} type="nothing" product={product}  key={product.id}/> </>
                ) 
    });


    return (
        <div class="container-component">  
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>
            <>{renderItems}</>
        </div>
    );
}