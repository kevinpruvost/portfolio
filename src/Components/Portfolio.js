import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projectsDisplay = this.props.data.projects.map(function (projects) {
        var title = (
        <div className="header-col">
         <h1><span>{projects.title}</span></h1>
        </div>
        )
        var projectsDetails = projects.projects.map(function(project) {
          var projectImage = 'images/portfolio/' + project.image;
          return (
            <div key={project.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={project.url} target="_blank" title={project.title}>
                  <img className="portfolio-image" alt={project.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{project.title}</h5>
                      <p>{project.category}</p>
                      <br/>
                      <h4>Click to see the project ! 😉</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )
        }) // !projectsDetails=
        return (
        <div className="row">
          {title}
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
            {projectsDetails}
          </div>
        </div>
        )
      }) // !var projectsDisplay
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects.</h1>

            {projectsDisplay}

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
