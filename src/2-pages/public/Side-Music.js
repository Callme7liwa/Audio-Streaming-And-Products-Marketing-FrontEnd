import { Link } from "react-router-dom"

export const SideMusic = () => {
   

    return (
        <>
            <div class="side-music">
                <ul class="side-music-1">
                    <Link class="nav-link text-white" to="/public/musics"> <li><i class="fa fa-long-arrow-left"></i> Acceuil </li></Link>
                    <Link class="nav-link text-white" to="/dashboard"><li><i class="fa fa-home"></i> Home</li></Link> 
                    <Link class="nav-link text-white"><li><i class="fa fa-heart"></i> Music Liked </li></Link>
                    <Link class="nav-link text-white"><li><i class="fa fa-plus-circle"></i> New PlayList </li></Link>
                </ul>

                <ul class="side-music-2">
                    <li> Ma playlist N°1 </li>
                    <li> Ma playlist N°2 </li>
                    <li> Ma playlist N°3 </li>
                    <li> Ma playlist N°4 </li>
                </ul>
            </div>
        </>
    )
}