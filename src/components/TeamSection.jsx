import React from 'react';
import './TeamSection.css'
// Import Font Awesome CSS if you're not using the CDN link
// import 'font-awesome/css/font-awesome.min.css';

const TeamSection = () => {
    return (
        <div className="wrapper">

            <div className="title">
                <h4 className='text-2xl'>Our Team Section</h4>
            </div>

            <div className="card_Container">

                <div className="card">

                    <div className="imbBx">
                        <img src="https://www.blsonepal.org.np/uploads/medium/gokul-wnjTI9FaPqdLwOcOczkrwhzVvFS7f778bGAr8jwW.jpg" alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>James Henry <br /><span>Web Analyst</span></h3>
                        </div>
                        <ul className="sci">
                            <li style={{ '--i': 1 }}>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li style={{ '--i': 2 }}>
                                <a href="/"><i className="fab fa-github"></i></a>
                            </li>
                            <li style={{ '--i': 3 }}>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="card">

                    <div className="imbBx">
                        <img src="https://www.blsonepal.org.np/uploads/medium/gokul-wnjTI9FaPqdLwOcOczkrwhzVvFS7f778bGAr8jwW.jpg" alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>James Henry <br /><span>Web Analyst</span></h3>
                        </div>
                        <ul className="sci">
                            <li style={{ '--i': 1 }}>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li style={{ '--i': 2 }}>
                                <a href="/"><i className="fab fa-github"></i></a>
                            </li>
                            <li style={{ '--i': 3 }}>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="card">

                    <div className="imbBx">
                        <img src="https://www.blsonepal.org.np/uploads/medium/mandip-3jIbh3iw0BK6JurqWHcZmOqKWyQdeivontpy7u0V.jpg" alt="" />
                    </div>

                    <div className="content">
                        <div className="contentBx">
                            <h3>James Henry <br /><span>Web Analyst</span></h3>
                        </div>
                        <ul className="sci">
                            <li style={{ '--i': 1 }}>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li style={{ '--i': 2 }}>
                                <a href="/"><i className="fab fa-github"></i></a>
                            </li>
                            <li style={{ '--i': 3 }}>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Repeat similar structure for other team members */}

            </div>

        </div>
    );
}

export default TeamSection;
