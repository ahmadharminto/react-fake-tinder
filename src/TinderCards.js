import axios from './axios';
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.scss'

export const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/cards');
            setPeople(request.data)
        }

        fetchData()
    }, [])

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
