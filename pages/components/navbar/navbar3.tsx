import React from "react";
import { Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { imagePath } from "../../../custom.config";
import { INavs, INavBar } from "../../../typescript/interfaces/nav.interface";


const Header: React.FC<INavBar> = ({ navs, className }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(false);
  // Detect if user is scorlled down (used for add/disable extra large navbar)
  const userIsScrolled = React.useCallback(() => {
    if (window.pageYOffset > 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, []);
  
  const userIsAtBottom = React.useCallback(() => {
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
      setIsAtBottom(true)
    } else {
      setIsAtBottom(false)
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", userIsScrolled);
	window.addEventListener('scroll', userIsAtBottom);
    return () => {
      window.removeEventListener("scroll", userIsScrolled);
	  window.removeEventListener('scroll', userIsAtBottom);
    }
  }, [userIsScrolled, userIsAtBottom])
  return (
    <header className={`v-header-2 ${className ? (className ? className : className) : ''}${isScrolled ? (isAtBottom ? 'bottom-header' : 'sticky-header') : ''}`}>
      {/* navbar toggler */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsActive(!isActive)}>
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <div className={`navbar-collapse theme-bg ${isActive ? 'active' : ''}`}>
        <figure className="profile-img mb-0">
          <img src={imagePath + "/profile.png"} className="rounded-circle mx-auto img-fluid" alt="" />
        </figure>
        <ul className="nav">
          {
  navs?.map((item: INavs, idx: number) => {
    if (idx === navs.length - 1) {
      return (
        <li key={idx}>
          <a href={item.hash} target="_blank" rel="noopener noreferrer">
            <i className={`${item?.icon} avatar rounded-circle bg-gray-100 link-circle fs-18`}></i>
            <span> {item.text}</span>
          </a>
        </li>
      );
    }
    return (
      <li key={idx}>
        <ScrollLink activeClass="active" to={item.hash} spy={true} smooth={true} offset={0} duration={500} href="#">
          <i className={`${item?.icon} avatar rounded-circle bg-gray-100 link-circle fs-18`}></i>
          <span> {item.text}</span>
        </ScrollLink>
      </li>
    );
  })
}
        </ul>
      </div>
    </header>
  )
}

Header.displayName = "Nav Bar";
export default Header;