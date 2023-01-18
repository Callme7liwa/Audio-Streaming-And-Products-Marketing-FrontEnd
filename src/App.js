import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Register } from './2-pages/Authentication/Register';
import {Login} from "./2-pages/Authentication/Login";
import { AdminDash } from './2-pages/Administration/super/Dash-Admin';
import { User } from './2-pages/Users/Users.js';
import {Products} from "./2-pages/Products/Products.js"
import { PublicPageMusics } from "./2-pages/public/public-page-musics";
import { PublicPageMusic } from "./2-pages/public/public-page-music";
import { PublicPageUser } from "./2-pages/public/User/public-page-user";
import { useDispatch, useSelector } from "react-redux";
import { setLikedMusicByAuthenticated, setUsersFollowedByUserAuthenticated } from "./4-actions/user";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AcceuilPublicProducts } from "./2-pages/public/Products/AcceuilPublicProducts";
import {  ProductInfo } from "./2-pages/public/Products/ProductInfo";
import 'animate.css';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type']="application/json";
axios.defaults.headers.post['Accept']="application/json";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

toast.configure();
function App() {


  const {ArtisteFollowedByAuthenticated,musicLikedByAuthenticated,ArtisteUnFollowedByAuthenticated} = useSelector(state=>state.user);
  
  const {user} = useSelector(state=> state.auth ) ;
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if( user!==null && ArtisteFollowedByAuthenticated==null)
    {dispatch(setUsersFollowedByUserAuthenticated(user.id));}
  },[ArtisteFollowedByAuthenticated]);
  
  useEffect(()=>{
    if( user!==null && musicLikedByAuthenticated===null)
    { console.log("into");dispatch(setLikedMusicByAuthenticated());}
  },[musicLikedByAuthenticated]);
  
  if(user&&ArtisteFollowedByAuthenticated===null || ArtisteFollowedByAuthenticated===undefined)
    return <> Please Wait !!!!! </>
  
  return (
    <div className="App">
            <Router>
                <Switch>
                  <Route  path='/login' exact component={Login} />
                  <Route  path='/register' exact component={Register} />
                  <Route path="/dashboard"  exact  >
                      <AdminDash dispatch={dispatch} unFollowed={ArtisteUnFollowedByAuthenticated} followed={ArtisteFollowedByAuthenticated} />
                  </Route>
                  <Route path="/products" exact component={Products} />
                  <Route path="/public/musics" exact  component={PublicPageMusics} />
                  <Route path="/public/products" exact  component={AcceuilPublicProducts} />
                       <Route path="/public/products/:id" exact component={ProductInfo} />                             
                  <Route  exact path="/public/users/:id">
                      <PublicPageUser  dispatch={dispatch} user={user} musicLiked={musicLikedByAuthenticated} followed={ArtisteFollowedByAuthenticated}/>
                  </Route>              
                  <Route  exact path="/public/music/:id">
                      <PublicPageMusic />
                  </Route>              
                  <Route path="/users" exact component={User} />
                </Switch>
            </Router>
          </div>
  );
}

export default App;
