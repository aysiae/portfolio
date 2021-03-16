import './about.scss';
import headshot from '../../assets/headshot.jpg';


function About() {
    return(
        <>
        <div id='about'>
            <div id='blurb'>
                <img src={headshot} />
                <p>Hi, my name is Aysia. I'm a full-stack JavaScript developer.</p>

            </div>
            <div id='skills'>
                <p>Skills:</p>

            </div>
            <div id='experience'>
                <p>Experience:</p>

            </div>
        </div>
        </>
    )
}

export default About;