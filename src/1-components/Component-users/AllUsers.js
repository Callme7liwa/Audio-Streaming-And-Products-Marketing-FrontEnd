import React from 'react'
import { Empty } from '../Empty';
import { CardUser } from './CardUser';
import "./../../8-css/Users/CardUser.css"
import {useHistory} from "react-router-dom";

export const AllUsers = (props) => {

    const {handleChangePage,users } = props ; 

    const history = useHistory();

    if(users===null)
        return <Empty title=" List of users is empty "/>
  
    const listItems = users.map(user=>{
        return ( <CardUser type="all" user={user} key={user.id}/> )
    });

    
    return (
        <>
            <div class="container-users-card" >
                <div class="go-back-to-dashboard back-all-user">
                    <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
                </div>
                {listItems}
            </div>
        </>
    )
}
