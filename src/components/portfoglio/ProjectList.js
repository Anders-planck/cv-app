import React, { Component } from 'react'
import {portfolioData} from '../../data/portfolioData'
import Project from './Project'

export default class ProjectList extends Component {

state={
    projects:portfolioData,
    radios:[
        {id:1,value:"javascript"},
        {id:2,value:"css"},
        {id:3,value:"php"},
        {id:4,value:"react"}
    ],
    selectedRadio:'javascript'
}

handleRadio=(e)=>{
   this.setState({selectedRadio: e.target.value})
}
    render() {

        let {projects, radios ,selectedRadio}=this.state

        return (
            <div className="portfolioContent">
               <ul className="radioDisplay">
                    {
                        radios.map(radio=>{
                            return (
                                <li key={radio.value}>
                                 <label >
                                <input type="radio" 
                                name="radio"
                                checked={radio.value===selectedRadio}
                                
                                value={radio.value}
                                id={radio.id}
                                onChange={this.handleRadio}
                                />
                                 
                              {radio.value}
                              </label>
                                </li>
                            )
                        })
                    }
               </ul>
               
               <div className="projects">
               {
                  
                   projects
                   .filter(item=>{
                 
                return     item.languages.includes(selectedRadio)
                      
                    })
                   .map(item=>{
                    console.log( item.languages,selectedRadio)
                    return(
                   
                        <Project
                        key={item.id}
                        item={item}
                        />
                    )
                   })
               }
               </div>
            </div>
        )
    }
}
