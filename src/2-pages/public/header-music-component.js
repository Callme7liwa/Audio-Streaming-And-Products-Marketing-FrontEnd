import $ from 'jquery';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderMusicComponent = (props) => {

    const {numberLikes,userId , musicName , artistName , artistImage , musicImage , published } = props ; 
    const [etat, setEtat] = useState(0);
    const handleClick = () => {
        console.log("here")
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

    return (
        <>
             <div class="public-music-header">
                 <i class="fa fa-arrow-circle-left" onClick={handleClick}></i>
                <div class="public-music-header-left">
                    <img  src={musicImage}></img>
                </div>
                <div class="public-music-header-right">
                    <div class="type-music">Single</div>
                    <div class="music-name">{musicName}</div>
                    <div class="music-user">
                        <div class="music-user-pic">
                            <img src={artistImage} />
                        </div>
                        <div class="music-user-username"><Link  to={`/public/users/${userId}`}>{artistName} </Link></div>
                        <div class="music-date-publication"> <i class="fa fa-hand-pointer-o ml-1 mr-1"></i> {published}</div>
                        <div class="music-"><i class="fa fa-play ml-1 mr-1"></i> 3:45 <i class="fa fa-heart ml-1 mr-1"></i> {numberLikes}</div>
                    </div>
                </div>
            </div>
        </>
    )

}