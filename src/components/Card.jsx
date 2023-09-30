import React from 'react'

const Card = ({ hero, isActive, isMatched }) => {
    const { image } = hero;

    return (
        <div className={`card ${isActive || isMatched ? 'opened' : ''} ${isMatched ? 'matched' : ''}`}>
            <div className="front">
                ?
            </div>
            <div className="back">
                <img src={image} alt='' />
            </div>
        </div>
    )
}

export default React.memo(Card);
