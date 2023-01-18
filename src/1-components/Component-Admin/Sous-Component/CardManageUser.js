import { useEffect } from "react";

export const CardManageUser = (props) =>{
    const {image , title , icon ,id  } = props ; 
  
    return (
            <div class="card-manage-commune">
                <div class="card-manage-box-commune" onClick={()=>props.changePage(id)} >
                        <div class="card-manage-header">
                            <img src={image} />
                        </div>
                        <div class="card-manage-footer">
                            <span>{title}</span>
                            <span> <i class={icon}></i></span>
                        </div>
                </div>
            </div>
    )
}