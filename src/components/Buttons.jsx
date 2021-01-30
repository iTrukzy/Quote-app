import React from 'react'
import './Buttons.css'

const Buttons = ({text, click, randomColor, randomStyle}) => { // props de los botones
    return (
        <>
            <button onClick={() => {
                click(); // ejecuta la funcion handleClick del componente QuoteBox
                randomColor(); // ejecuta la funcion color del componente QuoteBox
            }} className="btn" style={{backgroundColor: randomStyle}}>{text}</button>
        </>
    )
}
export default Buttons
