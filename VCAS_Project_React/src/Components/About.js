import React, {Components} from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const About = () => {
    return(
        <div>
            <Navbar />
            
            <br/>
            <h1>
            <center>Vintage Car App Developers Details</center>
 
            </h1>
            <p>vitagecar.com aims to bring together professional and young creatives from a diverse range of backgrounds. By publishing the projects, latest news and key issues in the fields of architecture, design, technology and art, we state the mission of unearthing the best projects and curating a selection of the most interesting aspects of traditional and contemporary culture, architecture and art of our country. Our primary aim is to serve local audience but we would , however, not want to limit our vision and will continuously develop our platform.

A team of professional architects and academics ourselves, we opt to work with architects, designers, artists, built environment professionals and other concerned persons from round the country , seeking out the most innovative projects with an equal emphasis on the most renowned and influential studios, emerging young professionals, undiscovered talents and never the less students.</p>

<div className="container">

            <br/>
            
            <br/>
             <br/>
            <table className="table table-bordered ">
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Anika Saba Ibte Sum</td>
                    <td>20-43242-1</td>
                    <td>anikasaba15@gmail.com</td>
                </tr>
              
                

            </table> <br/>


        </div>

<div>
<br/> 
<h5>Private Car</h5><br/>

A car is a motor-wheeled vehicle used for comparative fast and easy transportation. Car came into global use during 20th century. In 1986, a German inventor Karl Benz introduced 1st modern car named Benz Patent-Motorwagen.<br/>

The first car introduced in Dhaka was owned by Nawab Salimullah. In the year 1904, it was bought from Kolkata and brought to Dhaka. The Nawab family had a private car dealership for them which went by the name Dhaka Nawab Family Automobile (Alam D.,Roy A., 2018). The first and only motor workshop in Dhaka was ‘Excel motor workshop’ run by the British and situated in Nawabpur. Mawla Baksh, who joined as a foreman was given the workshop in 1932. In Farashganj he started his own business which was taken by the British in World War II. In 1942, he got his workshop back and move to Laxmibazar. Pragoti Industries Limited (PIL) is the oldest and largest automobile assemblers in Bangladesh since 1966. The Company has assembled over 50,000 vehicles. According to Bangladesh Road Transport Authority, in 2018, registered private passenger motor car are 3, 35,660 unit.


</div>
<br/>
        </div>
    )
}
export default About;