import React from 'react';


function Footer() {
    return (

        <footer class="footer_area clearfix">
            <div class="container">
                <div class="row">
                  
                    <div class="col-12 col-md-6">
                        <div class="single_widget_area d-flex mb-30">
                            
                            <div class="footer_menu">
                                <ul>
                                    <li><a href="/">AHMPrint</a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-12 col-md-6">
                        <div class="single_widget_area mb-30">
                            <ul class="footer_widget_menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row align-items-end">
                    
                    <div class="col-12 col-md-6">
                        <div class="single_widget_area">
                            <div class="footer_heading mb-30">
                                <h6>Subscribe</h6>
                            </div>
                            <div class="subscribtion_form">
                                <form action="#" method="post">
                                    <input type="email" name="mail" class="mail" placeholder="Your email here" />
                                    <button type="submit" class="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-12 col-md-6">
                        <div class="single_widget_area">
                            <div class="footer_social_area">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

        <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <p>
                            
        Copyright &copy; 2021 All rights reserved | Made by Digidev 

                        </p>
                    </div>
                </div>

            </div>
        </footer>


);
}

export default Footer;