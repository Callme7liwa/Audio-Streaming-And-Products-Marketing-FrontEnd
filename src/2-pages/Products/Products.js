import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../4-actions/product";
import { AllProducts } from "../../1-components/Component-Products/AllProducts";
import "./../../8-css/Product/product.css"
import { Navbar } from "../../1-components/Navbar";
import { Box, CircularProgress } from "@mui/material";
import { ProductByCategoryComponent } from "../../1-components/Component-Products/ProductByCategoryComponent";
export const Products = () => {

    const {products} = useSelector(state=>state.product);
    const [etat,setEtat] = useState(false);
    const [page,setPage]=useState(0);

    const dispatch = useDispatch();
    const  fetchData = () => {
        dispatch(getProducts());
    }

    useEffect(()=>{
            if(etat==false || products === null)
            {
                fetchData();
                setEtat(true);
            }    
    })

   

    const renderList = () => {
        if(products!==null)
        {
            switch(page)
            {
                case 1 : return <AllProducts products={products} /> ;                
                case 2 : return <ProductByCategoryComponent dispatch={dispatch} category="men's clothing" />  ;               
                default : return <AllProducts products={products} />;            
            }
        }
        else
        return ( 
            <Box  >
                <CircularProgress />
            </Box>
            )
    }

    return (
        <div class="page-product-container">
                <Navbar link1="allProducts" link2="rappers" link3="signers" changePage={page=>setPage(page)}> </Navbar>
                    {renderList()}
        </div>
    )

}