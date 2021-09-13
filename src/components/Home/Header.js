import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="header">
		<div className="container">
			<div className="row ">
				<div className="col-md-3 col-sm-3"> 
					<Link to="/"> <img src="images/logo.png" alt="C360soft" title="C360soft" className="logo stickylogo" width="auto" height="auto"/> <img src="images/logowhite.png" alt="C360soft" title="C360soft" className="logo staticlogo" width="auto" height="auto"/></Link>
				</div>
				<div className="col-md-9 col-sm-9 text-right d-flex align-items-center">
					<div className="collapse nav navbar-collapse" id="navbar-collapse">
					  <ul className="mainmenu ">
						<li className=""><a href="#" className="">Services <i className="fa fa-angle-down" aria-hidden="true"></i></a>
							<div className="submenu" style={{display: 'none', height: '136px', paddingTop: '30px', marginTop: '0px', paddingBottom: '30px', marginBottom: '0px'}}>
								<div className="container">
								  <div className="row">
									<div className="col-md-3">
									  <ul>
										<li><Link to="/Artificialintelligencepage1">  Artificial Intelligence</Link></li>
										<li><Link to="/Applicationservicespage">  Application Services</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
										<li><Link to="/Cloudservicespage">  Cloud Services</Link></li>
										<li><Link to="/Devopspage1">  DevOps</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
										<li><Link to="/Digitaltransformation"> Digital Transformation</Link></li>
										<li><Link to="/Digitalanalyticspage"> Data Analytics</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
										<li><Link to="/Productdevelopmentpage">Product Development</Link></li>
									   
									  </ul>
									</div>
								  </div>
								</div>
							  </div>
						</li>
						<li className=""><a href="#" className="">Industries <i className="fa fa-angle-down" aria-hidden="true"></i> </a>
							<div className="submenu" style={{display: 'none', height: '174px', paddingTop: '30px', marginTop: '0px', paddingBottom: '30px', marginBottom: '0px'}}>
								<div className="container">
								  <div className="row">
									<div className="col-md-3">
									  <ul>
										<li><Link to="/Financepage"> Finance</Link></li>
										<li><Link to="/SupplychainAnalyticspage"> Supply chain & Logistics</Link></li>
										<li><Link to="/Automobilepage"> Automobile</Link></li>
									   
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
									  
									  <li><Link to="/Healthcarepage"> Healthcare</Link></li>
										<li><Link to="/Marketingpage"> Marketing</Link></li>
										<li><Link to="/Insurancepage"> Insurance</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
										 
									  <li><Link to="/Retailpage"> Retail </Link></li>
										<li><Link to="/Telecommunicationspage"> Telecommunications</Link></li>
									  
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
										
									  <li><Link to="/Educationpage"> Education </Link></li>
										<li><Link to="/Manufacturingpage"> Manufacturing</Link></li>
									  </ul>
									</div>
									
								  </div>
								</div>
							  </div>
						</li>
						<li className="insightdrop"><a href="#" className="">Insights <i className="fa fa-angle-down" aria-hidden="true"></i> </a>
							<div className="submenu" style={{display: 'none', height: '174px', paddingTop: '30px', marginTop: '0px', paddingBottom: '30px', marginBottom: '0px'}}>
								<div className="container">
								  <div className="row">
									<div className="col-md-3">
									  <ul>
									  <li><Link to="/MachineLearningpage"> Machine Learning</Link></li>
									  <li><Link to="/Fullstackdevelopmentpage"> FullStack Development</Link></li>
									  <li><Link to="/Tableaupage"> Tableau</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									  <ul>
									  <li><Link to="/Powerbipage"> Power BI</Link></li>
									  <li><Link to="/Devopspage">DevOps</Link></li>
									  <li><Link to="/Computervisionpage"> Computer Vision</Link></li>
									  </ul>
									</div>
									<div className="col-md-3">
									 <ul>
									 <li><Link to="/Deeplearningpage"> Deep Learning</Link></li>
									  <li><Link to="/Awspage">AWS</Link></li>
									  <li><Link to="/Azurepage">  Azure</Link></li>
									 </ul>
								   </div>
								   <div className="col-md-3">
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
						<li className="getlink"><a href="#" className="" data-toggle="modal" data-target="#get_trained">Get Started</a></li>
					  </ul>
					</div>
				  </div>
			</div>
		</div>
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
	</header>
        </div>
    )
}

export default Header
