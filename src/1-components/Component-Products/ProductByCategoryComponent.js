import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductByCategory } from "../../4-actions/product";
import { Product } from "./Product";
import { ProductHeader } from "./ProductHeader";
import logo from "./../../7-images/logo.png";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const ProductByCategoryComponent = (props) => {
    const {dispatch,category}=props;
    const {productsByCategory} = useSelector(state=>state.product);
    const fetchProductByCategory = () => {
        dispatch(getProductByCategory(category))
    }
    useEffect(()=>{
        fetchProductByCategory();
    },[category]);

    if(productsByCategory ===null ) {
        return (
            
            <Box mt={50} >
                <CircularProgress />
            </Box>
        )
    }

    const renderList = 
        productsByCategory.map((product)=>{
        return (
            <Product product={product} id={product.id} key={product.id} />
        )
    });

 
   

    return (
        <>   
                <ProductHeader image={logo} page="DURAPP" title={category} description="SUPPORT YOUR FAV ARTIST BY SELLING PRODUCT" />
                <div class="container-products">
                    {productsByCategory ===null ?  '' : renderList}
                </div>
         </>
    )
}