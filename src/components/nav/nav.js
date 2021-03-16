import { useState } from "react";
import './nav.scss'

function Nav() {
    const [nav, setNav] = useState([
        {title:'about', route:'#about'},
        {title:'projects', route:'#projects'},
    ])

    return(
        <>
            <span id='nav'>
                {nav.map(item => {
                    return(<p><a href={item.route}>↦ {item.title}</a></p>)
                })}
            </span>
        </>
    )
}

export default Nav;