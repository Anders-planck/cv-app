import React, { Component } from 'react'

 class OtherSkills extends Component {
    state={
        className:"fas fa-check-square",
        Other1:[
        "Anglais courant","Github","SEO","Methode agiles"  ],
        Other2:[
           "Figma", "UI/UX Design","Photoshop","Montage video" ]
}
   
    render() {
        return (
               <div className="otherSkills">
                        <h3>Autre competances</h3>
                        <div className="list">
                        <ul>
                          {
                              this.state.Other1.map((item)=>{
                                  return(
                                   
                                            <li  key={item}>
                                                    <i className={this.state.className}></i>
                                                    {item}
                                            </li>    
                                  )
                              })
                          }
                           </ul>
                           <ul>
                          {
                              this.state.Other2.map((item)=>{
                                  return(
                                   
                                            <li  key={item}>
                                                    <i className={this.state.className}></i>
                                                    {item}
                                            </li>    
                                  )
                              })
                          }
                           </ul>
                        </div>
               </div> 
        );
    }
}
export default OtherSkills