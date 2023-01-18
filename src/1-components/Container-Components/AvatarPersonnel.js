import { TextFieldComponent } from "../TextFieldComponents"
import { SelectedFieldComponent } from "../SelectedFieldComponent";

export const AvatarPersonnel = (props) => {

    const {formData , setFormData,selectedFile , setSelectedFile}=props ; 

    let options = [{id:0,name:"signer"},{id:-1,name:"internaute"}];
    const handleChange = (e) => {
            setFormData({
                ...formData ,
                fonction:e.target.value
            });
            console.log(e.target.value);
        };

    return (
        <>
            <SelectedFieldComponent  name="fonction" value={formData.fonction} label="type" options={options}  handleChange={handleChange}  />
            <TextFieldComponent type="file" classi="form-control" label="photo " name="photo" handleChange={(e)=>setSelectedFile(e.target.files[0])}   />
        </>
    )
}