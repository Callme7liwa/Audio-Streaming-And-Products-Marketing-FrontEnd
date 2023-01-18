import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUsers } from "../../1-components/Component-Commun/AllUsers";
import { Navbar } from "../../1-components/Navbar";
import { getUsers } from "../../4-actions/user";
import {  CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import "./../../8-css/Users/users.css";
export const User = (props) => {
    
    // const {users} = useSelector(state=>state.user);
    const [page,setPage]=useState(1);
    const dispatch = useDispatch();

    const {users} = useSelector(state=>state.user);

    const fetchData = () => {
        dispatch(getUsers());
        console.log(users);
    }
  
    useEffect(()=>{
        fetchData();
        console.log(users);
    },[page])

    // const fetchData = ()=>{
    //     dispatch(getUsers());
    // }
    

    
     const ComponentToDisplay = () => {
         if(users===null)
         {
             return ( 
                    <Box mt={50} ml={90}>
                        <CircularProgress />
                    </Box>
                  
                   )
         }
         
         if(page===1  && users  )
         {
             console.log("hh");
             return <AllUsers users={users} />
         }
        else  
        {
                if(users)
                return <AllUsers users={users} />

        }
     }

     const componentNonMount = ()=>{
         console.log("hello");
     }
        
    

    return (
        <div className="container-users">
            <Navbar link1="users" link2="rappers" link3="signers" changePage={page=>setPage(page)}> </Navbar>
             {ComponentToDisplay()}
            
        </div>
    )
}