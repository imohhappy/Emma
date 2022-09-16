import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

function Homepage() {

  return (
<>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jcb.ca/media/original/5bfff02edabf4-Soeurs_de_la_Providence_02.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images1.showcase.com/i2/sTV7WYR-zZHrIWPpaG0S2jcIsJJd3yTcTWmvG9matcw/116/image.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.coopercarry.com/wp-content/uploads/2018/05/GWU-VSTC-Conservation-Facility-1Hero-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* 2 */}
        <Row xs={1} md={3} className="g-4 mt-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.careertoolkit.com/wp-content/uploads/2017/01/environmental-scientist-500.jpg" />
            <Card.Body>
              <Button variant="primary"><Link to="/bachelor" className="text-white">Bachelors</Link></Button>
              <Card.Text>
                Chech your Bachelors Courses Here
                and also apply to top schools for your degrees
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.eco.ca/wp-content/uploads/Env-Scientist.jpg" />
            <Card.Body>
              <Button variant="primary" ><Link to="/masters" className="text-white">Masters</Link></Button>
              <Card.Text>
                Chech your Masters Courses Here
                and also apply to top schools for your degrees
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://environmentalscience.cals.arizona.edu/sites/swes.cals.arizona.edu/files/Jones_labwork.png" />
            <Card.Body>
              <Button variant="primary"><Link to="/phd" className="text-white">PHD</Link></Button>
              <Card.Text>
                Chech your PHD Courses Here
                and also apply to top schools for your degrees
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

{/* 3 */}
        <div className="d-flex justify-content-around mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Ln6PZfv4WBw_bICehVKUTwHaE8?pid=ImgDet&rs=1" />
        <Card.Body>
          <Card.Text>
            Search for top research in Uk and Other Part Of the GLobe
          </Card.Text>
          <Button variant="primary"><Link to="/Research" className="text-white">Research</Link></Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.primetake.com/wp-content/uploads/2020/10/ResearchDevelopmentHero_1.jpg" />
        <Card.Body>
          <Card.Text>
            Some More info on update here
          </Card.Text>
          <Button variant="primary"><Link to="/faq" className="text-white">Faq</Link></Button>
        </Card.Body>
      </Card>
    </div>

    {/* 4 */}

        <Card className="bg-dark text-white mt-4">
      <Card.Img src="https://sites.highlands.edu/stem/wp-content/uploads/sites/86/2020/10/laboratory-microscope-for-chemistry-biology-test-s-9C7YQL4-scaled.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-dark bg-bold">SCHOOLS IN UK</Card.Title>
        <Card.Text className="text-danger bg-bold">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>

    {/* 5 */}
        <Row xs={1} md={3} className="g-4 mt-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://api.daad.de/api/image/tww/media/daad_de/im-ausland-studieren-forschen-lehren/stipendien-finanzierung/daad-versicherungen/istock-521535868_972x547.jpg.webp" />
            <Card.Body>
              <Button variant="primary"><Link to="/insurance" className="text-white">Insurance Abroad</Link></Button>
              <Card.Text>
                Get good and assured insurance over here in uk
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://api.daad.de/api/image/tww/media/daad_de/im-ausland-studieren-forschen-lehren/stipendien-finanzierung/istock-699895008_972x547.jpg.webp" />
            <Card.Body>
              <Button variant="primary"><a href="https://www.daad.de/de/studieren-und-forschen-in-deutschland/stipendien-finden/" className="text-white">Scholarships & Funding</a></Button>
              <Card.Text>
                Get good and assured Scholarships over here in uk
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://api.daad.de/api/image/tww/media/daad_de/im-ausland-studieren-forschen-lehren/praktika-im-ausland/istock-1076684646_972x547.jpg.webp" />
            <Card.Body>
              <Button variant="primary"><Link to="/intern" className="text-white">Intenship</Link></Button>
              <Card.Text>
                Get intenships here in uk from various institution
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>


  );
}

export default Homepage;
