import React from 'react';
import Navigation from '../components/Navigation';
import {copyToClipboard} from 'react-copy-to-clipboard'
const Contact = () => {

   var alertcopie=function () {
    alert('votre Text a ete copiee')
   }
        
    
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
            <div className="header">
            
            </div>
            <div className="contactBox">
                    <h1>contater-moi</h1>
                    <ul>
                        <li>
                                <i className="fas fa-map-marker-alt"></i> 
                                <span>Italie</span>                       
                        </li>
                        <li>
                                <i className="fas fa-mobile-alt"></i> 
                                
                                <copyToClipboard text="351 888 4923">  <span className="clickInput" onClick={alertcopie}>351 888 4923</span></copyToClipboard>                       
                        </li>
                        <li>
                                <i className="fas fa-envelope"></i> 
                                <copyToClipboard text="mon-mail@coucou.fr">  <span className="clickInput" onClick={alertcopie} > mon-mail@coucou.fr</span>    </copyToClipboard>                 
                        </li>
                    </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                   
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><h4>linkedin</h4><i className="fab fa-linkedin"></i></a>
                    
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><h4>Github</h4><i className="fab fa-github"></i></a>
                    
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><h4>Twitter</h4><i className="fab fa-twitter"></i></a>
                  
                        <a href="https://www.codepen.com" target="_blank" rel="noopener noreferrer"><h4>codePen</h4><i className="fab fa-codepen"></i></a>
                   
                </ul>
            </div>
            </div>
           
        </div>
    );
};

export default Contact;