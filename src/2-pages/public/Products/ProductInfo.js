import "./../../../8-css/Product/productDetail.css"
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsRelationShip, getPublicProduct, removeSelectedPublicProduct } from "../../../4-actions/public";
import { Modal } from "./Modal";
import { NavbarProduct } from "./NavbarProducts";
import { ProductInfoLeft } from "./Product-info-left";
import { ProductInfoMain } from "./Product-info-main";
import { ProductInfoRight } from "./Product-info-right";
import { ProductsRelationShip } from "./ProductsRelationShip";
export const ProductInfo = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const {currentProduct,sameCurrentProductsSeller,sameCurrentProductsCategory} = useSelector(state=>state.publicReducer);
  
    const fetchProductInfo = () => {
        dispatch(getPublicProduct(id));
        dispatch(getProductsRelationShip(id));
    };

    useEffect(()=>{
        if(id && id !== "" )
            fetchProductInfo();
        else
        return dispatch(removeSelectedPublicProduct());
    },[id]);

    
    if(currentProduct==null)
        return (
            <div class="d-flex align-content-center justify-content-center">
                 <Box  mt={50} >
                    <CircularProgress />
                </Box> 
            </div>
        )
    

    
    return (
        <>
        
        <section class="container-item-product">
            <NavbarProduct link1="all products"  />
            <section class="content-item-product">
                {currentProduct? (<> <ProductInfoLeft currentProduct={currentProduct} /> <ProductInfoMain currentProduct={currentProduct} /> </>):''}
                {sameCurrentProductsSeller ? (<ProductInfoRight sameCurrentProductsSeller={sameCurrentProductsSeller} />):'' }
            </section>
            <section class="container-item-relatioship">
                {sameCurrentProductsCategory? (<ProductsRelationShip sameCurrentProductsCategory={sameCurrentProductsCategory} />) : ''}
            </section>
        </section>

      
         <Modal show={show} close={closeModalHandler} />
        </>
    )
}

