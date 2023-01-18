export const CardProductQeueu = (props) => {
    const {handleAccepte , handleUnlike , handleUpdate , handleDelete , type,product} = props ; 
    
    return (
            <div class="card-component">
                <div class="box-component">
                    <div class="content-component">
                    <div class="user-number"> <span> {product.id} </span> </div>
                    <div class="user-pic">
                        <div class="user-pic-src">
                            <img src={"http://localhost:8000/"+product.photo} />
                        </div>
                    </div>
                    <div class="user-action d-flex d-flex flex-wrap">
                    <p class="w-100 text-center">{product.description}</p>
                    <>
                    
                    </>
                    {props.is_admin == 1 ? 
                    <>
                    {  type==="qeueu"  ?
                        (
                            <>
                            <i  class='fa fa-check bg-default ' onClick={()=>handleAccepte(product)}>  </i>
                            <i  class="fa fa-trash-o" onClick={()=>handleDelete(product)}>  </i>
                            </>
                        ) 
                        : 
                        type==="nothing" ? '' :
                        (
                        <i class="fa  fa-times" onClick={()=>handleUnlike(product)}>  </i>  
                        )
                        }
                     </>
                    : 
                    (
                        <>
                        { type==="posted" || type==="qeueu"  ?
                        (
                            <>
                            <i  class='fa fa-refresh bg-default ' onClick={()=>handleUpdate(product)}>  </i>
                            <i  class="fa fa-trash-o" onClick={()=>handleDelete(product)}>  </i>
                            </>
                        ) 
                        : 
                        (
                        <i class="fa  fa-times" onClick={()=>handleUnlike(product)}>  </i>  
                        )
                        }
                    </>
                    )
                }
                </div>
                   
                    </div>
                </div>
            </div>
    )
}