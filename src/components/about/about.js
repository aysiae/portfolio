import './about.scss';
import headshot from '../../assets/headshot.jpg';
import { useState } from 'react';


function About() {
    const [contact, setContact] = useState([
        {name: 'LinkedIn', value: 'https://www.linkedin.com/in/aysiaelise/', img:"https://img.icons8.com/nolan/64/linkedin.png"},
        {name: 'GitHub', value: 'https://github.com/aysiae', img: "https://img.icons8.com/nolan/64/github.png"},
        {name: 'aysiaebrown@gmail.com', value: 'mailto:aysiaebrown@gmail.com', img:'https://img.icons8.com/nolan/64/email.png'},
        {name: '425.999.0149', value: 'tel:4259990149', img: 'https://img.icons8.com/nolan/64/phone.png'}
    ])

    const imgs = ['https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 'https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80', 'https://images.unsplash.com/photo-1531707640331-138af9bef850?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80']


    return(
        <>
        <div id='container'>
            <div id='contact'>
                 <img src={headshot} />
                    {contact.map(item => (
                        <span>

                        <a href={item.value}><img src={item.img}/></a>
                        <p>{item.name}</p>
                        </span>
                    ))}
            </div>
            <div id='about'>
                <div id='blurb'>

                    <span>
                        <h4>Are you seeking a full-stack JavaScript developer? </h4>
                        <p>Hi, I'm Aysia (pronounced: Asia). I'm a 23 year old web developer with proficiency in full stack JavaScript development. I love creating web applications because web development is the perfect union between my two passions of creativity and critical problem solving. As someone with an insatiable desire to learn, I am seeking to join a team of individuals that values and fosters a growth mindset. Technology is as ever evolving as the human experience is.  </p>
                    </span>
                    
                </div>
                <div id='skills'>
                    <span>
                        <p>➥ Languages:</p>
                        <p>JavaScript, HTML, CSS, Python, Java</p>
                    </span>
                    <span>
                        <p>➥ Frameworks & Libraries:</p>
                        <p>NodeJS, ReactJS, Redux, React Native, jQuery, Express, PostgreSQL, MongoDB, Svelte</p>
                    </span>

                    <span>
                        <p>➥ Tools:</p>
                        <p>Git, GitHub, VS Code, AWS (Elastic Beanstalk, S3 Buckets, Lambda Functions), Firebase (Authentication, Realtime Database, Cloudstore Database), SCSS</p>
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
            <div id='decor'>
                {imgs.map(img => (
                    <img src={img}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default About;