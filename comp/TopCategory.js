import React from 'react';
import "./style.css"
import Zoom from 'react-reveal/Zoom';



function TopCategory() {
    return (

        <div id="category" class="top_catagory_area section-padding-80 clearfix" style={{paddingTop:100, paddingBottom:100}}>
            <div class="container">
                <div class="row justify-content-center">
                   
                    <div class="col-12 col-sm-6 col-md-4" >
                    
                        <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" id="ctg" style={{backgroundImage: 'url(assets/img/bg-img/men.png)'}}>
                            <div class="catagory-content">
                            <Zoom>
                                <a id="title" href="#homme">Homme</a>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    
                  
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" id="ctg" style={{backgroundImage: 'url(assets/img/bg-img/women.png)'}}>
                            <div class="catagory-content">
                            <Zoom>
                                <a id="title" href="#femme">Femme</a>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" id="ctg" style={{backgroundImage: 'url(assets/img/bg-img/bg-4.jpg)'}}>
                            <div class="catagory-content">
                            <Zoom>
                                <a id="title" href="#access">Accessoires</a>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

);
}

export default TopCategory;