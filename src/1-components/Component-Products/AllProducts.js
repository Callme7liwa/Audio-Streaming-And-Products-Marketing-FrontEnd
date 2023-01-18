import { Product } from "./Product";
import { ProductHeader } from "./ProductHeader";
import logo from "./../../7-images/logo.png";

export const AllProducts = (props) => {

    const {products} = props ; 

    const renderList = products.map((product)=>{
        return (
            <Product product={product} id={product.id} key={product.id} />
        )
    });

    return (
      //   <>{renderList}</>
        <>
            <ProductHeader image={logo} page="DURAPP" title="ALL PRODUCTS" description="SUPPORT YOUR FAV ARTIST BY SELLING PRODUCT" />
            <div class="container-products">
                {renderList}
            </div>
        </>
    )


}