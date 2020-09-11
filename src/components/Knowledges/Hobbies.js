import React from 'react';

const Hobbies = () => {
    return (
        <div  className="hobbies">
           <h3>Interet</h3>
           <ul>
                <li className="hobby">
                <i  className ="fas fa-running" ></i>
                <span>course a pied</span>
                </li>
                <li className="hobby">
                <i  className ="fas fa-hiking" ></i>
                <span>Rendonnees</span>
                </li>
                <li className="hobby">
                <i  className ="fas fa-seedling" ></i>
                <span>Permaculture</span>
                </li>
                <li className="hobby">
                <i  className ="fab fa-bitcoin" ></i>
                <span>Crypto-monaies</span>
                </li>
                <li className="hobby">
                <i  className ="fas fa-rocket" ></i>
                <span>Espace</span>
                </li>
           </ul>
        </div>
    );
};

export default Hobbies;