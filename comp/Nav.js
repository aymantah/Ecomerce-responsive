import React from 'react';





function Nav() {
    return (

        <header class="header_area">
            <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
               
                <nav class="classy-navbar" id="richNav">
                  
                    <a class="nav-brand" href="/">AHMPrint</a>
                   
                    <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                   
                    <div class="classy-menu">
                       
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                      
                        <div class="classynav">
                            <ul style={{marginTop:15}}>
                                <li><a href="#">Categories</a>
                                    <ul class="dropdown" style={{backgroundColor:'rgb(226, 226, 226)'}}>
                                        <li><a href="#homme">Homme</a></li>
                                        <li><a href="#femme">Femme</a></li>
                                        <li><a href="#access">Accessoires</a></li>
                                        
                                    </ul>
                                </li>
                                <li style={{marginLeft:10}}><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </nav>

              
                <div class="header-meta d-flex clearfix justify-content-end">
                  
                    <div class="search-area">
                        <form method="post">
                            <input type="search" name="search" id="headerSearch" placeholder="Recherche" />
                            <button type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>

                    <div class="user-login-info">
                        <a href="/login" style={{color:'black'}}>Login</a>
                    </div>
                   
                    
                </div>

            </div>
        </header>
        );
    }
    
    export default Nav;