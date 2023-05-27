import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface IFooter {
	className?:string;
}
const Footer: React.FC<IFooter> = ({className}) => {
  return (
    <footer className={className}>
		  <Container className="text-default">
		    <Row className="align-items-center">
					<p className="mb-0">&copy;<span id="currentYear">{new Date().getFullYear()}</span>  All rights reserved. Designed by LettStart Design</p>
		    </Row>
		  </Container>
		</footer>
  )
}

Footer.displayName = "Footer";
export default Footer;