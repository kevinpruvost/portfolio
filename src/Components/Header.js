import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Anime, {anime} from 'react-anime';
import { VFXProvider } from 'react-vfx';

class Header extends Component {
  render() {

    if(this.props.data){
       var linkedin = this.props.data.linkedin;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    const config = {
      num: [2, 3],
      rps: .5,
      radius: [5, 20, 40],
      life: [50],
      v: [1, 2],
      tha: [-180, 180],
      body: "images/rose.png", // Whether to render pictures
      // rotate: [20],
      alpha: [1],
      scale: [[0.3, 0.5, 0.7]],
      position: {x:0, y:-100, width:1920, height:1}, // all or center or {x:1,y:1,width:100,height:100}
      color: [["#b80d43", "#d60024", "#d60076"]],
      cross: "bround", // cross or bround
      random: null, // or null,
      g: 0, // gravity
      f: [0, 0.3], // force
    };

    const config2 = {
      num: config.num,
      rps: config.rps,
      radius: config.radius,
      life: config.life,
      v: config.v,
      tha: config.tha,
      body: "images/leaf.png", // Whether to render pictures
      rotate: config.rotate,
      alpha: config.alpha,
      scale: config.scale,
      position: config.position,
      color: config.color,
      cross: config.cross, // cross or bround
      random: config.random, // or null,
      g: config.g, // gravity
      f: config.f, // force
    };

    return (
      <header id="home">
      <ParticlesBg className="header" type="custom" config={config} bg={true}></ParticlesBg>
      <ParticlesBg className="header" type="custom" config={config2} bg={true}></ParticlesBg>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <Anime elasticity={50} easing='easeOutExpo' duration={5000} opacity={[0, 1]}>
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            
               <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={linkedin} target="_blank" className="button btn linkedin-btn"><i className="fa fa-linkedin"></i>Linkedin</a>
               <a href={github} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
         </Anime>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
