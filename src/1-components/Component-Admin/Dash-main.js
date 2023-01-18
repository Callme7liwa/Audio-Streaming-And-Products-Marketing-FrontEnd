import "./../../8-css/Admin/DashMain.css"
import users from "./../../7-images/users.png"
import signers from "./../../7-images/signers.png"
import products from "./../../7-images/product.png"
import albums from "./../../7-images/albums.png"
import musics from "./../../7-images/musics.png"
import instagram from "./../../7-images/instagram.png"
import demande from "./../../7-images/demand.png"
import ayoub from "./../../7-images/ayoub.jfif"
import { Card } from "./Sous-Component/Card"
import { HeaderDash } from "./HeaderDash"
import { DashAcceuilArtist } from "./Sous-Component/Dash-main-acceuil-artist"
export const DashMain = (props) => {

    const {handleClick,user} = props;
    const {username,city,country,email,birthday,photo,is_admin}=user ; 


    return (
        <>
            <div class="dash-main">
                <HeaderDash handleClick={handleClick} username={username} photo={photo}  is_admin={is_admin}/>
                {is_admin===1 ? 
                    (
                    <div class="dash-main-content">
                        <Card info="more than 51" textwarning="Users" image={users} />
                        <Card info="more than 51" textwarning="Signers" image={signers} />
                        <Card info="more than 51" textwarning="Products" image={products} />
                        <Card info="more than 51" textwarning="Musics" image={musics} />
                        <Card info="more than 51" textwarning="Products" image={products} />
                        <Card info="more than 51" textwarning="Albums" image={albums} />
                        <Card info="more than 51" textwarning="Followers" image={instagram} />
                        <Card info="more than 51 post are" textwarning="Waiting" image={demande} />
                    </div>
                     )
                    : 
                    (<>
                        <DashAcceuilArtist dispatch={props.dispatch} unFollowed={props.unFollowed}  followed={props.followed} />
                    </>)
                }
                
            </div>
        </>
    )
}