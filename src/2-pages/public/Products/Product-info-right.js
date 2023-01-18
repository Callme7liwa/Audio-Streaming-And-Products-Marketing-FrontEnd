export const ProductInfoRight = (props) => {

    const {sameCurrentProductsSeller} = props
    const displayProductsSameSeller = sameCurrentProductsSeller?.map(product=>{
        return (
                <>  
                    <div class="recommendation-product">
                        <img src={"http://localhost:8000/"+product.photo}/>
                        <h1> MAD {product.price} </h1>
                    </div>
                </>
                );
    });
    
    return (
        <> 
            <div class="content-item-product-right">
                <span class="recommandation-title">
                    recommended <br/>for you
                </span>
                {displayProductsSameSeller}
            </div>
        </>
    )
}