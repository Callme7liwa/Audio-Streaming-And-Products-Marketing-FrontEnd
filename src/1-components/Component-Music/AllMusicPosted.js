import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { deleteMusic, getMusicPosted } from "../../4-actions/music"
import { Empty } from "../Empty";
import { CardmusicQeueu } from "./CardMusic";
import EditMusic from "./EditMusic";

export const AllMusicPosted = (props) => {

    const {musicOwnerPosted} = useSelector(state => state.music);
    const {musics} = useSelector(state=>state.music)

    const {handleChangePage,dispatch} = props ; 
    const [fetch , setFetch ] = useState(false);
    const [music , setMusic] = useState(null);
    const [show, setShow] = useState(false);
    
    const fetchData = ( ) => {
        if(musics!==null)
        {
            dispatch(getMusicPosted())
            setFetch(true);
        }
    }

    useEffect(()=>{
        if(fetch === false)
            fetchData () ; 
    })

    if(fetch===true )
        {if(musicOwnerPosted!==null)
        {         
            if(musicOwnerPosted.length==0)
               return <Empty title=" List of accetpted music is empty "/>
        }
        else
        {
            return <Empty title=" List of accepted music is empty "/>
        }
    }
         

    if(fetch===false&&musicOwnerPosted===null )
        return <> Wait please </>
    
    if(musicOwnerPosted===null)
        return <>Nothing to display</>

    
    const handleDelete = (music) => {
            dispatch(deleteMusic(music));
    }
    const handleUpdate = (music) => {
        console.log(music);
        setShow(true);
        setMusic(music);

    }

    const rendererList = musicOwnerPosted.map(music=>{
        return <CardmusicQeueu handleUpdate={handleUpdate} handleDelete={handleDelete} music={music} type="posted" />
    });



    return (
        <>
        <div class="container-component">   
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>     
            <>{rendererList}</>
            {show ? (  <EditMusic type="posted" music = {music} dispatch={dispatch} setShow={show=>setShow(show)}/>):null}
            
        </div>           
</>
    )
}