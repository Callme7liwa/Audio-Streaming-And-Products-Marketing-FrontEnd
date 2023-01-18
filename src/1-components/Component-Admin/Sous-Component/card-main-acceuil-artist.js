import { Link } from "react-router-dom";

export const CardAcceuilArtist  = (props) => {
    const {item} = props;
    return (
        <div class="dash-main-acceuil-artist-content-card">
            <header class="dash-main-acceuil-artist-content-card-header">
                <div class="card-header-left">
                <img  src={"http://localhost:8000/"+item.user.photo}></img>
                </div>
                <div class="card-header-right">
                   <span class="card-header-right-top"><Link className="link-search" to={`/public/users/${item.user.id}`}>{item.user.username}</Link> </span>
                   {item.nom ? (<span class="card-header-right-bottom"><Link className="link-search" to={`/public/music/${item.id}`}> {item.nom}</Link></span>) : '' }
                   {item.name ? (<span class="card-header-right-bottom"> <Link className="link-search" to={`/public/music/${item.id}`}>{item.name} </Link></span>) : ''  }
                </div>
            </header>
            <main class="dash-main-acceuil-artist-content-card-main">
            <img  src={"http://localhost:8000/"+item.photo}></img>
            </main>
            <footer class="dash-main-acceuil-artist-content-card-footer">
                <i class="fa fa-heart"></i>
                <div class="dash-main-acceuil-artist-content-card-footer-box">
                    <span class="footer-box-username"> {item.user.username}</span>
                    <span class="footer-box-description">{item.description}</span>      
                </div>
            </footer>
        </div>
    )
}