import {useHistory} from "react-router-dom";

export const NavbarProduct = (props) => {

    const {link1 , link2 , link3} = props ; 
    const history = useHistory();

    const handleClick = (link) => {
        if(link=="all products")
                history.goBack();
            
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-dark  navbar-dark py-3 fixed-top">
        <div className="container">
            <a onClick={handleClick} className="navbar-brand"> durapp </a>
                <ul className="navbar-nav ">
                    { link1 === '' ? '' : (
                        <li className="nav-item" onClick={()=>handleClick(link1)}>
                            <a className="nav-link"   >{link1}</a>
                        </li>
                    )}
                    { link2 === '' ? '' : (
                        <li className="nav-item" onClick={handleClick}>
                            <a className="nav-link">{link2}</a>
                        </li>
                    )}
                    {  link3 ===''? '' : (
                        <li className="nav-item" onClick={handleClick}>
                            <a  className="nav-link curson-pointer" >{link3}</a>
                        </li>
                    )}
                </ul>
            <button 
                className="navbar-toggler" 
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navmenu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
           
        </div>
    </nav>
    )
}