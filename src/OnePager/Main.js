import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import Banner from './Banner'
import AboutUs from './AboutUs'

class Main extends Component{
    render(){
        return(
            <div >
                <Header/>
                <Banner/>
                <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="icofont-heart-beat"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="icofont-drug"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="icofont-thermometer-alt"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="icofont-dna-alt-1"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>In an emergency? Need help now?</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
        </div>

      </div>
    </section>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-doctor-alt"></i>
              <span data-toggle="counter-up">85</span>
              <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-patient-bed"></i>
              <span data-toggle="counter-up">18</span>
              <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-laboratory"></i>
              <span data-toggle="counter-up">8</span>
              <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-award"></i>
              <span data-toggle="counter-up">150</span>
              <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2" ></div>
        </div>

      </div>
    </section>
    <section id="services" className="services services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="icofont-heart-beat"></i></div>
            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="icofont-drug"></i></div>
            <h4 className="title"><a href="">Dolor Sitema</a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="icofont-dna-alt-2"></i></div>
            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="icofont-heartbeat"></i></div>
            <h4 className="title"><a href="">Magni Dolores</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="icofont-disabled"></i></div>
            <h4 className="title"><a href="">Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="icofont-autism"></i></div>
            <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>

      </div>
    </section>
    
                <AboutUs/>
                <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Departments</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                  <h4>Cardiology</h4>
                  <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-toggle="tab" href="#tab-2">
                  <h4>Neurology</h4>
                  <p>Voluptas vel esse repudiandae quo excepturi.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-toggle="tab" href="#tab-3">
                  <h4>Hepatology</h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-toggle="tab" href="#tab-4">
                  <h4>Pediatrics</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <h3>Cardiology</h3>
                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-2">
                <h3>Neurology</h3>
                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-3">
                <h3>Hepatology</h3>
                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>Pediatrics</h3>
                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        

      </div>
    </section>
    <section id="doctors" className="doctors section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Doctors</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="owl-carousel gallery-carousel" data-aos="fade-up" data-aos-delay="100">
          <a href="assets/img/gallery/gallery-1.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-1.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-2.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-2.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-3.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-3.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-4.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-4.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-5.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-5.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-6.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-6.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-7.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-7.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-8.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-8.jpg" alt=""/></a>
        </div>

      </div>
    </section>
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questioins</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">

          <li>
            <a data-toggle="collapse" className="" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="icofont-simple-up"></i></a>
            <div id="faq1" className="collapse show" data-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="icofont-simple-up"></i></a>
            <div id="faq2" className="collapse" data-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="icofont-simple-up"></i></a>
            <div id="faq3" className="collapse" data-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="icofont-simple-up"></i></a>
            <div id="faq4" className="collapse" data-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="icofont-simple-up"></i></a>
            <div id="faq5" className="collapse" data-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="icofont-simple-up"></i></a>
            <div id="faq6" className="collapse" data-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>
    
                <Form/>
                <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Medicio</h3>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
            </div>
        )
    }
}

export default Main