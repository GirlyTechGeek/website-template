
import React, { Component } from 'react';
import emailjs from 'emailjs-com'

class Form extends Component{

  constructor(props) {
    super(props);

    
this.state = {
      name: "",
      email: "",
      message: "",
      user_id: "user_kCMlH3on6bQ53ovKUpoX6",
    };
  }
handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
  }
 
  sendMessage(event) {
    event.preventDefault();

const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      message: this.state.message,
      
    };
    
emailjs
      .send( "my_gmail", 'template_e6asvdf' , templateParams, "user_kCMlH3on6bQ53ovKUpoX6")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
      }
    render(){
        return(
          <div>
            <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
               Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

      </div>

      {/* <div>
        <iframe style={{"border:0", "width": "100%", "height": "350px;"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form className="form"
            id={this.props.id}
            name={this.props.name}
            method={this.props.method}
            action={this.props.action}>
              <div className="form-row">
                <div className="col form-group">
                <textarea
              id="name"
              name="name"
              className="form-control" 
              onChange={this.handleInputChange.bind(this)}
              placeholder="your name"
              required
              value={this.state.name}
              style={{ width: "100%" }}
              rows={1}
            />
                  
                  <div className="validate"></div>
                </div>
                <div className="col form-group">
                <textarea
              id="email"
              name="email"
              className="form-control" 
              onChange={this.handleInputChange.bind(this)}
              placeholder="your email address"
              required
              value={this.state.email}
              
              style={{ width: "100%" }}
              rows={1}
            />
                  <div className="validate"></div>
                </div>
              </div>
              
              <div className="form-group">
                <textarea className="form-control" id="message"
              name="message"
              onChange={this.handleInputChange.bind(this)}
              placeholder="what would you like to chat about?"
              required
              value={this.state.message} rows="5" 
                 ></textarea>
                <div className="validate"></div>
              </div>
              
              <input
              type="button"
              value="Send"
              className="btn btn-outline-success"
              
               onClick={this.sendMessage.bind(this)}
            />
            </form>
          </div>

        </div>

      </div>
    </section>
          </div>
        )
    }
}

export default Form


