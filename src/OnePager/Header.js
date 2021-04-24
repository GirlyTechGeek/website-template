import React, { Component } from 'react';




class Header extends Component{
    render(){
        return(
            <div >
                <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="icofont-clock-time"></i> Monday - Saturday, 8AM to 10PM
      </div>
      <div class="d-flex align-items-center">
        <i class="icofont-phone"></i> Call us now +1 5589 55488 55
      </div>
    </div>
  </div>
  <header className="fixed-top" id="header">
      <div className="container ">

      
                <nav className="navbar navbar-expand-lg navbar-light bg-light " id="nav-bar" >
                
                   <a><img/></a> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse my-2 my-lg-0 justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" id="nav-color" href="#anchor2">Home</a>
                            <a className="nav-item nav-link"  id="nav-color"  href="#anchor">About</a>
                            <a className="nav-item nav-link" id="nav-color"  href="#anchor1">Services</a>
                            <a className="nav-item nav-link" id="nav-color"  href="#anchor-name">Departments</a>
                            <a className="nav-item nav-link"  id="nav-color"  href="#anchor">Doctors</a>
                            <a className="btn btn-outline-primary" role="btn"  id="nav-color"  href="#anchor">Contact Us</a>
                        </div>
                    </div>
                </nav>
                </div>
  </header>
            </div> 
        )
    }
}

export default Header