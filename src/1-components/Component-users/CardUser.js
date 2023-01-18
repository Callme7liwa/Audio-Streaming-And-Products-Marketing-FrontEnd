import "./../../8-css/Users/CardUser.css"

export const CardUser = (props) => {
    // {console.log("cc",user[0].user.photo)}
     const {handleAccepte , handleUnbanne,  handleDelete , handleBanne , handleDesactive , user,type} = props ; 
  
    return (
        <>
            <div class="card-component">
                <div class="box-component box-component-user">
                <div class="user-number"> <span> {user.id} </span> </div>
                    <div class="user-pic">
                        <div class="user-pic-src">
                            <img src={"http://localhost:8000/"+user.photo}/>
                        </div>
                        <h4 class="text-warning"> {user.username} </h4>
                    </div>
                    <p class="motivation">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam dolorem iusto alias in voluptates velit nemo officia! Praesentium, provident modi? </p>
                    <div class="user-action">
                        { type == "banne" ? (<i class="fa fa-arrow-up color-black" onClick={()=>handleUnbanne(user)}></i>) : ''}
                        { type == "disponible" ? (<> <i class="fa fa-ban color-black " onClick={()=>handleBanne(user)}></i> <i class="fa fa-arrow-down color-black" onClick={()=>handleDesactive(user)}></i></>) : '' }
                        { type == "qeueu" ? (<><i class="fa fa-times color-black" onClick={()=>handleDelete(user)}></i>     <i class="fa fa-arrow-up color-black" onClick={()=>handleAccepte(user)}></i> </>) : ' '}
                        {type == "all" ? "":""}    
                    </div>
                </div>
            </div>    
        </>
    )
}