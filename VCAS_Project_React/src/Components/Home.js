import React, {Components} from "react";
import vcar from './images/vcar.jpg';
import vcar2 from './images/vcar2.jpg';
import vcar3 from './images/vcar3.png';
import vcar4 from './images/vcar4.jpg';
import vcar5 from './images/vcar5.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
    return(
        <div>
            <Navbar />
            <br/>
        <h5 >A brief look into some of the road faring vintage classic cars for Auction in Bangladesh, all with transplanted hearts</h5>
       <div class="information">
       <br/>
       The ol' reliable Toyota running gear giving classics a new lease on life, and this particular fiat just might be one of the very first restomods in Dhaka, done by Akbar A Sattar. This little fiat sits comically beside some of its larger American siblings inside its stable. Turbocharged Toyota 4E-FTE mated to an automatic has enough firepower, while the rally-style O.Z wheels are undoubtedly the most excellent modification on this restomod.

        </div>
    
       <div class="responsive">
       <div class="gallery">
       <a target="_blank" href="https://www.tbsnews.net/features/history-wheels-vintage-and-restomodded-cars-bangladesh-458902">
       <img src={vcar} width="600" height="600"/>
       </a>
       <div class="desc">1977 FIAT X1/9</div>
       </div>
       </div>

       <div class="responsive">
       <div class="gallery">
       <a target="_blank" href="https://www.tbsnews.net/features/history-wheels-vintage-and-restomodded-cars-bangladesh-458902">
       <img src={vcar2} width="600" height="600"/>
       </a>
       <div class="desc">Mercedes Benz W123 230 & 280E</div>
       </div>
       </div>
       
       <div class="responsive">
       <div class="gallery">
       <a target="_blank" href="https://www.tbsnews.net/features/history-wheels-vintage-and-restomodded-cars-bangladesh-458902">
       <img src={vcar3} width="600" height="600"/>
       </a>
       <div class="desc">1959 Ford Zephyr</div>
       </div>
       </div>

       <div class="responsive">
       <div class="gallery">
       <a target="_blank" href="https://www.tbsnews.net/features/history-wheels-vintage-and-restomodded-cars-bangladesh-458902">
       <img src={vcar4} width="600" height="600"/>
       </a>
       <div class="desc">1982 Toyota KE70</div>
       </div>
       </div> 
        <div class="information">
        <br/>
        The Toyota sourced six-cylinder naturally aspirated 2JZ found underneath both these W123s have a nice throaty grunt on the wide open throttle, all the while being yet another unholy axis of collaboration between the Germans and the Japanese. While the red 280E is flashy, the silver-green paint on the 230 with the period-correct bundt wheels is to die for.
        </div>
        <div class="information">
        <br/>
        Toyota JZ power inside much older metal. Undoubtedly the best variation of the British ford zephyr from the late 50s, the car once upon a time belonged to the late car collector extraordinaire EM Faruq. However, the brain behind the extraordinary restoration project is Abrar Musa. The candy red is delicious, not that we had a lick of it.
        </div>

        <div>

        <img src={vcar5} width="1300" height="600"/>
        </div>

        <div class="information">
        <br/>
        What started life as a series 3 fire truck employed by the government now lives its life as a summer/winter cruiser, with a backdated series 2A face. Just don't get inside when it's raining outside. This vehicle also belongs to Abrar Musa.
        </div>
     </div>
        
    );
}
export default Home;