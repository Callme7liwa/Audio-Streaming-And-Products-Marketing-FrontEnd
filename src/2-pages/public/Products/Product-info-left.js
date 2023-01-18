import { useState } from "react";

export const ProductInfoLeft = (props) => {
    const {currentProduct} = props ; 
    const [currentPhoto , setCurrentPhoto] = useState(currentProduct?.photo);

    const displayImages = currentProduct?.photos?.map(image=>{
    
        return (<><img class={currentPhoto===image.file_photo?'active':''} src={"http://localhost:8000/"+image.file_photo} key={image} onClick={()=>setCurrentPhoto(image.file_photo)}/></>)
    });

    return (
        <div class="content-item-product-left">
            <img src={"http://localhost:8000/"+currentPhoto}/>
            <div class="products-img-list">
            <img src={"http://localhost:8000/"+currentProduct.photo} onClick={()=>setCurrentPhoto(currentProduct.photo)}/>
                {displayImages}
            </div>
        </div>
    )
}