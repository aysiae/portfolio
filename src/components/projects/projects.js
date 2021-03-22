import './projects.scss';

// photos
import Rescuties from '../../assets/rescuties-home.png'
import Portfolio from '../../assets/portfolio-header.png'
import ToDo from '../../assets/todo.png';
import Blackjack from '../../assets/blackjack.png';
import Writrs from '../../assets/writrs-char.png'
const placeholder = 'https://via.placeholder.com/150';



function Projects() {
    const projects = [
       // {title: 'Writrs', repo: 'https://github.com/aysiae/writing-site', img: Writrs, desc:'A tool for writers made by writers. Still a work in progress, however authentication via Firebase is completed as well as noSQL database read/write for character information.', tools: 'JavaScript, SCSS, ReactJS, Redux, Firebase', site: 'Coming Soon'},
        {title: 'Task Manager', repo: 'https://github.com/aysiae/todo', img: ToDo , desc: 'A task manager that allows a suser to add a new task with a difficulty, and assign it to a person. The tasks can be toggled as pending completion or completed.', tools: 'JavaScript, ReactJS, BootstrapJS, SCSS', site: 'https://aysiabrown-401d39-advanced-javascript.github.io/todo/'},
        {title: 'Blackjack API', repo:'https://github.com/aysiae/blackjack', img: Blackjack, desc: 'A fully functional REST API for Blackjack that can be utilized through a front end. The API accounts for player turns, dealer turns, bets and distributes winnings before saving user data to the database.', tools: 'JavaScript, MongoDB, Express, Jest', site: 'https://latte-blackjack.herokuapp.com/'},
        {title: 'Rescuties', repo:'https://github.com/aysiae/rescuties', img: Rescuties, desc:'Bridging the information gap between prospective pet owners and adoptable shelter pets. Authentication is used to manage protected vs public routes, and allows users to save their favorite pets to their accounts.', tools: 'JavaScript, ReactJS, Redux, Materials-UI, ReactStrap, Firebase', site: 'https://rescuties-401d39.web.app/page'},
        // {title: 'Portfolio (this!)', repo:'https://github.com/aysiae/portfolio', img: Portfolio, desc: 'A web developer portfolio site.', tools:'JavaScript, SCSS, ReactJS', site: 'https://aysiabrown.herokuapp.com/'}
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
                        <a href={project.site}>{project.site == 'Coming Soon' ? <p>Coming Soon</p> : <p>Deployed App</p>}</a>
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