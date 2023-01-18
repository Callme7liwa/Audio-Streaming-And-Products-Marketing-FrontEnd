import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { banneAccount, desactiveAccount, getUsersAccepted } from '../../4-actions/user';
import { Empty } from '../Empty';
import { CardUser } from './CardUser';

export const UsersDisponible = (props) => {

    const {usersAccepted} = useSelector(state => state.user);

    const {handleChangePage,dispatch} = props ; 
    const [fetch , setFetch ] = useState(false);
    
    const fetchData = ( ) => {
            dispatch(getUsersAccepted())
            setFetch(true);
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData () ; 
    })

    if(fetch===true )
        {if(usersAccepted!==null)
        {         
            if(usersAccepted.length==0)
               return <Empty title=" List of Disponible users is empty "/>
        }
        else
        {
            return <Empty title=" List of Disponible users is empty "/>
        }
    }

    const handleDesactive = (user) => {
        dispatch(desactiveAccount(user.id));
    }

    const handleBanne = (user) => {
        dispatch(banneAccount(user.id))
    }
         

    if(fetch===false&&usersAccepted===null )
        return <> Wait please </>
    
    if(usersAccepted===null)
        return <>Nothing to display</>


    const listItems = usersAccepted.map(user=>{
        return ( <CardUser  handleBanne={handleBanne} handleDesactive={handleDesactive} type="disponible" user={user} key={user.id}/> )
    });

    return (
        <>
        <div  class="container-users-card" >
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>
            {listItems}
        </div>
        </>
    )
}
