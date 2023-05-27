import NextLink from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import { imagePath } from "../../../custom.config";
import Services from "../services/service2";


const AboutUs: React.FC<{isLight: boolean}> = ({isLight}) => {
	return (
		<section className="section">
			<div className="pb-50">
				<SectionHeader className="style-2">
					<>About Me</>
				</SectionHeader>
				<Row>
					<Col md={6} className="mb-30" data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>Hello! My name is <strong>Christian Vaughn</strong>. I am a multifaceted Software Engineer, skilled in Python, TypeScript, and backend development. 
						My professional experience encompasses designing, developing, testing, and deploying efficient software solutions, with a demonstrated knack for creating effective architecture. </p>
			
						<div className="mt-30 mb-30 mb-md-0">
							<NextLink passHref href={imagePath + "/Christian_Vaughn_Resume.pdf"}>
								<a target="_blank" className="btn btn-primary me-3 mb-2 mb-sm-0">
									Download CV
								</a>
							</NextLink>

						</div>
					</Col>
					<Col md={6} className="ps-lg-5 mb-30" data-aos="fade-left" data-aos-duration="400" data-aos-delay="500" data-aos-easing="ease-out-cubic">
						<p>Simultaneously, I've nurtured a keen interest in data science and machine learning, highlighting my love for solving complex problems and turning data into actionable insights. 
						Combining these skills, I strive to deliver innovative and impactful technology solutions, always eager to learn and embrace new challenges in the rapidly evolving tech landscape.</p>
					</Col>
				</Row>
			</div>
			<Services className={`pt-80 pb-50 ${!isLight ? 'box-content-inner-bg' : 'bg-light'} box-content-inner`} />
		</section>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;