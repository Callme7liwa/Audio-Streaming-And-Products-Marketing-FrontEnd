import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProductsOfAnCategory, setProductsPublic, setProductsWithCategoryId } from "../../../4-actions/public";
import "./../../../8-css/Product/acceuil-public-product.css"
import { CardProduct } from "./CardProduct";
import { getAllGategories } from "../../../4-actions/Category";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
export const AcceuilPublicProducts = (props) => {

    const dispatch = useDispatch();
    const   {products}           = useSelector(state=>state.publicReducer);
    const   {productsDisplaying} = useSelector(state=>state.publicReducer);
    const   {categories}         = useSelector(state=>state.category);
    const [categoryCurrent , setCategoryCurrent] = useState(0);

    useEffect(()=>{
        if(!products)
            dispatch(setProductsPublic());
        if(!categories)
            dispatch(getAllGategories());
        dispatch(setProductsWithCategoryId())
    },[]);




    if(products===null )
        return (
            <div class="d-flex align-content-center justify-content-center">
                 <Box  mt={50} >
                    <CircularProgress />
                </Box> 
            </div>
        )
    
    const listOfProducts = productsDisplaying?.map(product=>{
        return (
            <CardProduct dispatch={dispatch} product={product} key={product.id}/>
        );
    });

    const displayCategories = categories?.map(category=>{
        return ( <span class={categoryCurrent !== category.id ? '' : 'Categoryactive' } key={category.id} onClick={()=>handleChangeCategory(category.id)}>{category.name}</span> );
    });

    const handleChangeCategory = (id) => {
        setCategoryCurrent(id);
        dispatch(getProductsOfAnCategory(id));
    }

   

    return (
    <>
        <section class="container-public-products">
            <div className="categories-list">
                <span  class={categoryCurrent !== 0? '' : 'Categoryactive' } onClick={()=>handleChangeCategory(0)}> All </span>
                {displayCategories}
            </div>
            <section class="container-content-products">
                <div class="go-back-to-dashboard">
                  <Link to="/dashboard" class="nav-link" ><span  class="go-back-content"> <i class="fa fa-long-arrow-left"></i> Dashboard </span> </Link>
                </div>
                {listOfProducts}
            </section>
        </section>
    </>
    )
}