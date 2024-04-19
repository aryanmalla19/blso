import React from 'react';
import './TeamSection.css'
// Import Font Awesome CSS if you're not using the CDN link
// import 'font-awesome/css/font-awesome.min.css';
import dipak from '../assets/dipak.jpg'
import sharmila from '../assets/sharmila.jpg'
import bhupal from '../assets/bhupal.jpg'
import bhawana from '../assets/bhawana.jpg'
import kamal from '../assets/kamal.jpg'
import rita from '../assets/rita.jpeg'
import padam from '../assets/padam.jpg'
import kalpana from '../assets/kalapana.jpg'
import mandip from '../assets/mandip.jpg'
const TeamSection = () => {
    return (
        <div className="wrapper mt-4">

            <div className="">
                <h4 className='text-3xl text-second font-semibold text-center'>Our Team Section</h4>
            </div>

            <div className="card_Container">

                <div className="card group">

                    <div className="imbBx">
                        <img src={dipak} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Dipak Niroula <br /><span>Former Founder</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={sharmila} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Sharmila Karki<br /><span>Former Co-founder</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={bhupal} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Bhupal Niroula<br /><span>Founder & Presidents</span></h3>
                        </div>
                    </div>

                </div>

                <div className="card group">

                    <div className="imbBx">
                        <img src={bhawana} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Bhawana Khatri<br /><span>Co-founder</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={kamal} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Kamal Raj Dahal<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={rita} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Rita Bohora<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={padam} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Padam Niroula<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>
                <div className="card group">

                    <div className="imbBx">
                        <img src={kalpana} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Kalpana Thapa<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>
                <div className='card_first'>

                <div className="card group card_Container">

                    <div className="imbBx">
                        <img src={mandip} alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx group-hover:text-white">
                            <h3>Mandip Karki<br /><span>Board Member</span></h3>
                        </div>
                    </div>

                </div>
                </div>


                {/* Repeat similar structure for other team members */}

            </div>

        </div>
    );
}

export default TeamSection;
