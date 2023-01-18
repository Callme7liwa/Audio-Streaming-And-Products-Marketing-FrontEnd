import "./../../8-css/Admin/DashManageUsers.css";
import waiting from "./../../7-images/waiting.png"
import MusicPosted from "./../../7-images/MusicPosted.png"
import Product from "./../../7-images/product.png"
import Like from "./../../7-images/like.png";
import { CardManageUser } from "./Sous-Component/CardManageUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProductPosted } from "../Component-Products/Product-Admin/AllProductPosted";
import { AllProductQueue } from "../Component-Products/Product-Admin/AllProductQueue";
import { NewProduct } from "../Component-Products/Product-Admin/NewProduct";
import { setOwnProduct } from "../../4-actions/product";
import { AllProductsLiked } from "../Component-Products/Product-Admin/AllProductsLiked";
import { HeaderDash } from "./HeaderDash";
import { AllProductsDataBase } from "../Component-Products/Product-Admin/AllProductsDataBase";

export const DashProducts = (props) => {

    const {handleClick,user} = props;
   
    const {username,photo,is_admin}=user ; 

    const [page,setPage] = useState(0);

    const dispatch = useDispatch();

    const {myProduct} = useSelector((state)=>state.product);

    const [fetch , setFetch] = useState(false);

    const fetchData = () => {
        dispatch(setOwnProduct());
        setFetch(true);
    }

   useEffect(()=>{
       if(!fetch)
        fetchData();
   })
    
    
    if(myProduct === null)
    return <> Please wait .... </>
    
    const renderList = () => {
        console.log(page);
        switch(page)
        {   
            case '1' : return <AllProductQueue   dispatch={dispatch} isAdmin={props.user.is_admin} handleChangePage={handleChangePage}/>
            case '2' : return <NewProduct        dispatch={dispatch} handleChangePage={handleChangePage}/>
            case '3' : return <AllProductPosted  dispatch={dispatch} isAdmin={props.user.is_admin} handleChangePage={handleChangePage} />
            case '4' : return <AllProductsLiked  dispatch={dispatch} isAdmin={props.user.is_admin} handleChangePage={handleChangePage} />
            case '5' : return <AllProductsDataBase  dispatch={dispatch} isAdmin={props.user.is_admin} handleChangePage={handleChangePage} />
            default : return ( 
            <div class="container-manage ">
                {is_admin == 1 ? <CardManageUser title="ALL PRODUCTS" image={MusicPosted} icon="fa fa-plus" id='5' changePage={page=>setPage(page)}/> : ''}
                
                
                {is_admin !=1 ? (<CardManageUser title="DISPLAY ALL PRODUCTS LIKED " image={Like} icon="fa fa-eye" id='4' changePage={page=>setPage(page)}/>):null}
                
                {
                    is_admin ==1 || is_admin == 0 ? 
                    (
                        <>
                        <CardManageUser title="DISPLAY PRODUCTS  IN  QUEUE" image={waiting} icon="fa fa-plus" id='1' changePage={page=>setPage(page)}/>
                        <CardManageUser title="DISPLAY ALL POSTED PRODUCTS " image={MusicPosted} icon="fa fa-eye" id='3' changePage={page=>setPage(page)}/>
                        </>
                    )
                    :
                    null
                }   
                {is_admin == 0 ? (<CardManageUser title="ADD NEW PRODUCT" image={Product} icon="fa fa-plus" id='2' changePage={page=>setPage(page)}/>):null}
            </div>

)
        }
    }
    
    const handleChangePage = () => {
        setPage(0);
    }
    
    
    return (
        <>
            <div class="dash-main">
                <HeaderDash handleClick={handleClick} username={username} photo={photo} is_admin={is_admin} />
                {renderList()}
            </div>
        </>
    )
}