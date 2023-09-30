import React, { useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { activeCard, checkActive, heros, matchedCards, openCard, userScore } from "../store/slice/card.slice";
import { shuffleArray } from '../utils/matrix';
import Card from './Card'

const Content = () => {
    const dispatch = useDispatch();

    const heroCards = useSelector(heros);
    const active = useSelector(activeCard);
    const score = useSelector(userScore);
    const matched = useSelector(matchedCards);
    const shuffledCards = useMemo(() => shuffleArray([...heroCards, ...heroCards]), [heroCards]);

    const handleClick = (index, id) => {
        if (active.find(item => item.index === index) || matched.find(item => item === id)) {
            return
        }

        dispatch(openCard({ index, id }));

        setTimeout(() => {
            dispatch(checkActive())
        }, 500);
    }

    return (
        <>
            <p style={{textAlign: "center"}}>Score: {score}</p>
            <div className="playground">
                {
                    shuffledCards.map((card, index) => (
                        <div key={`hero-card--${index}`} onClick={() => handleClick(index, card.id)}>
                            <Card index={index} hero={card} isActive={active.find(item => item.index === index)} isMatched={matched.find(item => item === card.id)} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Content