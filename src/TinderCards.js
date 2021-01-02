import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.scss'

export const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Nay",
            url: "https://image.vsco.co/1/5613ddcc4c9ee8781057/56a4f5ee6ac45797758b456c/480x640/86f834ee-e149-40ab-90da-38873f599421.jpg"
        },
        {
            name: "Wika Salim",
            url : "https://media.suara.com/pictures/970x544/2020/07/02/17675-wika-salim.jpg"
        },
        {
            name: "Ayana Moon",
            url : "https://gatra.cloud/foldershared/images/2020/roh/03-Mar/Ayana.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {

    }

    const outOfFrame = (name) => {

    }
    

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe" 
                        key={person.name}
                        preventSwipe={["up", "down"]} 
                        onSwipe={(dir) => swiped(dir, person.name)} 
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
