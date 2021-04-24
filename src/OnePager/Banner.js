import React, { Component } from 'react';


class Banner extends Component{
    render(){
        return( 
            <div >
                <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        
        <div className="carousel-item active" style={{"background-image": "url(assets/img/slide/slide-1.jpg)"}}>
          <div className="container">
            <h2>Welcome to <span>Medicio</span></h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

        
        <div className="carousel-item" style={{"background-image": "url(assets/img/slide/slide-2.jpg)"}}>
          <div className="container">
            <h2>Lorem Ipsum Dolor</h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

       
        <div className="carousel-item" style={{"background-image": "url(assets/img/slide/slide-3.jpg)"}}>
          <div className="container">
            <h2>Sequi ea ut et est quaerat</h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
  </section>
                
                       
            </div>
        )
    }
}

export default Banner