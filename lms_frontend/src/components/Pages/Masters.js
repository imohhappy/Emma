import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

function Masters() {

  const listStyle={
    'list-style':'none'
  }

  return (
<>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://downthe18th.files.wordpress.com/2013/01/masters-2014.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-4">
      <div className="card">
    <div className="col-4 offset-1">
      <div className="card-header btn btn-success mt-2">INTERNATIONAL MASTERS PROGRAMMES</div>
            <br/>
            <h5>Admission requirements</h5>
            International Passport
<br/>
<br/>
              Curriculum Vitae (stating personal details)
              <br/>
<br/>

              High School Result (WAEC/ NECO/ KSCE)
              <br/>
<br/>

              Two academic reference letters
              <br/>
<br/>

              Degree Certificate/ Result
              <br/>
<br/>

              Degree Transcript
              <br/>
<br/>
              Proof of C1 proficiency in English 
              German level A1
              <hr/>
              <h5>Language requirements</h5>
              English – minimum test results (C1 level):

              TOEFL iBT score 100, <br/>IELTS 7.0 or equivalent test results
              German:
<br/>

              Basic knowledge of German: a minimum of 120 hours of classes attended (equivalent to the A1 level of the Goethe Institute)
              Please refer to our website for details.
<hr/>
              <h5>Application deadline</h5>
              For the winter semester, which starts on 1 October: 2 May to 15 June
              For the summer semester, which starts on 15 March: 15 November to 15 December
        </div>
        <Button className="mt-3"><Link to="/searchs" className="text-white">Apply</Link></Button>
        </div>
    </div>
    </>


  );
}

export default Masters;
