import React from 'react'
import {Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="aboutrow">
		<div className="container">
			<div className="row">
				<div className="col-md-5 "> <img src="images/image_about_us.svg" alt="C360" className="wow fadeInUp animated" title="C360" width="100%" height="100%"/> </div>
				<div className="col-md-7 d-flex align-items-center">
					<div className="pad_l30">
						<div className="pad_b20">
							<h3 className="wow fadeInUp animated">About</h3> <img src="images/logowhite.png" alt="C360" title="C360" className="wow fadeInUp animated"/> </div>
						<p className="wow fadeInUp animated">C360 Software is a global services company with leading capabilities in AI, cloud. C360 Software Team works with the C-Suite of the Fortune 500 to drive transformational business growth. C360 delivers services for developing, deploying, and operating large-scale AI and Cloud.</p>
						<p><Link to="/Aboutc360page" className="wow fadeInUp animated">View More</Link> </p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default About
