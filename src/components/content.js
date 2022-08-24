import * as React from 'react'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import './content.css'
import sign from '../images/sign.jpg'
import boat from '../images/boat.jpg'
import ryokan from '../images/ryokan.jpg'
import mels from '../images/mels_diner.jpg'
import montreal_shop from '../images/montreal_shop.jpg'
import lake from '../images/lake.jpg'


const pictures = [
    {
        inactive: "001",
        name: "'Going Going Home'",
        textColour: "white",
        image: sign,
        location: "Onomichi, Japan",
        time: "2:08pm"
    }, 
    {
        inactive: "002",
        name: "'Evening at Mel's'",
        textColour: "white",
        image: mels,
        location: "Osaka, Japan",
        time: "10:26pm"
    }, 
    {
        inactive: "003",
        name: "'Sleeping on Futons'",
        textColour: "white",
        image: ryokan,
        location: "Tokyo, Japan",
        time: "8:56am"
    }, 
    {
        inactive: "004",
        name: "'Ghibli Movie'",
        textColour: "white",
        image: boat,
        location: "Onomichi, Japan",
        time: "2:43pm"
    }, 
    {
        inactive: "005",
        name: "'Late Night Eats'",
        textColour: "white",
        image: montreal_shop,
        location: "Montreal, Canada",
        time: "10:32pm"
    },
    {
        inactive: "006",
        name: "'Nothing Out Here'",
        textColour: "white",
        image: lake,
        location: "Nelson, Canada",
        time: "3:05pm"
    }
];



const Content = () => {
    const [active, setActive] = React.useState(2);

    return(
        <div className="content-container">
            <ul className="collection_nav" style={{cursor:'pointer'}}>
                {pictures.map((picture, i) => {
                    return(
                    <li 
                        className="collection_nav_item"
                        key={i}
                        onMouseEnter={() => setActive(i)}
                    >
                        <span>{active == i ? picture.name : picture.inactive}</span>
                    </li>
                    );
                })
                }
            </ul>
            <div className='about' style={{cursor:'pointer'}}>
                about
            </div>
            <div className='description-container'>
                <div>{pictures[active].location}</div>
                <div>{pictures[active].time}</div>
                <div>N: 42.328369</div>
                <div>W: -83.074760</div>
            </div>
            <div>
                <img 
                className="fill-window" 
                src={pictures[active].image} 
                alt="image"
                />
            </div>
        </div>

    );
}

export default Content
