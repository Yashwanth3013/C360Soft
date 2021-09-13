import React from 'react'
import { Link } from 'react-router-dom'

const Industries = () => {
    return (
        <div>
            <div className="sticky-stopper"></div>
	<div className="industriesrow">
		<div className="container">
			<h2 className="titleone wow fadeInUp animated">Industries</h2>
			<div className="industriestabs">
				<ul className="nav nav-tabs wow fadeInUp animated">
					<li className="">
						<a data-toggle="tab" href="#finance" className="active"> <span className="fi-icon"> <i></i> </span> Finance</a>
					</li>
					<li>
						<a data-toggle="tab" href="#healthcare"> <span className="he-icon"> <i></i> </span>HealthCare</a>
					</li>
					<li>
						<a data-toggle="tab" href="#supply"> <span className="su-icon"> <i></i> </span>Supply Chain &
							<br/> Logistics</a>
					</li>
					<li>
						<a data-toggle="tab" href="#manufacturing"> <span className="ma-icon"> <i></i> </span>Manufacturing</a>
					</li>
					<li>
						<a data-toggle="tab" href="#retail"> <span className="re-icon"> <i></i> </span>Retail</a>
					</li>
					<li>
						<a data-toggle="tab" href="#telecommunications"> <span className="te-icon"> <i></i> </span>Telecommunications</a>
					</li>
					<li>
						<a data-toggle="tab" href="#automobile"> <span className="au-icon"> <i></i> </span>Automobile</a>
					</li>
					<li>
						<a data-toggle="tab" href="#education"> <span className="ed-icon"> <i></i> </span>Education</a>
					</li>
					<li>
						<a data-toggle="tab" href="#insurance"> <span className="in-icon"> <i></i> </span>Insurance</a>
					</li>
					<li>
						<a data-toggle="tab" href="#marketing"> <span className="mar-icon"> <i></i> </span>Marketing</a>
					</li>
				</ul>
				<div className="tab-content">
					<div id="finance" className="tab-pane fade in active">
						<div className="induinfo wow fadeInUp animated">
							<div className="row">
								<div className="col-md-5"><img src="images/finance1.jpg" alt="Finance" title="Finance" width="100%" height="100%"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h5>Finance</h5>
										<h4>AI is Transforming the Finance Industry</h4>
										<ul className="ullist">
											<li>Artificial Intelligence can be used abundantly inprocesses which involve auditing of financialtransactions </li>
											<li>AI also has the capability to identify how customersare going to react to various situationsand problems</li>
											<li>Risk Assessment,Fraud Detection And Management,FinancialAdvisoryServices,Trading,Managing Finance </li>
										</ul>
										<p><Link to="/Financepage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="healthcare" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/finance.jpg" alt="Healthcare" title="Healthcare" className=""/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h5>Healthcare </h5>
										<h4>AI IN HEALTHCARE</h4>
										<ul className="ullist">
											<li>Artificial intelligence simplifies the lives of patients,doctors and hospital administrators byperforming tasks that are typically done by humans </li>
											<li>AI offers a number of advantages over traditionalanalytics and clinical decision-makingtechniques</li>
											<li>Learning algorithms can become more precise and accurateas they interact with trainingdata, allowing humans to gain unprecedented insightsinto diagnostics. </li>
										</ul>
										<p><Link to="/Healthcarepage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="supply" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/supplychain-.jpg" alt="Supply chain and Logistics" title="Supply chain and Logistics"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Supply chain and Logistics</h4>
										<ul className="ullist">
											<li>With their ability to handle mass data, AI driven tools can prove to be highly effective in inventory management.</li>
											<li>AI systems can also solve several warehouse issues, more quickly and accurately than a human can and also simplify complex procedures and speed up work.</li>
											<li>AI-based automated tools can ensure smarter planning and efficient warehouse management, which can enhance worker and material safety </li>
										</ul>
										<p><Link to="/SupplychainAnalyticspage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="manufacturing" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/manufacturing.jpg" alt="Manufacturing" title="Manufacturing"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Manufacturing</h4>
										<ul className="ullist">
											<li>Predictive maintenance allows companies to predict when machines need maintenance with high accuracy, instead of guessing or performing preventive maintenance</li>
											<li>Machine vision allows machines to “see” the products on the production line and spot any imperfections. </li>
											<li>Prediction of failure modes,Generative design,Robotics</li>
										</ul>
										<p><Link to="/Marketingpage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="retail" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/retail.jpg" alt="Retail" title="Retail"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Retail</h4>
										<ul className="ullist">
											<li>Artificial intelligence can automate in-store operations and reduce operational expenses in retail stores</li>
											<li>Artificial intelligence solutions in retail can effortlessly improve customer engagement by building interactive chat programs </li>
											<li>Flexibility Of Price Adjustments, Personalization And Customer Insights,Intelligent Product Searches</li>
										</ul>
										<p><Link to="/Retailpage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="telecommunications" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/telecommunication.jpg" alt="Telecom" title="Telecom"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Telecom</h4>
										<ul className="ullist">
											<li>By applying data science and building an AI platform, telecoms can evaluate the customer experience, measured by a performance index, and predicts the potential for bad experiences </li>
											<li>AI models learn why customers reach out to their service providers and can predict when a customer will make a contact, allowing the telecom to take proactive action</li>
											<li>An AI model built around a telecom’s products, their customers and customer behavior gives salespeople recommendations for next best offers</li>
										</ul>
										<p><Link to="/Telecommunicationspage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="automobile" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/automobile.jpg" alt="Automobile" title="Automobile"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Automobile</h4>
										<ul className="ullist">
											<li>Driverless cars were the part of science fiction movies in the past, but now it would be seen in our day to day lives all thanks to artificial intelligence.</li>
											<li>Predictive maintenance,Repair scheduling,Identification of performance issues,Using smart sensors to identify medical emergencies,Automatic toll collection</li>
											<li>Cognitive systems are assumed to work similar to a human which would interpret the real-life situations and work accordingly</li>
										</ul>
										<p><Link to="/Automobilepage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="education" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/education.jpg" alt="Education" title="Education"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Education</h4>
										<ul className="ullist">
											<li>Artificial Intelligence is one of the disruptive techniques to customize the experience of different learning groups, teachers, and tutors</li>
											<li>Artificial Intelligence helps find out what a student does and does not know, building a personalized study schedule for each learner considering the knowledge gaps.</li>
											<li>New ways of perceiving information, such as visualization, simulation, web-based study environments, can be powered by AI</li>
										</ul>
										<p><Link to="/Educationpage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="insurance" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/insurance.jpg" alt="Insurance" title="Insurance"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Insurance</h4>
										<ul className="ullist">
											<li>To combat fraud, insurers are using AI-driven predictive analytics software to process thousands of claims each month..</li>
											<li>Insurance companies are also enhancing customer profiling with AI-enabled voice and facial recognition, which helps create biological customer profiles for fast and accurate verification</li>
											<li>Insurers are now using advanced analytics and machine learning,to get a more holistic view of risk, as well as to determine which submissions to review in the first place</li>
										</ul>
										<p><Link to="/Insurancepage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="marketing" className="tab-pane fade">
						<div className="induinfo">
							<div className="row">
								<div className="col-md-5"><img src="images/marketing.jpg" alt="Marketing" title="Marketing"/></div>
								<div className="col-md-7">
									<div className="pad_l30">
										<h4>Marketing</h4>
										<ul className="ullist">
											<li>AI-enhanced PPC advertising,Highly personalized website experience and better CRO</li>
											<li>AI Algorithms can map a subscriber’s website experience and email browsing data to understand all the individual’s interactions with your content. This knowledge allows the algorithm to identify hyper-contextual content to create one-on-one personalized emails.</li>
											<li>Churn prediction and smart customer engagement,AI-powered customer insights</li>
										</ul>
										<p><Link to="/Marketingpage">View More</Link> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default Industries
