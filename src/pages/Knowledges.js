import React from 'react'
import Navigation from '../components/Navigation'
import Languages from '../components/Knowledges/Languages'
import Experiance from '../components/Knowledges/Experiance'
import OtherSkills from '../components/Knowledges/OtherSkills'
import Hobbies from '../components/Knowledges/Hobbies'
const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experiance/>
                <OtherSkills />
                <Hobbies />
            </div>

        </div>
    );
};

export default Knowledges;