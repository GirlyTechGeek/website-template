import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends Component{
    
    render(){
        return(
            <div>
               <footer className="bg-dark text-center text-white">
                    <div className="container p-4">
                        <section className="foot">
                            <a className="btn btn-outline-light btn-floating mr-1" href="#!" role="button"
                                ><FacebookIcon/>
                            </a>
                            <a className="btn btn-outline-light btn-floating mr-1" href="#!" role="button"
                                ><TwitterIcon/>
                            </a>
                            <a className="btn btn-outline-light btn-floating mr-1" href="#!" role="button"
                                ><InstagramIcon/>
                            </a>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                        © 2021 Copyright | All Rights Reserved
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer