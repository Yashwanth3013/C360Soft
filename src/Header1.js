import React from 'react'
import {Link } from 'react-router-dom'

const Header1 = () => {
    return (
        <div>
            <header class="header hedinner">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-3 col-sm-3"><Link to="/">

                            <img src="images/logowhite.png" alt="Logo" class="logo staticlogo" /></Link>

                        </div>
                        <div class="col-md-9 col-sm-9 text-right d-flex align-items-center">
                            <div class="collapse nav navbar-collapse" id="navbar-collapse">
                                <ul class="mainmenu ">
                                    <li class=""><a href="#" class="active">Services <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                        <div class="submenu">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <ul>
                                                           <li><Link to="/Artificialintelligencepage1">  Artificial Intelligence</Link></li>
										                   <li><Link to="/Applicationservicespage">  Application Services</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Cloudservicespage">  Cloud Services</Link></li>
									                     	<li><Link to="/Devopspage1">  DevOps</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Digitaltransformation"> Digital Transformation</Link></li>
										                    <li><Link to="/Digitalanalyticspage"> Data Analytics</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                           <li><Link to="/Productdevelopmentpage">Product Development</Link></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class=""><a href="#" class="">Industries <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                                        <div class="submenu">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Financepage"> Finance</Link></li>
										                    <li><Link to="/SupplychainAnalyticspage"> Supply chain & Logistics</Link></li>
										                    <li><Link to="/Automobilepage"> Automobile</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                             <li><Link to="/Healthcarepage"> Healthcare</Link></li>
										                     <li><Link to="/Marketingpage"> Marketing</Link></li>
										                     <li><Link to="/Insurancepage"> Insurance</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Retailpage"> Retail </Link></li>
									                    	<li><Link to="/Telecommunicationspage"> Telecommunications</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Educationpage"> Education </Link></li>
										                    <li><Link to="/Manufacturingpage"> Manufacturing</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="insightdrop"><a href="#" class="">Insights <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                                        <div class="submenu">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/MachineLearningpage"> Machine Learning</Link></li>
									                        <li><Link to="/Fullstackdevelopmentpage"> FullStack Development</Link></li>
									                        <li><Link to="/Tableaupage"> Tableau</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Powerbipage"> Power BI</Link></li>
									                        <li><Link to="/Devopspage">DevOps</Link></li>
									                        <li><Link to="/Computervisionpage"> Computer Vision</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Deeplearningpage"> Deep Learning</Link></li>
									                        <li><Link to="/Awspage">AWS</Link></li>
									                        <li><Link to="/Azurepage">  Azure</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ul>
                                                            <li><Link to="/Naturallanguageprocessingpage">Natural Language Processing</Link></li>
									                        <li><Link to="/Ariticialintelligencepage">  Artificial Intelligence</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        <li className=""><Link to="/Careerspage">  Careers</Link></li>
						                <li className=""><Link to="/Aboutc360page">  About C360</Link></li>
                                    <li class="getlink"><a href="#" class="" data-toggle="modal" data-target="#get_trained">Get Started</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            </header>

        </div>
    )
}

export default Header1
