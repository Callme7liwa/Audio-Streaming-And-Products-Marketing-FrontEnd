import { useState } from "react"

export const Navbar = (props) => {
    // const {handleClick , page,setPage} = props;

    // function handleChange (id)  {
    //             console.log(id);
    // }

    const {link1 , link2 , link3} = props ; 

    return (
        <nav className="navbar navbar-expand-lg bg-dark  navbar-dark py-3 fixed-top">
        <div className="container">
            <a onClick={()=>props.changePage(1)} className="navbar-brand"> DURAPP </a>
                <ul className="navbar-nav ">
                    { link1 === '' ? '' : (
                        <li className="nav-item" onClick={()=>props.changePage(1)}>
                            <a className="nav-link"   >{link1}</a>
                        </li>
                    )}
                    { link2 === '' ? '' : (
                        <li className="nav-item" onClick={()=>props.changePage(2)}>
                            <a className="nav-link"   >{link2}</a>
                        </li>
                    )}
                    {  link3 ===''? '' : (
                        <li className="nav-item" onClick={()=>props.changePage(3)}>
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
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#learn" className="nav-link">What you'll learn</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Question" className="nav-link">Question</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Instructors" className="nav-link">Instructors</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}