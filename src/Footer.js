import React from 'react'
import {Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="images/logowhite.png" alt="C360" class="" title="C360" />
                            <div class="social">
                                <Link to="/"><img src="images/fb.png" alt="Logo" class="" title="Logo" /></Link>
                                <Link to="/"><img src="images/insta.png" alt="Logo" class="" title="Logo" /></Link>
                                <Link to="/"><img src="images/tweet.png" alt="Logo" class="" title="Logo" /></Link>
                                <Link to="/"><img src="images/in.png" alt="Logo" class="" title="Logo" /></Link>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li> <Link to="/Artificialintelligencepage1">  Services</Link> </li>
                                <li> <Link to="/Healthcarepage"> Industries</Link> </li>

                                <li> <Link to="/Careerspage"> Careers</Link> </li>
                                <li> <Link to="/Aboutc360page"> About </Link> </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li> <Link to="/Artificialintelligencepage1"> Artificial Intelligence</Link> </li>
                                <li> <Link to="/Applicationservicespage"> Application Services</Link> </li>

                                <li> <Link to="/Cloudservicespage"> Cloud Services</Link> </li>
                                <li> <Link to="/Digitalanalyticspage"> Data Analytics</Link> </li>
                            </ul>
                        </div>
                    </div>


                    <div class="copy">Copyright 2021 C360Soft.ai
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
