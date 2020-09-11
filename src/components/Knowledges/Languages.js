import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
export default class languages extends Component {

    state={
        languages:[
            {id:1,value:"Javascript",xp:1.2},
            {id:2,value:"Css",xp:2},
            {id:3,value:"Php",xp:0.7},
            {id:5,value:"C",xp:2},
            {id:6,value:"Html/Css/Scss",xp:2}
        ],
        frameworks:[
            {id:1,value:"React",xp:1.6},
            {id:2,value:"Bootstrap",xp:0.5},
            {id:3,value:"Sass",xp:0.7},
            {id:4,value:"Material UI",xp:0.4}
        ]
    }

    render() {
let {languages,frameworks}=this.state;

        return (
            <div className="languagesFrameworks">
                    <ProgressBar 
                     languages={languages} 
                    className="languagesDisplay"
                    title="languages"/>  
                     <ProgressBar 
                     languages={frameworks} 
                    className="frameworksDisplay"
                    title="frameworks & bibliotheques "/>  
            </div>
        )
    }
}
