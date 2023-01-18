export const CardmusicQeueu = (props) => {
    const {handleAccepte,handleUnAccepte,handleUnlike , handleUpdate , handleDelete , type,music} = props ; 

    
    return (
            <div class="card-component">
                <div class="box-component">
                    <div class="content-component">
                    <div class="user-number"> <span> {music.id} </span> </div>
                    <div className="user-pic">
                        <div class="user-pic-src">
                            <img src={"http://localhost:8000/"+music.photo} />
                        </div>
                    </div>

                    <div class="user-action d-flex flex-wrap">
                    <p class="w-100 text-center mb-5">{music.description}</p>
                    { type=="posted" || type=="qeueu"  ?
                     (
                         <>
                           {props.is_admin===1 ?  
                           
                           (<>
                           
                              <i class="fa fa-times color-blacK" onClick={()=>handleUnAccepte(music)} ></i>     <i class="fa fa-arrow-up color-blackK" onClick={()=>handleAccepte(music)} ></i> 
                            </>
                            ) : 
                            
                            ( 
                            <>
                                    <i  class='fa fa-refresh bg-default ' onClick={()=>handleUpdate(music)}>  </i>
                                    <i  class="fa fa-trash bg-danger" onClick={()=>handleDelete(music)}>  </i>
                            </>
                           )} 
                          
                        </>
                     ) 
                     : 
                     (
                         <i class="fa fa-times mr-1" onClick={()=>handleUnlike(music)}></i>    
                         )
                        }
                   
                    </div>
                 </div>
                </div>
            </div>
    )
}