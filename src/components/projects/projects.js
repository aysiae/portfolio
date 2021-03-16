import './projects.scss';

// photos
import Rescuties from '../../assets/rescuties-home.png'
import Portfolio from '../../assets/portfolio-header.png'
import Writrs from '../../assets/writrs-char.png'

function Projects() {
    const projects = [
        {title: 'Writrs.', repo: 'https://github.com/aysiae/writing-site', img: Writrs, desc:'', tools: '', site: ''},
        {title: 'E-Commerce Store', repo: 'https://github.com/aysiae/storefront', img: '', desc: '', tools: '', site: ''},
        {title: 'Task Manager', repo:'https://github.com/aysiae/todo', img: '', desc: '', tools: '', site: ''},
        {title: 'Rescuties', repo:'https://github.com/aysiae/rescuties', img: Rescuties, desc:'', site: 'https://rescuties-401d39.web.app/page/pets'},
        {title: 'Portfolio (this!)', repo:'https://github.com/aysiae/portfolio', img: Portfolio, desc: '', tools:'', site: ''}
    ]

    return(
        <>
        <div id='projects'>
            <div className='card-container'>
                {projects.map(project => (
                    <div className='card'>
                        <img src={project.img}/>
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects;