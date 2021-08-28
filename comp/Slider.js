import React from 'react';
import "./style.css"
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';


function Slider() {
    return (

        
        <section class="welcome_area bg-img background-overlay" style={{backgroundImage: 'url(assets/img/bg-img/bg-1.jpg)'}}>
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <div class="descript">
                        <Fade left>
                            <h2>Bienvenue chez <br />AHMPrint</h2>
                            <h5>Dessins modernes ou dessins selon vos choix, et le plus important: Impression sur divers materiaux.</h5>
                            <h6>T-sirt, capuche, Mug, coussin, cadre photo, trophee, pochette, porte cle et plus d'autres.</h6>
                        </Fade>
                        </div>
                        <Shake>
                        <a href="#category" class="rich-btn">Nos collection</a>
                        </Shake>
                    </div>
                </div>
            </div>
        </section>

);
}

export default Slider;