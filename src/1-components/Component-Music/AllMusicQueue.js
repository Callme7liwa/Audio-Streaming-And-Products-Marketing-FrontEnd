import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { accepteMusic, deleteMusic, getMusicQueue } from "../../4-actions/music"
import { Empty } from "../Empty"
import { CardmusicQeueu } from "./CardMusic";
import EditMusic from "./EditMusic";



export const AllMusicQueue = (props) => {
    
    const {musicOwnerQueue} = useSelector(state => state.music);
    const {handleChangePage,dispatch} = props ; 
    const [fetch,setFetch] = useState(false);
    const [show, setShow] = useState(false);
    const [music , setMusic] = useState(null);

    
    
    const fetchData = () => {
        dispatch(getMusicQueue())
        setFetch(true);
    }
    
    useEffect(()=>{
        console.log("sss")
             fetchData();
    },[])
    
    const handleUpdate = (music) => {
        setShow(true);
        setMusic(music);
    }

    const handleDelete = (music) => {
        dispatch(deleteMusic(music));
    }

    const handleAccepteMusic = (music) => {
        dispatch(accepteMusic(music));
    }
    
    const handleUnAccepteMusic = (music) => {
        dispatch(deleteMusic(music));
    }



    if(fetch===true )
        {if(musicOwnerQueue!==null)
        {         
            if(musicOwnerQueue.length==0)
               return <Empty title=" List of liked music is empty "/>
        }
        else
        {
            return <Empty title=" List of queue music is empty "/>
        }}
         

    if(fetch===false&&musicOwnerQueue===null )
        return <> Wait please </>
    
    const rendererList = musicOwnerQueue.map(music=>{
        return <CardmusicQeueu handleDelete={handleDelete} handleUpdate={handleUpdate} handleAccepte={handleAccepteMusic} handleUnAccepte={handleUnAccepteMusic} is_admin={props.is_admin} music={music} type="qeueu" />
    })

    return (
        <div class="container-component">     
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>   
           
        {rendererList}
        {show ? (  <EditMusic type="qeueu" music = {music} dispatch={dispatch} setShow={show=>setShow(show)}/>):null}

        </div>
    )
}