import myImage from  "./../../7-images/ayoub.jpeg"
import "./../../8-css/Admin/DashSide.css"
export const DashSide = (props) => {

    const {changePage,user} = props;
    
    const {username,city,country,email,birthday,photo,is_admin}=user ; 

   return (
       <>
        
    <div class="dash-side">
        <div class="dark-light">
            <label>
                <div class="mode">dark mode</div>
                <input  type="checkbox" class="toggle" name="btn" />
                <span></span>
            </label>
        </div>
        <div class="dash-side-content">

            <div class="dash-side-content-header">              
                <div class="dash-side-content-header-image">
                        <img src={"http://localhost:8000/"+photo}/>
                </div>
                <h5>  <span className="text-warning"> {username} </span></h5>
            </div>

            <div class="dash-side-content-body">
                <ul>
                    <li onClick={page=>props.changePage(5)}> <i class="fa fa-plus"></i> <a>update my profile</a></li>
                     {is_admin ===1 ? ( <li onClick={page=>props.changePage(1)}> <i class="fa fa-plus"></i> <a>manage artists</a></li>) : '' }
                    <li onClick={page=>props.changePage(3)}> <i class="fa fa-plus"></i> <a>manage musics</a></li>
                    <li onClick={page=>props.changePage(4)}> <i class="fa fa-plus"></i> <a>manage products</a></li>
                </ul>
            </div>

            <div class="dash-side-content-footer">
                <div class=""> Durapp company  </div>
                <div class=""> Copy Right ~ 2022</div>
            </div>

        </div>
    </div>
       </>
   )
}