import React, { Component } from 'react';
import Portfolio from './Portfolio';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        var educImage = 'images/work_education/'+ education.logo;
        var educDesc = null;
        try {
          educDesc = <ul>{
            education.description.map(function(item, idx) {
              return (
                <li>
                      {item}
                      <br/>
                </li>
               )
          })}</ul>
        }
        catch
        {
          educDesc = <p>{education.description}</p>
        }
        return <div key={education.school} className="row" style={{display: 'flex'}}>
          <a href={education.link} target="_blank" style={{flex: '25%', margin: 'auto'}}><img src={educImage} height="128" width="128"/></a>
          <div style={{flex: '75%'}}>
            <h3>{education.school}</h3>
            <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            {educDesc}
          </div>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        var workImage = 'images/work_education/'+ work.logo;
        return <div key={work.company} className="row" style={{display: 'flex'}}>
            <a href={work.link} target="_blank" style={{flex: '25%', margin: 'auto'}}><img src={workImage} height="128" width="128"/></a>
            <div style={{flex: '75%'}}>
              <h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <ul>{
                  work.description.map(function(item, idx) {
                    return (
                      <li>
                            {item}
                            <br/>
                      </li>
                     )
                })                
              }</ul>
          </div>
        </div>
      })

      var skills = this.props.data.skills.map(function(skills){
        var projectImage = 'images/tech/'+skills.image;
          return <div key={skills.name} className="columns feature-item">
                    <img className='skill' alt={skills.name} src={projectImage} />
                    <h5>{skills.name}</h5>
                    <p>{skills.description}</p>
                 </div>
        })
    }

    return (
      <section id="resume">

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>



    <div className="row skill">
        
    <div className="three columns header-col">
       <h1><span>Favorite Tech</span></h1>
    </div>
        
    <div>
      <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
      <ul className="bgrid-quarters s-bgrid-thirds cf">
       {skills}
      </ul>
    </div>

      </div>
   </section>
    );
  }
}

export default Resume;
