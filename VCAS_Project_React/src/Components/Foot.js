import React, {Components} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Foot.css';
const Foot = () => {
    return(
        <div id="footer">
        <div class="footer-contents">
 
          <div class="services">
            <div class="service-items">
              <ul>
                <li>MODELS</li>
                <li>MG ZS</li>
                <li>MG HS</li>
                <li>MG3</li>
                <li>MG ZS EV</li>
                <li>MG HS PHEV</li>
               
              </ul>
            </div>
            <div class="service-items">
              <ul>
                <li>GALLERY</li>
                <li>MG ZS</li>
                <li>MG HS</li>
                <li>MG3</li>
                <li>MG ZS EV</li>
                <li>MG HS PHEV</li>
                <li>HISTORY OF MG</li>
              </ul>
              <ul>
                <li>BOOK A TEST DRIVE</li>
                <li>FIND US</li>
                <li>GET IN TOUCH</li>
                <li>OFFERS</li>
              </ul>
            </div>
            <div class="service-items">
              <ul>
                <li>AUCTION</li>
                <li>VINTAGE CAR</li>
                <li>BUY OR SELL</li>
                <li>FACEBOOK APP</li>
                <li>INTAGRAM App</li>
                
              </ul>
            </div>
            <div class="service-items">
              <ul>
                <li>FOR BUSINESS</li>
                <li>CAR BUSINESS</li>
                <li>SHOP FOR BUSINESS</li>
              </ul>
              <ul>
                <li>For AUCTION</li>
                <li>VINTAGE</li>
                <li>USED</li>
                <li>MORE THAN 3 YEARS USED</li>
              </ul>
            </div>
            <div class="service-items">
              <ul>
                <li>AUCTION DETAILS</li>
                <li>ACCESSIBILITY</li>
             
                <li>PRIVACY</li>
              </ul>
            </div>
            <div class="shop-information">
              More ways to shop: <a href="">Find an Auction from This Website</a> or
              <a href=""> other retailer</a> near you. Or call 1-800-Auction.
            </div>
          </div>
          

         
          <div class="copyright">
            <div class="copyright-part-1">
              Copyright © 2022 Vintage Car Auction Inc. All rights reserved.
            </div>
            <div class="copyright-part-2">
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Sales and Refunds</li>
                <li>Legal</li>
                <li>Site Map</li>
              </ul>
            </div>
            <div class="copyright-part-3">Bangladesh</div>
          </div>
        
        </div>
      </div>
    )
}
export default Foot;