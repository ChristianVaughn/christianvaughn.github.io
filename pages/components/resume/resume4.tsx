import React from "react";
import { Row, Col } from "react-bootstrap";
import { educationHistory, workingHistory } from "../../../typescript/data/resume";
import { codeSkills, designSkills } from "../../../typescript/data/skills";
import { IExperienceBox } from "../../../typescript/interfaces/experience.interface";
import { ISkill2 } from "../../../typescript/interfaces/skill.interface";
import ExperienceBox from "./experienceBox";
import { skills } from "../../../typescript/data/skills";
import Skill from "./skillCard";


let isProgressDone = false;
const Resume: React.FC<{isLight: boolean}> = ({isLight}) => {
  const progressBarRef: React.MutableRefObject<Array<HTMLLIElement>> = React.useRef([]);
  React.useEffect(() => {
    const container: HTMLDivElement = (document.querySelector("#skills") as HTMLDivElement);
    /* const skillOffset = container?.offsetTop - container.clientHeight;
    const winScrollEvent = () => {
      if ((window.scrollY > skillOffset) && !isProgressDone) {
        progressBarRef.current.forEach((item: HTMLLIElement) => {
          if (item) {
            const progressBarCont: HTMLDivElement | null = item.querySelector(".progress");
            if (progressBarCont) {
              const percent = progressBarCont?.getAttribute("data-percentage");
              (progressBarCont.querySelector(".progress-bar") as HTMLDivElement).style.width = percent + "%";
            }
          }
        });
        isProgressDone = true;
      }
    } */
    //.addEventListener("scroll", winScrollEvent);
    return () => {
      //window.removeEventListener("scroll", winScrollEvent, true);
    }
  }, [progressBarRef])
  return (
    <section className="section">
      {/* Resume Section */}
      <div className="pb-50">
        <div className="section-title style-2">
          <h2 className="h3">Resume</h2>
        </div>
        <Row>
          {/* Work History */}
          <Col md={6} className="mb-30">
            <ul className="timeline ms-15 ps-15">
              <li data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                <i className="bx bx-briefcase" aria-hidden="true"></i>
                <h2 className="timeline-title">Work History</h2>
              </li>
              {/* a work */}
              {
                workingHistory.map((item: IExperienceBox, idx: number) => (
                  <li key={idx} className={idx === 0 ? 'active' : ''} data-aos="fade-down" data-aos-duration={(idx * 100) + 400} data-aos-delay="400" data-aos-easing="ease-out-cubic">
                    <ExperienceBox {...item} />
                  </li>
                ))
              }
            </ul>
          </Col>
          {/* Education History */}
          <Col md={6} className="mb-30">
            <ul className="timeline ms-15 ps-15">
              <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                <i className="bx bxs-graduation" aria-hidden="true"></i>
                <h2 className="timeline-title">Education History</h2>
              </li>
              {/* a work */}
              {
                educationHistory.map((item: IExperienceBox, idx: number) => (
                  <li key={idx} data-aos="fade-down" data-aos-duration={(idx * 100) + 400} data-aos-delay="400" data-aos-easing="ease-out-cubic">
                    <ExperienceBox {...item} />
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </div>
      {/* Skills Section */}
      <div className="skills-box pt-80 bg-light box-content-inner">
	  <div className="section-title">
          <h3>Languages & Frameworks</h3>
        </div>
					{
						skills.map((item: ISkill2, idx: number) => (
							<div className={`card border-radius-1x border-0 ${!isLight ? 'bg-light' : ''}`} key={idx} data-aos="fade-up" data-aos-duration={(idx * 100) + 400} data-aos-delay={(idx * 100) + 400} data-aos-easing="ease-out-cubic">
								<Skill {...item} />
							</div>
						))
					}
				</div>
    </section>
  )
}

Resume.displayName = "Resume";
export default Resume;