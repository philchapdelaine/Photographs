import * as React from "react"

const Content = () => {
    const [active, setActive] = React.useState(0);

    return(
        <div className="content-container">
            <ul className="collection_nav">
                <li className="collection_nav_item">
                    {active == 0 ? "hello" : "001"}
                </li>
                <li 
                    className="collection_nav_item"
                    onMouseEnter={() => setActive(1)}
                    onMouseLeave={() => setActive(0)}
                >
                    {active == 1 ? "hello" : "002"}
                </li>
                <li className="collection_nav_item">003</li>
                <li className="collection_nav_item">004</li>
                <li className="collection_nav_item">005</li>
            </ul>
        </div>

    );
}

export default Content
