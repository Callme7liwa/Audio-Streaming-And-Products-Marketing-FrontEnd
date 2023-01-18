import "./../../8-css/Admin/DashManageUsers.css";
import allUsers from "./../../7-images/allUsers.png"
import waiting from "./../../7-images/waiting.png"
import UsersBanned from "./../../7-images/UsersBanned.png"
import MusicPosted from "./../../7-images/MusicPosted.png"

import { CardManageUser } from "./Sous-Component/CardManageUser";
import { HeaderDash } from "./HeaderDash";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, searchUser } from "../../4-actions/user";
import { useEffect, useState } from "react";
import { UsersQeueu } from "../Component-users/UsersQeueu";
import { AllUsers } from "../Component-users/AllUsers";
import { UsersDisponible } from "../Component-users/UsersDisponible";
import { UsersBanned as UsersBannedComponent } from "../Component-users/UsersBanned";

export const DashManageUser = (props) => {

    const {handleClick,user} = props;

    const {username,photo,is_admin}=user ; 

    const dispatch = useDispatch();

    const {users} = useSelector((state)=>state.user)

    const [fetch , setFetch] = useState(false);

    const [page,setPage] = useState(0);

    const [nameSearching,setNameSearching]  = useState('');


    const fetchUsers = () => {
        dispatch(getUsers())
        setFetch(true);
    }

    useEffect (() => {
        if(fetch===false)
            fetchUsers();
    },[users])

    const handleInputChange = (e) => {
        setNameSearching(e.target.value);
        dispatch(searchUser(nameSearching));
    }

    if(users===null)
        return <> Please Wait </>
    
    const handleChangePage = () => {
        setPage(0);
    }
    
    const renderList = () => {
        switch(page)
        {   
            
            case '1' : return <AllUsers users={users} handleChangePage={handleChangePage}/>
            case '2' : return <UsersDisponible  dispatch={dispatch} handleChangePage={handleChangePage}/>
            case '3' : return <UsersQeueu dispatch={dispatch} handleChangePage={handleChangePage} />
            case '4' : return <UsersBannedComponent dispatch={dispatch} handleChangePage={handleChangePage}/>
            default : return ( 
                <div class="container-manage ">
                    <CardManageUser title="DISPLAY ALL USERS" image={allUsers} icon="fa fa-eye" id='1' changePage={page=>setPage(page)}/>
                    <CardManageUser title="DISPLAY ALL ACCEPTED USERS " image={MusicPosted} icon="fa fa-eye" id='2' changePage={page=>setPage(page)}/>
                    <CardManageUser title="USERS IN QUEUE" image={waiting} icon="fa fa-plus" id='3' changePage={page=>setPage(page)}/>
                    <CardManageUser title="USERS BANNED " image={UsersBanned} icon="fa fa-ban " id='4' changePage={page=>setPage(page)}/>
                </div>

            )
        }
    }

    return (
        <>
             <div class="dash-main">
                <HeaderDash handleClick={handleClick} username={username} photo={photo} title="all users" handleInputChange={handleInputChange} is_admin={is_admin}/>
                {renderList()}
             </div>
        </>
    )
}