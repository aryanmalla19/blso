import React from 'react';
import './TeamSection.css'
// Import Font Awesome CSS if you're not using the CDN link
// import 'font-awesome/css/font-awesome.min.css';
import dipak from '../assets/dipak.jpg'
import sharmila from '../assets/sharmila.jpg'
const TeamSection = () => {
    return (
        <div className="wrapper">

            <div className="">
                <h4 className='text-3xl text-second font-semibold text-center'>Our Team Section</h4>
            </div>
        
            <div className="card_Container">

                <div className="card">

                    <div className="imbBx">
                        <img src={dipak} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>Dipak Niroula <br /><span>Former Founder</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card">

                    <div className="imbBx">
                        <img src={sharmila} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>Sharmila Karki<br /><span>Former Co-founder</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card">

                    <div className="imbBx">
                        <img src="https://www.blsonepal.org.np/uploads/medium/mandip-3jIbh3iw0BK6JurqWHcZmOqKWyQdeivontpy7u0V.jpg" alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>Mandip Karki<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>

                

                {/* Repeat similar structure for other team members */}

            </div>

        </div>
    );
}

export default TeamSection;
