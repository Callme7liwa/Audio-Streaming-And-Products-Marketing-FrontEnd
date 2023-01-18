import { useEffect } from "react";
import "./../../8-css/Users/users.css"
import ayoub from "./../../7-images/ayoub.jfif"
export const User = (props) => {

    const {key , username } = props ;
    useEffect(()=>{
        console.log("gg")
        console.log(props)

    })
    return (
        <>
            <div class="user-card " key={key}>
               <div class="user-card-header">
                    <div class="card-header-image">
                        <img src={ ayoub} alt="rien"/>
                    </div>
                    <span > {username} </span>
                </div> 
                <div class="user-card-body">
                    <span class="card-body-content">SINCE 2019 </span>
                    <span class="card-body-content"> Developper </span>
                    <span class="card-body-content">51 POST </span>
                </div>
                <div class="user-card-footer">
                    <span class="card-footer-content" > <i class="fa fa-arrow-right"></i> more  </span>
                </div>
            </div>
        </>
    )
}