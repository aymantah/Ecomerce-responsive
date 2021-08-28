import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Shake from 'react-reveal/Shake';




function BestSale() {
    return (

        
        <div class="cta-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="cta-content bg-img background-overlay" id="custom-img" style={{backgroundImage: 'url(assets/img/bg-img/bg-5.jpg)'}}>
                            <div class="h-100 d-flex align-items-center " id="custom-txt">
                                <div class="cta--text">
                                <Zoom>
                                    <h6 style={{color:'#383737'}}>Choisissez le design<br /> qui vous convient <br /> et nous occuperons du reste.</h6>
                                    <br />
                                    <h2>Qu'attendez Vous !!</h2>
                                    </Zoom>
                                    <Shake>
                                    <a href="/import" class=" rich-btn">Impoter ton design</a>
                                    </Shake>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

);
}

export default BestSale;