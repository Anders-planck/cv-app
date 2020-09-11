import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfoglio/ProjectList'
const Portfoglio = () => {

    return (
        <div className="portfolio">
            <Navigation />
            <ProjectList/>
        </div>
    );
};

export default Portfoglio;