import type { NextPage } from "next";
import Header from "./components/navbar/navbar3";
import { Element } from "react-scroll";
import Home from "./components/home/home4";
import React from "react";
import AboutUs from "./components/about/about3";
import Resume from "./components/resume/resume4";
import Works from "./components/works/work4";
import Footer from "./components/footer/footer2";
import { Container } from "react-bootstrap";
import { IDefaultReducer } from "./redux/store";
import { useSelector } from "react-redux";
import { imagePath } from "../custom.config";
import Divider from "./shared/divider/divider";
const navs = [
  {
    hash: "home",
    icon: "bx bx-home",
    text: "Home",
  },
  {
    hash: "about",
    icon: "bx bx-user",
    text: "About",
  },
  {
    hash: "resume",
    icon: "bx bx-layout",
    text: "Resume",
  },
  {
    hash: "portfolio",
    icon: "bx bx-code-alt",
    text: "Portfolio",
  },
  // {
  //   hash: imagePath + "/Christian_Vaughn_Resume.pdf",
  //   icon: "bx bx-download theme-color",
  //   text: "Download",
  // },
];

const Index: NextPage<any> = () => {
  const { isLight } = useSelector((state: IDefaultReducer) => state.AppReducer);
  React.useEffect(() => {
    document.body.setAttribute("layout-type", "body-bg");
    document.body.setAttribute("default-theme", "teal");
    return () => {
      document.body.removeAttribute("layout-type");
      document.body.removeAttribute("default-theme");
    };
  }, []);
  return (
    <div className={`wrapper box-wrapper ${isLight ? "theme-soft-bg" : ""}`}>
      <Container className="position-relative">
        <Header navs={navs} />
        <div
          className={`content box-content-2 bg-${!isLight ? "light" : "white"}`}
        >
          <Element name="home">
            <Home />
          </Element>
          <Divider />
          {/* Divider end */}
          <Element name="about">
            <AboutUs isLight={isLight} />
          </Element>
          <Divider />
          {/* Divider end */}
          <Element name="resume">
            <Resume isLight={isLight} />
          </Element>
          <Element name="portfolio">
            <Works isLight={isLight} />
          </Element>
          {/* <Divider /> */}
          {/* Divider end */}
        </div>
        <Footer className="footer-2 bg-transparent" />
      </Container>
    </div>
  );
};

export default Index;
