import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetailComponent } from "../../1-components/Component-Products/ProductDetailComponent";
import { getProduct } from "../../4-actions/product";
import { removeSelectedProduct } from "../../4-actions/product";
import "./../../8-css/Product/productDetail.css";
export const ProductDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    
    const {currentProduct} = useSelector(state=>state.product);

    const fetchProductDetail =  () => {
        dispatch(getProduct(id));
    }


    useEffect(()=>{
        if(id && id !== "" )
            fetchProductDetail()
         return dispatch(removeSelectedProduct());
    },[id])

    const WhatTodisplay = ()=>{
        if(currentProduct!==null)
        {
            console.log("cc",currentProduct);
            return <ProductDetailComponent product={currentProduct} />

        }
            return ( 
                <Box mt={50} >
                    <CircularProgress />
                </Box>  
            )
    }
  


   


    return (
      <>
        {WhatTodisplay()}
      </>
    )
}