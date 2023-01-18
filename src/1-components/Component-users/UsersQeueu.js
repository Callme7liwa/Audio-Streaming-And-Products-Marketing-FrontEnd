import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { activeAccount, deleteAccount, getUsersQeueu } from '../../4-actions/user';
import { Empty } from '../Empty';
import { CardUser } from './CardUser';

export const UsersQeueu = (props) => {

    const {usersQeueu} = useSelector(state => state.user);

    const {handleChangePage,dispatch} = props ;

    const [fetch , setFetch ] = useState(false);
    
    const fetchData = ( ) => {
            dispatch(getUsersQeueu())
            setFetch(true);
            console.log(usersQeueu)
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData () ; 
    })

    if(fetch===true )
    {
        if(usersQeueu!==null)
            {         
                if(usersQeueu.length==0)
                return <Empty title=" List of Qeueu users is empty "/>
            }
        else
            {
                return <Empty title=" List of qeueu users is empty "/>
            }
    }
    
    const handleDelete = (user) => {
        dispatch(deleteAccount(user.id));
    }

    const handleAccepte = (user) => {
        dispatch(activeAccount(user.id))
    }

    if(fetch===false&&usersQeueu===null )
        return <> Wait please </>
    
    if(usersQeueu===null)
    return <>Nothing to display</>
    
    const listItems = usersQeueu.map(user=>{
        return ( <CardUser handleDelete={handleDelete} handleAccepte={handleAccepte} type="qeueu" user={user} key={user.id}/> )
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
