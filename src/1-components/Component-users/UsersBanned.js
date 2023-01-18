import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { activeAccount, getUsersBanned, unbannAccount } from '../../4-actions/user';
import { Empty } from '../Empty';
import { CardUser } from './CardUser';

export const UsersBanned = (props) => {

    const {usersBanned} = useSelector(state => state.user);

    const {handleChangePage,dispatch} = props ; 
    const [fetch , setFetch ] = useState(false);
    
    const fetchData = ( ) => {
            dispatch(getUsersBanned())
            setFetch(true);
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData () ; 
    })

    if(fetch===true )
        {if(usersBanned!==null)
        {         
            if(usersBanned.length==0)
               return <Empty title=" List of Banned users is empty "/>
        }
        else
        {
            return <Empty title=" List of Banned users is empty "/>
        }
    }
         

    if(fetch===false&&usersBanned===null )
        return <> Wait please </>
    
    if(usersBanned===null)
        return <>Nothing to display</>

    

    const handleUnbanne = (user) => {
        dispatch(unbannAccount(user.id))
    }

    const listItems = usersBanned.map(user=>{
        return ( <CardUser handleUnbanne={handleUnbanne} type="banne" user={user} key={user.id}/> )
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
