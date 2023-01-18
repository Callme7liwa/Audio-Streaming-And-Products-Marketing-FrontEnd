import { Link } from 'react-router-dom';

export const CardProduct = (props) => {

    const handleClick = (e) => {
            
    }
    return (
        <div class="card-acceuil-product" key={props.product.id}>
            <div class="card-acceuil-box">
                <div class="card-acceuil-image-box">
                    <img src={"http://localhost:8000/"+props.product.photo}></img>
                </div>
                <div class="product-acceuil-info">
                   <Link  to={`products/${props.product.id}`} > <span  id={props.product.id}><i id={props.product.id} class="fa fa-long-arrow-right"></i></span></Link> 
                </div>
            {/* <span class="semi-color-product"></span>
            <span class="semi-into"></span> */}
            </div>
        </div>
    )
}