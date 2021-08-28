import React, { useContext } from 'react';
import { ProductsContext } from '../global/ProductsContext';
import { Link } from 'react-router-dom'
import "./style.css"



function Popular3() {

    const { accproducts } = useContext(ProductsContext);
    // console.log(accproducts);
    

    return (

        <section class="new_arrivals_area section-padding-80 clearfix" id="access">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-center">
                            <h2>Accessoires</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row" id="glob">
                {accproducts.length === 0 && <div>no products to display</div>}
                {accproducts.map(product => (
                    <div id="glob2" key={product.ProductID}>
                            <div class="single-product-wrapper" id="wrapper">
                                <div class="product-img">
                                    <img src={product.ProductImg} alt="" />
                                    <img class="hover-img hoverd" src={product.ProductImg2} alt="" />
                                </div>
                                <div class="product-description">
                                    <p>
                                        <h6>{product.ProductName}</h6>
                                    </p>
                                    <p class="product-price">{product.ProductPrice}.00 DH<del style={{marginLeft:100}}>{product.ProductOldPrice}.00 DH</del></p>

                                    <div class="hover-content">
                                        <div class="add-to-cart-btn">
                                            <a href="#"  ><Link class="rich-btn" to="/login">Commander</Link></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

);
}

export default Popular3;