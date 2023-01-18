
import { useEffect, useState } from "react";
import { ButtonFieldComponent } from "../ButtonFieldComponent";
import { TextFieldComponent } from "../TextFieldComponents";
import "./../../8-css/Music/newMusic.css";
import { TextAria } from "../TextAria";
import { useDispatch, useSelector } from "react-redux";
import { addNewMusic } from "../../4-actions/music";
import { toast } from "react-toastify";
import { clearMessage } from "../../4-actions/message";


export const  NewMusic = (props) => {

  const dispatch = useDispatch();

  const {handleChangePage} = props ; 

  const {message} = useSelector(state=>state.message);

  const [selectedImage , setSelectedImage] = useState(null);
  const [selectedAudio , setSelectedAudio] = useState();
  
  const [productInfo,setProductInfo] = useState({
    nom:'',
    description:'',
  });


  useEffect(()=>{
    if(message)
    {setTimeout(
     notify(message)
    ,500)}
    return  dispatch(clearMessage());
},[message]);


const notify = (message)=>{
  // inbuilt-notification
  if(message.includes('SUCCESS'))
  toast.success(message);
  else
  toast.error(message);
  // default notification    
}


  const handleChange = (e) => {
    console.log(e.target.value);
    setProductInfo({
      ...productInfo,
      [e.target.name]:e.target.value
    })
  }
  
const handleSubmit = (e) => {
   e.preventDefault();
   const formData = new FormData();
   formData.append('nom',productInfo.nom);
   formData.append('photo',selectedImage);
   formData.append('file_path',selectedAudio);
   formData.append('description',productInfo.description);
   dispatch ( addNewMusic(formData));
}

const renderPhotos = (source) => {    
    return <img className="p-2" src={source} alt="none" key={source} style={{ width: "100%", height: "180px" }} />;
};

return (
      <div className="containerr-login ">
          <form  className="cardd newMusic" onSubmit={handleSubmit}>
              <div className="cardd-header card-header-music">
                  <h5> ADD NEW   <span className="text-warning"> MUSIC </span> </h5>
            <div class="go-back-to-dashboard back-all-user">
                  <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>

               </div>
               <div className="cardd-body">
                  <TextFieldComponent handleChange={handleChange} classi="form-control text-input-new-music" label="Name " name="nom" type="text" />
                  <TextFieldComponent type="file" classi="form-control " label="Photo " name="photo" handleChange={(e)=>setSelectedImage(e.target.files[0])}  />
                  <TextFieldComponent type="file" classi="form-control" label="Audio " name="file_path" handleChange={(e)=>setSelectedAudio(e.target.files[0])}   />               
                  <TextAria handleChange={handleChange} classi="form-control text-aria" name="description " label="Description" />
                  <ButtonFieldComponent  classi="btn btn-warning col-md-12" name="onLogin" type="submit" />  
              </div>
          </form>
     </div>
   
  )
}


