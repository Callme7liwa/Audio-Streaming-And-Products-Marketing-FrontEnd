import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../4-actions/auth";

export const HeaderDash = (props) => {

    const {handleInputChange , handleClick , photo , username , title,is_admin} = props ; 

    const [etat,setEtat] = useState(1);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }


    const handleChangeEtat= () => {
        if(etat==0)
            setEtat(1);
        else
            setEtat(0);
    }

    return (
        <div class="dash-main-header">
            <div class="dash-main-header-left">
                    <i class="fa fa-arrow-left" onClick={handleClick}></i>
            </div>
            {title==='all users' ? (<><input class="InputSearchUser" name='userSearch' onChange={handleInputChange} placeholder="Search by username"></input></>) : ''}
            <div class="dash-main-header-right-container" onClick={handleChangeEtat}>
                <div class={etat===1?"dash-main-header-right-box":"dash-main-header-right-box active"}>
                    <div class="dash-main-header-right-image">
                        <img src={"http://localhost:8000/"+photo} />
                    </div>
                    <div class="dash-main-header-right-username ">{username} </div>
                </div>
            </div>
                <div class={etat===0?"drop-down":"drop-down active"}>
                    <ul>
                      {is_admin !=1 ?
                       (
                         <>
                         <Link class="no-deco" to="public/products"><li> products side</li></Link>  
                         <Link class="no-deco" to="public/musics"><li> music side</li></Link>  
                         </>
                       ):null
                      }
                      <li onClick={handleLogout}> Logout</li> 
                    </ul>
                </div>
        </div>
    )
}