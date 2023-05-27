import React from "react";
import { Row, Col } from "react-bootstrap";
import { services } from "../../../typescript/data/services";
import { IServiceBox } from "../../../typescript/interfaces/service.interface";
import ServiceBox from "./serviceBox2";

interface IServices {
  className?: string;
}

const Services: React.FC<IServices> = ({ className }) => {
  return (
    <section className={className}>
        <div className="section-title">
          <h3>My Specialties</h3>
        </div>
        <Row>
          {
            services.slice(0, 4).map((item: IServiceBox, idx: number) => (
              <Col md={6} key={idx} data-aos="fade-up" data-aos-duration={(idx * 100) + 400} data-aos-delay={(idx * 100) + 400} data-aos-easing="ease-out-cubic">
                <ServiceBox {...item} />
              </Col>
            ))
          }
        </Row>
    </section>
  )
}

Services.displayName = "Services";
export default Services;