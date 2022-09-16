import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from "../ContactUs";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

function About() {

  return (
<>
    <Card className="bg-dark text-white mt-4">
      <Card.Img src="https://www.jcb.ca/media/original/5bfff02edabf4-Soeurs_de_la_Providence_02.JPG" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-life bg-bold"><h1></h1></Card.Title>
        <Card.Text className="text-danger bg-bold">
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
{/* 2 */}
<div className="container mt-4">
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Our Mission</Card.Title>
        <Card.Text>
        To match students into international education institutions by applying professional experience, and enhancing their 
        careers, whilst ensuring quality, assurance and excellence towards the attainment of their dream
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </div>


{/* 2 */}
        <Row xs={1} md={3} className="g-4 mt-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/gxSHYAfwYMM/maxresdefault.jpg" />
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.df3a630cb9c19ffae48cc26565e25080?rik=IStUdkM19jtD%2fw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f03%2fengineering-pictures-18.jpg&ehk=SZoIOZuF3oUU2vlCOjlSjgu033GAmVToBMR23KubMBE%3d&risl=1&pid=ImgRaw&r=0" />
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/Gep5DJoohPk/maxresdefault.jpg" />
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

{/* 3 */}
        <div className="d-flex justify-content-around mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.12d72e7ff4bb8407ed3d0fd2461e2c36?rik=gZegyig1lWxuRg&riu=http%3a%2f%2fwww.mechanicalindustries.org%2fwp-content%2fuploads%2f2020%2f03%2fCOVID19info.jpg&ehk=legl4nq%2bjmTerwzwAjKCBS2cetRiSoI%2fQ2pfWAqvoXE%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.91a594454f97d4232b9aa535a2b24ffb?rik=P7nJLJwJZJfgFA&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2018%2f04%2fPlane-Pictures.jpg&ehk=2%2brbMa2EaIGuBCJrubfuMXe9XbMQE1qkWF220xlTtwo%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    {/* 4 */}

        <Card className="bg-dark text-white mt-4">
      <Card.Img src="https://th.bing.com/th/id/R.352667207b60f8867c5ebc1020d15569?rik=I22bWcJMYLm4lQ&pid=ImgRaw&r=0" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-life bg-bold"><h1></h1></Card.Title>
        <Card.Text className="text-danger bg-bold">
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
              <Button variant="primary">Insurance Abroad</Button>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.d32ecc5d6620df8592221d87cb69dd5e?rik=QfzVhWCW1Lr4AQ&riu=http%3a%2f%2fwww.cud.ac.ae%2fsites%2fdefault%2ffiles%2fgeneral%2f2017%2fpromotion%2fadmissions-undergraduate--1920x1080.jpg&ehk=XCQxZl83fPR7jjrzz1gUfFvYGv8bfPNS126mzn6BlCs%3d&risl=&pid=ImgRaw&r=0" />
            <Card.Body>
              <Link to="/my-courses"><Button variant="primary">Admissions</Button></Link>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.ef576dabcf66acbf22db8ccbe3b9dabf?rik=wHceQ80PEBY29Q&riu=http%3a%2f%2feskipaper.com%2fimages%2feuro-2.jpg&ehk=ABVP4%2bWxa65R6HjLw0PbXNbXAY8agZOm5FVYHmq%2b%2fQc%3d&risl=&pid=ImgRaw&r=0" />
            <Card.Body>
              <Button variant="primary">Cost of Schooling</Button>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {/* 3 */}
        <div className="d-flex justify-content-around mt-4">
        <Card.Body>
          <Card.Text>
             <ContactUs />
          </Card.Text>
        </Card.Body>
      
      </div>
    </>


  );
}

export default About;
