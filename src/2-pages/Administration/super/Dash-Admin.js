import React, { useEffect } from "react" 
import { DashMain } from "../../../1-components/Component-Admin/Dash-main";
// import "../../../css/Admin/Dashboard.css";
import {DashSide} from "./../../../1-components/Component-Admin/Dash-Side";
import "./../../../8-css/Admin/Dashboard.css";
import $ from 'jquery';
import { useState } from "react";
import { useSelector } from "react-redux";
import { DashManageUser } from "../../../1-components/Component-Admin/Dash-manage-users";
import { DashMusic } from "../../../1-components/Component-Admin/Dash-manage-musics";
import { Redirect } from "react-router-dom";
import { DashProducts } from "../../../1-components/Component-Admin/Dash-manage-products";
import { DashUpdate } from "../../../1-components/Component-Admin/Dash-update";
export const AdminDash = (props) => {

    const [etat,setEtat] = useState(0);
    const user = useSelector(state=> state.auth.user ) 
    const [page,setPage]=useState(0);

    if(user===null)
        return <Redirect to="/login" />

   
    const handleClick = () => {
        const cardtoggle = document.querySelector('.fa-arrow-left');
        cardtoggle.classList.toggle('fa-arrow-right');
            if(etat==0)
            {
                $('.dash-side').animate(
                    {
                        left: '-30%',
                    }
                )
                $('.dash-main').animate({
                    'width':'100%',
                    'left':'0'
                })
                setEtat(1);
            }
            else
            {
                $('.dash-side').animate(
                    {
                        left: '0%',
                    }
                )
                $('.dash-main').animate({
                    'width':'78%',
                    'left':'22%'
                })
                
                setEtat(0);
            }
           
    }
    const componentsToDisplay = () => {
        switch(page)
        {
            case 0 : return <DashMain dispatch={props.dispatch} unFollowed={props.unFollowed} followed={props.followed} handleClick = {handleClick } user = {user} /> ;
            case 1 : return <DashManageUser  handleClick = {handleClick } user = {user}/> 
            case 3 : return <DashMusic handleClick = {handleClick } user = {user}/>
            case 4 : return <DashProducts handleClick = {handleClick } user = {user}/>
            case 5 : return <DashUpdate handleClick = {handleClick } user = {user}/>
            default : return <DashMain   handleClick = {handleClick } user = {user}  />
        }
    }


    return ( 
        <>
            <div class="dash-container">
                <DashSide user = {user} changePage={page=>setPage(page)}/>
                {componentsToDisplay ()}
            </div>
        </>
    )
}