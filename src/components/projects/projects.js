import './projects.scss';

// photos
import Rescuties from '../../assets/rescuties-home.png'
import Portfolio from '../../assets/portfolio-header.png'
import Writrs from '../../assets/writrs-char.png'
const placeholder = 'https://images.unsplash.com/photo-1587835053626-f88000149fbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';


function Projects() {
    const projects = [
        {title: 'Writrs', repo: 'https://github.com/aysiae/writing-site', img: Writrs, desc:'A tool for writers made by writers.', tools: 'JavaScript, SCSS, ReactJS, Redux, Firebase', site: ''},
       // {title: 'E-Commerce Store', repo: 'https://github.com/aysiae/storefront', img: placeholder , desc: 'An example of an E-commerice storefront, grabbing inventory from an API.', tools: 'JavaScript, ReactJS, Redux, Materials-UI, RESTful API', site: ''},
        // {title: 'Task Manager', repo:'https://github.com/aysiae/todo', img: placeholder, desc: 'A task manager to assign difficulty and tasks to specific persons.', tools: 'JavaScript, ReactJS, SCSS', site: ''},
        {title: 'Rescuties', repo:'https://github.com/aysiae/rescuties', img: Rescuties, desc:'Bridging the information gap between prospective pet owners and adoptable shelter pets', tools: 'JavaScript, ReactJS, Redux, Materials-UI, ReactStrap, Firebase', site: 'https://rescuties-401d39.web.app/page/pets'},
        {title: 'Portfolio (this!)', repo:'https://github.com/aysiae/portfolio', img: Portfolio, desc: 'A web developer portfolio site.', tools:'JavaScript, SCSS, ReactJS', site: ''}
    ]

    return(
        <>
        <div id='projects'>
            <h2>Projects</h2>
            <div className='card-container'>
                {projects.map(project => (
                    <div className='card'>
                        <img src={project.img}/>
                        <h3>{project.title}</h3>
                        <a href={project.repo}>GitHub Repo</a>
                        <p>{project.desc}</p>
                        <p>Technologies Used: <br/> {project.tools}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects;