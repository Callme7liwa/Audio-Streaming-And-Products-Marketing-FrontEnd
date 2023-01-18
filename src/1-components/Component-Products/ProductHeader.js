export const ProductHeader = (props) => {
    const {page,title,description,image} = props;
    return ( 
        <div class="container-header">
            <div class="container-header-left">
                <img src={image} />
            </div>
            <div class="container-header-right">
                <span class="container-header-right-page"> {page} </span>
                <span class="container-header-right-title"> {title} </span>
                <span class="container-header-right-description"> {description} </span>
            </div>
        </div>
    )
}