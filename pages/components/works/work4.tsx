import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Shuffle from "shufflejs";
import 'photoswipe/dist/photoswipe.css'
import { filterNav2, portoflio } from "../../../typescript/data/gallery";
import { IFilterNav, IPortoflio } from "../../../typescript/interfaces/gallery.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import WorkBox from "./workBox4";

const Works: React.FC<{ isLight: boolean }> = ({ isLight }) => {
  // init one ref to store the future isotope object
  const container: React.MutableRefObject<any> = React.useRef(null);
  const [filterKey, setFilterKey] = React.useState('all');
  const [shuffleInstance, setShuffleInstance] = React.useState<Shuffle>();
  React.useEffect(() => {
    if (container.current) {
      const instance = new Shuffle(container.current, {
        itemSelector: '.filtr-item',
        sizer: '.filters',
      });
      setShuffleInstance(instance)
    }
  }, [setShuffleInstance])
  // handling filter key change
  React.useEffect(() => {
    if (shuffleInstance) {
      shuffleInstance.filter(filterKey);
    }
  }, [filterKey, shuffleInstance])
  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  return (
    <section className="section pt-80">
      <Container>
        <SectionHeader className="style-2">
          <>Portfolio</>
        </SectionHeader>
        <div className="work-list" data-aos="fade" data-aos-delay="400" data-aos-duration="400" data-aos-easing="ease-out-cubic">
          <ul className="work-nav filters list-unstyled">
            {
              filterNav2.map((item: IFilterNav, idx: number) => (
                <li key={idx} className={`control ${filterKey === item?.key.toLocaleLowerCase() ? 'filtr-active' : ''}`} onClick={handleFilterKeyChange(item?.key)}>{item?.text}</li>
              ))
            }
          </ul>
          <Row className="filtr-container" ref={container}>
            {
              portoflio.map((item: IPortoflio, idx: number) => (
                <Col lg={4} sm={6} className="filtr-item" key={idx} data-groups={item?.groups}>
                  <WorkBox {...item} isLight={isLight} />
                </Col>
              ))
            }

          </Row>
        </div>
      </Container>
    </section>
  )
}

Works.displayName = "Works 3";
export default Works;