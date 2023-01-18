export const ProductsRelationShip = (props) => {

    const {sameCurrentProductsCategory} = props ; 
    const displayProductsRelationShip = sameCurrentProductsCategory?.map(product=>{
        return (
            <>  
                    <div class="card-item-product-relationship">
                        <img src={"http://localhost:8000/"+product.photo} />
                        <h3> MAD {product.price+'.00'} </h3>
                    </div>
            </>
                );
    });

    return (
        <section class="container-item-relatioship">
                <h1> MAY YOU LIKE THESE TO </h1>
                <div class="content-item-relationship">
                    {displayProductsRelationShip}
                </div>
        </section>
    )
}