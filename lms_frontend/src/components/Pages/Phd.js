import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

  const listStyle={
    'list-style':'none'
  }

function Phd() {

  return (
<>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.5K_ii6rsaQNHuMpNWcXIaQHaCs?pid=ImgDet&rs=1"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-4">
      <div className="card">
    <div className="col-4 offset-1">
                  <div className="card-header btn btn-success mt-2">INTERNATIONAL PHD PROGRAMMES</div>
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

              Degree/ HND Certificate/ Result
              <br/>
<br/>

              Degree Transcript
              <br/>
<br/>
              Proof of C1 proficiency in English 
              German level A1
          <br/>
<br/>
MSc/MA Certificate
          <br/>
<br/>
MSc/ MA Transcript
          <br/>
<br/>
Research Proposal (1500 words)
          <br/>
<br/>

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

export default Phd;
