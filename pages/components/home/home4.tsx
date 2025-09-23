import React from "react";
import { Row, Col } from "react-bootstrap";
import { imagePath } from "../../../custom.config";
import NextLink from "next/link";
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (
    <section className="section home-profile">
      <Row>
        <Col md={6} className="mb-30" data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
          <figure className="profile-image text-center">
            <img src={imagePath + "/profile.jpg"} alt="" width="400" />
          </figure>
        </Col>
        <Col md={6} className="mb-30" data-aos="fade-left" data-aos-duration="400" data-aos-delay="500" data-aos-easing="ease-out-cubic">
          <div className="profile-info">
            <h6 className="mb-15">
              <span className="d-inline-block text-white">Hello I&apos;m</span>
            </h6>
            <h1 className="mb-0">Christian Vaughn</h1>
            <h4 className="mb-0"><span id="typewriter">
              <Typewriter
                options={
                  {
                    strings: ["Backend Developer", "Data Scientist"],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    deleteSpeed: 100,
                    delay: 200
                  }
                }
              />
            </span></h4>
            <ul className="list-unstyled my-30">
              <li className="py-1">
                <i className="bx bx-envelope me-2 align-middle fs-18"></i>
                <NextLink href={"mailto:"}>contact@christianvaughn.net</NextLink>
              </li>
              <li className="py-1">
                <i className="bx bx-phone me-2 align-middle fs-18"></i>
                <NextLink href={"callto:"}>(559) 579-7885</NextLink>
              </li>
              <li className="py-1">
                <i className="bx bx-map me-2 align-middle fs-18"></i>
               California, United States
              </li>
            </ul>
            <div className="socials-icons socials-grey">
              <NextLink href={"https://github.com/ChristianVaughn"}><i className="bx bxl-github"></i></NextLink>
              <NextLink href={"https://www.linkedin.com/in/christian-vaughn-3a29bb23b/"}><i className="bx bxl-linkedin"></i></NextLink>
              {/* end social-icon */}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

Home.displayName = "Home";
export default Home;
