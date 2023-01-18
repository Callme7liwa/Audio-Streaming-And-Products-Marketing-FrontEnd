import { useEffect, useState } from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export const ProductInfoMain = (props) => {
    const {currentProduct} = props ; 
    const [quantity,setQuatity] = useState(1);
    const [price,setPrice] = useState(currentProduct?.price);
    const [basePrice,setBasePrice] = useState(currentProduct?.price);
    
    const [sizesChoosed,setSizesChoosed] = useState([]);
    

    useEffect(()=>{
        setPrice(basePrice*quantity);
    },[quantity]);

    const displayCategories = currentProduct?.categories?.map(category=>{
        return (<><span>{category.name}</span></>)
    });

    const displaySizes = currentProduct?.sizes?.map(size=>{
        return (
            <>  <span class="size-number" key={size.id}>{size.size}</span> </>
        );
    });

    const handleAction = (action) =>
    {
        if(action===0 && quantity>1)
            setQuatity(quantity-1);
        else
            setQuatity(quantity+1);
    }

    return (
        <div class="content-item-product-main">
            <div class="item-description "><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia provident itaque maiores ipsam ab repellat. </h5></div> 
            <div class="item-reaction">
                <span class="item-reaction-reviewer">+18 Reviews</span>
                <span class="item-reaction-orders">29 orders </span>
            </div>
            <div class="item-bar"></div>
            <div class="item-price">
                <h3 class="currentPrice">MAD {price} </h3>
            <div class="item-bar"></div>
            </div>
            <div class="catgories">
                <h3> Categories </h3>
                {displayCategories} 
            </div>
            <div class="catgories sizes">
                <h3> Product Size  </h3>
                {displaySizes}
            </div>
            <div class="quantity">
                <h3> Quantity </h3>
                <i class="fa fa-minus " onClick={()=>handleAction(0)}></i>
                    <span>{quantity}</span>
                <i class="fa fa-plus "  onClick={()=>handleAction(1)}></i>
            </div>
            <div class="destination">
                <h3> ship to <i class="fa fa-location-arrow"></i> <span>Morocco</span>  </h3>
            </div>
            <div class="buttons-item">
                 <button class="btn btn-success col-md-5 mr-1">BUY NOW </button>
                <button class="btn btn-info col-md-5 ml-1 "> ADD TO PANEL <i class="fa fa-long-arrow-right"></i> </button> 
            </div>
    </div>
    )
}