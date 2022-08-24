import * as React from 'react'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import './content.css'
import sign from '../images/sign.jpg'
import boat from '../images/boat.jpg'
import ryokan from '../images/ryokan.jpg'
import mels from '../images/mels_diner.jpg'
import montreal_shop from '../images/montreal_shop.jpg'
import lake from '../images/lake.jpg'
import bridge from '../images/bridge.jpg'
import beach from '../images/beach.jpg'

const pictures = [
    {
        inactive: "001",
        name: "'Going Going Home'",
        textColour: "white",
        image: sign,
        location: "Innoshima, Japan",
        time: "2:38pm",
        lat: "N: 34.3218",
        lon: "E: 133.1650"

    }, 
    {
        inactive: "002",
        name: "'Evening at Mel's'",
        textColour: "white",
        image: mels,
        location: "Osaka, Japan",
        time: "10:26pm",
        lat: "N: 34.6937",
        lon: "E: 135.5023"
    }, 
    {
        inactive: "003",
        name: "'Sleeping on Futons'",
        textColour: "white",
        image: ryokan,
        location: "Tokyo, Japan",
        time: "8:56am",
        lat: "N: 35.6762",
        lon: "E: 139.6503"
    }, 
    {
        inactive: "004",
        name: "'Ghibli Movie'",
        textColour: "white",
        image: boat,
        location: "Innoshima, Japan",
        time: "2:43pm",
        lat: "N: 34.3218",
        lon: "E: 133.1650"
    }, 
    {
        inactive: "005",
        name: "'Late Night Eats'",
        textColour: "white",
        image: montreal_shop,
        location: "Montreal, Canada",
        time: "10:32pm",
        lat: "N: 45.5019",
        lon: "E: 73.5674"
    },
    {
        inactive: "006",
        name: "'Nothing Out Here'",
        textColour: "white",
        image: lake,
        location: "Nelson, Canada",
        time: "3:05pm",
        lat: "N: 49.4928",
        lon: "W: 117.2948"
    },
    {
        inactive: "007",
        name: "'Something About A Bridge'",
        textColour: "white",
        image: bridge,
        location: "Imabari, Japan",
        time: "11:14pm",
        lat: "N: 34.0662",
        lon: "E: 132.9978"
    },
    {
        inactive: "008",
        name: "'H Jungle With T'",
        textColour: "white",
        image: beach,
        location: "Oshima, Japan",
        time: "3:37pm",
        lat: "N: 41.5075",
        lon: "E: 139.3542"
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
            <div className='name'></div>
            <div className='about' style={{cursor:'pointer'}}>
                about
            </div>
            <div className='description-container'>
                <div>{pictures[active].location}</div>
                <div>{pictures[active].time}</div>
                <div>{pictures[active].lat}</div>
                <div>{pictures[active].lon}</div>
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
