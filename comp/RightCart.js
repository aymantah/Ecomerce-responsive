import React from 'react';




function RightCart() {


    return (
        
        <div class="right-side-cart-area">
            
                
            <div class="cart-button">
                <a href="#" id="rightSideCart"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
            </div>
            <div class="cart-content d-flex">
                shoppingCart.length === 0 && 
                    <div>no items in your cart or slow internet causing trouble (Refresh the page) </div>                   

            
                <div class="cart-list">
                    <div class="single-cart-item">
                        <div class="product-image">
                            <img src="" class="cart-thumb" alt="not found" />
                            
                            <div class="cart-item-desc">
                            <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                                {/* <span class="badge">{cart.ProductName}</span>
                                <h6>Button Through Strap Mini Dress</h6>
                                <p class="size">Size: S</p>
                                <p class="color">Color: Red</p>
                                <p class="price">$45.00</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            

                
                <div class="cart-amount-summary">

                    <h2>Summary</h2>
                    <ul class="summary-table">
                        <li><span>subtotal:</span> <span>$274.00</span></li>
                        <li><span>delivery:</span> <span>Free</span></li>
                        <li><span>discount:</span> <span>-15%</span></li>
                        <li><span>total:</span> <span>$232.00</span></li>
                    </ul>
                    <div class="checkout-btn mt-100">
                        <a href="#" class="btn rich-btn">check out</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default RightCart;