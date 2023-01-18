import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";
import { getAllGategories } from "../../../4-actions/Category";
import "./../../../8-css/Product/newProduct.css";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { setSizes } from "../../../4-actions/size";
import { addNewProduct } from "../../../4-actions/product";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "../../TextField";
import Erreur from "../../Erreur";
import { toast } from "react-toastify";
import { clearMessage } from "../../../4-actions/message";
import $ from 'jquery';



export const NewProduct = (props) => {
  const SelectRef = useRef(null);

    const animatedComponents = makeAnimated();

    const {categories} = useSelector(state=>state.category);
    const {message} = useSelector(state=>state.message);
    const {sizes} = useSelector(state=>state.size);
    const [images, setImages] = useState([]);
    const [clicked,setClicked] = useState(0);
    const [erreur , setErreur] = useState(
      {
        size:'',
        category:'',
        images:'',
      }
    )
    const {handleChangePage , dispatch} = props ; 
    const [product,setProduct] = useState({
        name:'',
        price:0,
        description:'',
    });
    const [categoriesChoosed,setCategoriesChoosed]=useState([]);
    const [sizesChoosed,setSizesChoosed] = useState([]);

    const categoriesRendering = categories?.map(category=>{
        return {label:category.name,value:category.id};
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
    if(message.includes('success'))
    {
      toast.success(message);
      setClicked(0);
    }
    else
    toast.error(message);
    // default notification    
  }


    const files = [];
    const sizesRendering = sizes?.map(size=>{
        return {label:size.size,value:size.id};
    })

    useEffect(()=>{
        if(categories===null )
            dispatch(getAllGategories())
        if(sizes===null )
             dispatch(setSizes());
    },[categories,sizes]);
    
    if(categories==null )
        return <> Please wait  </>
 

    const handleChangeImage = (e) => {

     
      setClicked(1);
      
      if (e.target.files) {
        
            const filesArray = Array.from(e.target.files).map((file) =>
              URL.createObjectURL(file)
            );
          for (let i = 0; i < e.target.files.length; i++) {
            let newImage =  e.target.files[i];
            // newImage["URL"] =  URL.createObjectURL(e.target.files[i]);
            setImages((prevState) => [...prevState, newImage]);
          }
            
            Array.from(e.target.files).map(
              (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
           
          }

    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
          return (
            <>
              <img onClick={()=>deletePhoto(source.indexOf(photo))} src={URL.createObjectURL(photo)} alt="" key={photo.URL} />
              <i class="fa fa-trash-o"></i>
            </>
            );
        });
      };
  
    const deletePhoto = (index) => {
     
          setErreur({
            ...erreur,
            images:'At least you must select one picture'
          });
        
      const restOfImages = images.filter((image)=>images.indexOf(image)!=index);      
      setImages(restOfImages);
      console.log(images);
    }


    const handleChangeCategories = (e)=>{
      setErreur({
        ...erreur,
        category:''
      })

      setCategoriesChoosed(
       { categoriesChoosed:[...e]}
      );

      if(e.length==0 ) 
      {
            setErreur({
              ...erreur,
              category:'at least you have to select one category'
            })
      }
    }

    const handleChangeSize = (e) => {
        setErreur({
          ...erreur,
          size:''
        });
        setSizesChoosed({
            sizesChoosed:[...e]
        });
      if(e.length==0 ) 
      {
        setErreur({
          ...erreur,
          size:'at least you have to select one size'
        });
      }
    }

    const handleSubmit = (values ) => {
    
      if(images.length && erreur.images=='' && erreur.category=='' && erreur.size=='')
      {
        console.log("here");
            const formData = new FormData();
            formData.append('name',values.name);
            formData.append('price',values.price);
            formData.append('description',values.description);
            const image = images.at(0);
            formData.append('photo',image);
            var i=0 ; 
            images.forEach((image_file) => {
              if(i!=0)
                formData.append('file[]', image_file);
              i++;
            });
            categoriesChoosed.categoriesChoosed.forEach((category) => {
                formData.append('categories[]', category.value);
            });
            sizesChoosed.sizesChoosed.forEach((size) => {
                formData.append('sizes[]', size.value);
            });
            dispatch ( addNewProduct(formData));
      }
    else 
    {        
      
      if(categoriesChoosed.length ==0)
      setErreur({...erreur,category:'You must select at least one category'})
      else
      {if(sizesChoosed.length ==0)
      setErreur({...erreur ,size:'You must select at least one size' });}
      
      setClicked(1);
    }
    }


    const initialValues = {
      name: product.name,
      price: product.price,
      description:product.description,
    };

    const validationSchema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required() .typeError('you must specify a number')
      .min(1, 'Min value 1.')
      .max(1000, 'Max value 10000.'),
      description: Yup.string().required().min(5,'min lenghth is 5'),
  
    });
    
    const renderError = (message) => <p className="help text-danger">{message}</p>;

    
     return (
      <Formik
      initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
          handleSubmit(values);
          }}
      >
       <Form  id="formulaire">
         <div class="container-new-product">

            <div class="new-product-card newProd">
              <h3 class="mb-5">INTERACT , WITH ADDING A NEW <span class="text-warning"> PRODUCT</span></h3>
                    <TextField aria="0"class="form-control input-new-product"  name="name" type="text"  label="name"/>
                    <TextField aria="0"  class="form-control input-new-product"  name="price" type="number" label="price" />
                    <div class="form-group">
                    <label for="description"> Description</label>
                    <Field label="description" name="description"  as="textarea"   className="textarea form-control input-new-product"  placeholder="description" type="text" />
                    <ErrorMessage name="description" render={renderError}/>
                    </div>
                <div class="form-group">
                    <label class="form-label"> <i class="fa fa-caret-down"></i> Category</label>
                    <Select                     
                     className="text-black" onChange={handleChangeCategories} options={categoriesRendering} components={animatedComponents} isMulti />
                </div> 
                {erreur.category == '' ? '' : (<Erreur message={erreur.category} />)}
                <div class="form-group">
                  <label class="form-label"> <i class="fa fa-caret-down"></i> Sizes</label>
                  <Select  className="select text-black" onChange={handleChangeSize} options={sizesRendering} components={animatedComponents} isMulti />
                </div> 
                {erreur.size == '' ? '' : (<Erreur message={erreur.size} />)}
                <div class="form-group">
                    <label  for="upload-pic-product" class="label-for-uploading">
                       <i class="fa fa-upload mr-1"></i> Select Pictures
                    </label>
                    <input multiple id="upload-pic-product" type="file" name="images" onChange={handleChangeImage}></input>
                </div> 
                {(clicked==1&& images.length==0  )?  (<><Erreur message={"at least select one picture "} /></>) :'' }
                <div className="result">{renderPhotos(images)}</div>
                <button type="submit" class="btn mt-2 btn-success btn-block"> Submit </button>
            </div>
        </div>
       </Form>
      </Formik>
    )
}