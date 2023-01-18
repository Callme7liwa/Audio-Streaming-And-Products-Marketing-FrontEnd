
export const ProductDetailComponent = (props) => {
    const {product}=props;
    return (
        <>
         <div class="container-item">
        <div class="card-item">
            <div class="card-left">
               {/* <span class="text"> KIF CASA KIF BARIZ 2017 </span> --> */}
                <img src={product.image}/>
            </div>
            <div class="card-right">
                <div class="card-price">
                    <span class="dollar"> <i class="fa fa-euro" aria-hidden="true"></i></span>
                    <span class="chiffre">{product.price} </span>
                </div>
                <div class="card-main">
                    <div class="main-product-title"> {product.title}</div>
                    <div class="main-product-type">  {product.category} </div>
                    <div class="main-product-description">
                        {product.description}
                    </div>                  
                </div>
                <div class="card-product-footer">
                    <div class="product-size">
                        <span class="product-size-title">SIZE</span>
                        <div class="product-size-numbers">
                            <span class="size-number">S</span>
                            <span class="size-number">M</span>
                            <span class="size-number">L</span>
                            <span class="size-number">XL</span>
                            <span class="size-number">XL</span>
                        </div>
                    </div>
                    <div class="product-colors">
                        <span class="product-color-title">COLORS</span>
                        <div class="product-color">
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                        </div>
                    </div>
                    <div class="card-button-submit">
                            <button class="card-button"> Add to Card <i class="fa fa-long-arrow-right"></i> </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
 
        </>
    )
}