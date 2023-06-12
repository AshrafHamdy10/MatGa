import Me from "./images/My-img.jpg";
import Logo from "./images/Mat-logo.png";
import "./about.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={Me} alt="Ashraf Hamdy" className="mt-4" />
            <img src={Logo} alt="Logo" className="about-logo" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="det text-muted">
              I'm Ashraf Hamdy, front end developer and I have graduated from
              the faculty of computers and information from Mansoura University.
              I'm the designer and developer of this website, I hope you like
              it.
            </h4>
            <h4 className="det text-muted">
              Basic E-commerce website, technologies and libraries used: <br />
              <h5 className="text-info tech float-start">
                . React.js
                <br />
                . React Router Dom <br />
                . Bootstrap 5<br />
                . React Dom
                <br />
              </h5>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
