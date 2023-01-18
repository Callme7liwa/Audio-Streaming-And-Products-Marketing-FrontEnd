import { useEffect, useRef, useState } from "react";
import "./../../8-css/public/public-page-music.css";

export const MusicPlayed = (props) =>
{
    const {currentMusic,username} = props ; 
    
    const audioEl = useRef(null);

    
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrenttime] = useState(0);
    const progressBar = useRef(); //   reference to our prgressbar
    const animationRef = useRef(); //  reference to our animation

    useEffect(() => {
           const seconds = Math.floor(audioEl.current.duration);
            setDuration(seconds);
            console.log("audio",audioEl.current.duration)
            // set max prop with out seconds in input[range]
            progressBar.current.max = seconds; 
        
        
    }, [audioEl?.current?.loadedmetada, audioEl?.current?.readyState]);

    const whilePlaying = () => {
        progressBar.current.value = audioEl.current.currentTime;
        changeCurrentTime();
        // need to run more than once
        animationRef.current = requestAnimationFrame(whilePlaying);
      };
    
    const calculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnMin} : ${returnSec}`;
    };

    const changeProgress = () => {
        audioEl.current.currentTime = progressBar.current.value;
        changeCurrentTime();
    };

    const changeCurrentTime = () => {
        progressBar.current.style.setProperty(
          "--played-width",
          `${(progressBar.current.value / duration) * 100}%`
        );
    
        setCurrenttime(progressBar.current.value);
    };

    
    
    //
    //
    //
    const [isPlaying, setIsPlaying] = useState(false);
    //

 
    
    useEffect(() => {
    if(currentMusic)
    { 
        if (isPlaying ) {
            audioEl.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
         else {
            audioEl.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }
    },[isPlaying]);

    return( 
        <>
            <audio src={"http://localhost:8000/"+currentMusic.file_path} ref={audioEl} /> 

                <div class="public-music-card-play">
                    <div class="public-music-card-play-box">
                        <div class="public-music-card-play-left">
                            <img class="image" src={"http://localhost:8000/"+currentMusic.photo}></img>
                             <div class="box-music-user">
                                <span class="song-name">{currentMusic.nom}</span> 
                                <span class="rapper-name">{username}</span>
                             </div>
                        </div>
                    
                            <div class="main-music-play">
                                    <div class="public-music-card-play-box-starting">
                                            <div class="music-action">
                                                <i class="fa fa-long-arrow-left" > </i>
                                                <i class={isPlaying === true ? "fa fa-pause-circle-o" : "fa fa-play-circle-o"} onClick={() => setIsPlaying(!isPlaying)}> </i>
                                                <i class="fa fa-long-arrow-right"> </i>
                                            </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="currentTime">{calculateTime(currentTime)}</div>
                                            <input
                                                type="range"
                                                className="progressBar"
                                                ref={progressBar}
                                                defaultValue="0"
                                                onChange={changeProgress}
                                            />
                                            <div className="duration">
                                                {duration && !isNaN(duration) && calculateTime(duration)
                                                ? duration && !isNaN(duration) && calculateTime(duration)
                                                : "00:00"}
                                            </div>
                                    </div>
                        </div>
                    </div>
                </div>
        </>
    )
}