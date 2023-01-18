import NotFound from "./../7-images/NotFound.png"
import "./../8-css/Commun/Empty.css"
export const Empty = (props) => {
    const {title} = props
    return (
        <> 
        <div class="container-empty">
            <div class="empty-img"> <img src={NotFound} /></div>
            <div class="empty-text"><h2 class="text-warning"> {title}</h2></div>
        </div>
        </>
       
    )
}