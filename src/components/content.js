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
        name: "'Citypop Music Video'",
        textColour: "white",
        image: sign
    }, 
    {
        inactive: "002",
        name: "'Evening at Mel's'",
        textColour: "white",
        image: mels
    }, 
    {
        inactive: "003",
        name: "'Sleeping'",
        textColour: "white",
        image: ryokan
    }, 
    {
        inactive: "004",
        name: "Fishing Boat?",
        textColour: "white",
        image: boat
    }, 
    {
        inactive: "005",
        name: "untitled 3",
        textColour: "white",
        image: montreal_shop
    },
    {
        inactive: "006",
        name: "untitled 6",
        textColour: "white",
        image: lake
    }
];



const Content = () => {
    const [active, setActive] = React.useState(0);
    let signGatsby = getImage(pictures[0].image);


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
