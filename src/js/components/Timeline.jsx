import React from 'react'

const Timeline = () => {
    return (
        <ul className="timeline">
            <li className="container left">
                <div className="content">
                    <h2>2023</h2>
                    <p>Assembled a custom desktop PC from scratch, performing tasks such as wiring, applying thermal paste to the CPU, connecting components to the motherboard.
                        Performed thorough research to guarantee compatibility among all parts. The resulting PC is not only fully operational but also maintains optimal temperatures.
                    </p>
                </div>
            </li>
            <li className="container right">
                <div className="content">
                    <h2>2022</h2>
                    <p>Began working for 4Geeks Academy as a Fullstack web developer teaching assistant</p>
                </div>
            </li>
            <li className="container left">
                <div className="content">
                    <h2>2022</h2>
                    <p>Graduated from 4Geeks Academy to become a Fullstack web developer</p>
                </div>
            </li>
            <li className="container right">
                <div className="content">
                    <h2>2019</h2>
                    <p>Graduated from Florida International University with ranking of Cum Laude and and B.S. in Computer Engineering</p>
                </div>
            </li>
        </ul>
    )
}

export default Timeline