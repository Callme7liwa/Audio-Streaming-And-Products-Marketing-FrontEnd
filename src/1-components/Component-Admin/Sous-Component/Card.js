import { useEffect } from "react";

export const Card = (props) => {
    const {image , info , textwarning} = props ; 
    
    return (
        <div class="card-manage-intial">
            <div class="card-manage-box-initial">
                <div class="dash-main-content-card-left">
                    <img src={image} />
                </div>
                <div class="dash-main-content-card-right">
                {info}<br/>    <span class="text-warning "> {textwarning}</span>
                <br/> <span className="show "><i class="fa fa-eye"></i> click to show </span>
                </div>
            </div>
        </div>
    )
}