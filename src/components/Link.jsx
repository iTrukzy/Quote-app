import React from 'react'
import './Buttons.css'

const Link = ({text, randomStyle, textCite, textAutor}) => { // props del Link
    return (
        <>
            <a 
            className="btn"
            href={`https://twitter.com/intent/tweet?text=${textCite}-${textAutor}`}
            target="_blank"
            rel='noopener noreferrer'
            style={{backgroundColor: randomStyle}}
            >
            {text}
            </a>
        </>
    )
}
export default Link