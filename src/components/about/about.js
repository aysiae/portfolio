import './about.scss';
import headshot from '../../assets/headshot.jpg';


function About() {
    return(
        <>
        <div id='container'>
            <div id='contact'>
                 <img src={headshot} />
                <span>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                    <p>Email</p>
                    <p>Phone</p>
                </span>
            </div>
            <div id='about'>
            <div id='blurb'>

                <span>
                    <p>Are you seeking a full-stack JavaScript developer? </p>
                    <p>Hi, I'm Aysia (pronounced: Asia). I'm a 23 year old web developer with proficiency in full stack JavaScript development. I love creating web applications. </p>
                </span>
                
            </div>
            <div id='skills'>
                <span>
                    <p>Languages:</p>
                    <p>JavaScript, HTML, CSS, Python, Java</p>
                </span>
                <span>
                    <p>Frameworks & Libraries:</p>
                    <p>NodeJS, ReactJS, Redux, React Native, jQuery, Express, PostgreSQL, MongoDB</p>
                </span>

                <span>
                    <p>Tools:</p>
                    <p>Git, GitHub, VS Code, AWS, Firebase, SCSS</p>
                </span>

            </div>
            <div id='education'>
                <p>Education:</p>
                <p>Code Fellows / Seattle, WA / Aug 2020 - Feb 2021
                    <br /> Certification in Advanced Software Development with JavaScript
                </p>
                <p>University of Washington / Seattle, WA / Sept 2015 - June 2020
                    <br /> B.A. of Communications, minor in Informatics
                </p>
            </div>

            </div>
        </div>
        </>
    )
}

export default About;