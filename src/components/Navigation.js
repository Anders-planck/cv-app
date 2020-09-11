import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/69245733_725030284603206_5683149216247971840_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=h6cdxidwStEAX8gI_Cb&_nc_ht=scontent-mxp1-1.xx&oh=085d7f4616e2912387cc166d2a078a95&oe=5F8146F2" alt="image-proflie"  width="150px" />
                    <h3>Anders Planck</h3>
                </div>
            </div>
            <div  className="navigation">

               <ul>
                   <li>
                        <NavLink exact to="/" activeClassName="navActive" >
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                   </li>
                   <li>
                        <NavLink exact to="/Competences" activeClassName="navActive" >
                            <i className="fas fa-mountain"></i>
                            <span>Competences</span>
                        </NavLink>
                   </li>
                   <li>
                        <NavLink exact to="/PortFoglio" activeClassName="navActive" >
                            <i className="fas fa-image"></i>
                            <span>PortFoglio</span>
                        </NavLink>
                   </li>
                   <li>
                        <NavLink exact to="/Contact" activeClassName="navActive" >
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                   </li>
               </ul>
           </div>
            <div className="socialNetwork">
                <ul>
                    
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.codepen.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p style={{fontFamily:`cursive`}}>From--Anders-Development--2020</p>
            </div>
        </div>
    );
};

export default Navigation;