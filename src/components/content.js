import * as React from 'react'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import './content.css'
import sign from '../images/sign.jpg'
import boat from '../images/boat.jpg'


const pictures = [
    {
        inactive: "001",
        name: "Untitled 2:08pm",
        textColour: "white",
        image: sign
    }, 
    {
        inactive: "002",
        name: "Untitled",
        textColour: "white",
        image: boat
    }, 
    {
        inactive: "003",
        name: "This Might Be the Highlight of My Trip",
        textColour: "white",
        image: boat
    }, 
    {
        inactive: "004",
        name: "This Might Be the Highlight of My Trip",
        textColour: "white",
        image: boat
    }, 
    {
        inactive: "005",
        name: "This Might Be the Highlight of My Trip",
        textColour: "white",
        image: boat
    }
];



const Content = () => {
    const [active, setActive] = React.useState(0);
    let signGatsby = getImage(pictures[0].image);


    return(
        <div className="content-container">
            <ul className="collection_nav">
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
            <div className='fill-window'>
                <img 
                className="image" 
                src={pictures[active].image} 
                alt="image"
                />
            </div>
        </div>

    );
}

export default Content
