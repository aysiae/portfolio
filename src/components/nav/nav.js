import { useState } from "react";
import './nav.scss'

function Nav() {
    const [nav, setNav] = useState([
        {title:'about', route:'#about'},
        {title:'projects', route:'#projects'},
        {title: 'contact', route: '#contact'}
    ])

    return(
        <>
            <span id='nav'>
                {nav.map(item => {
                    return(<p> ↦ {item.title}</p>)
                })}
            </span>
        </>
    )
}

export default Nav;