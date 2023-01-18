import $ from 'jquery';
import { useEffect, useState } from 'react';
import { follow, unfollow } from '../../../4-actions/user';

export const HeaderArtistComponent = (props) => {

    const {dispatch , userId , artistName , artistImage ,followed ,user } = props ; 

    const isFollowing = () => {
        for(var i=0; i<followed.length; i++) {
            if(userId== followed[i].id) {
                return true ; 
            }
        }
            return false ; 
    }

    const [etat, setEtat] = useState(0);
    const handleClick = () => {
        const cardtoggle = document.querySelector('.fa-arrow-circle-left');
        cardtoggle.classList.toggle('fa-arrow-circle-right');
            if(etat==0)
            {
                $('.side-music').animate(
                    {
                        left: '-20%',
                    }
                )
                $('.public-music-content').animate({
                    'width':'100%',
                    'left':'0'
                })
                setEtat(1);
            }
            else
            {
                $('.side-music').animate(
                    {
                        left: '0%',
                    }
                )
                $('.public-music-content').animate({
                    'width':'80%',
                    'left':'20%'
                })
                
                setEtat(0);
            }       
    }

    const handleFollow = () => {
        if(isFollowing())
            dispatch(unfollow(userId,user))
        else
            dispatch(follow(userId,user))
    }

    return (
        <>
             <div class="public-music-header">
                 <i class="fa fa-arrow-circle-left " onClick={handleClick}></i>
                
                 
                <div class="public-music-header-left header-left-user-image">
                    <img  src={artistImage}></img>
                </div>
                <div class="public-music-header-right">
                    <span> Artist Verifié</span>
                    <span class="music-name"> {artistName}</span>
                    <span class="music-date-publication"> <i class="fa fa-hand-pointer-o ml-1 mr-1"></i> 20 809 auditeurs par mois </span>
                <button onClick={handleFollow} class={isFollowing() == true ? ' btn Following' :'btn notFollowing' }>{isFollowing() ===false ? (<><i class="fa fa-hand-pointer-o mr-1"></i>Follow</>) :( <><i class="fa fa-check text-danger mr-1"></i>Followed</> )}</button>
                </div>
            </div>
        </>
    )

}