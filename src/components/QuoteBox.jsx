import React, { useState, useEffect } from 'react'
import './QuoteBox.css'
import Data from '../Jsons/quote.json'

import Title from './Title.jsx'
import Author from './Author.jsx'
import Buttons from './Buttons.jsx'
import Link from './Link.jsx'

import { FaTwitter } from 'react-icons/fa'

const QuoteBox = ({color, button}) => { // color = background del body, button = background de los botones
  const [isQuote, setIsQuote] = useState('') // Estado que modifica las citas
  const [isAuthor, setIsAuthor] = useState('') // Estado que modifica los autores


  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => { // Funcion que toma la Data JSON 
    let dataQuotes = Data.quotes; // Variable que contiene las citas
    let randomNumber = Math.floor(Math.random() * dataQuotes.length) // Metodo para generar aleatoria mente las citas

    let randomQuote = dataQuotes[randomNumber] // Variable que contiene las citas y como parametro el generador
    setIsQuote(randomQuote.quote) // Funcion del estado que modifica las citas
    setIsAuthor(randomQuote.author) // Funcion del estado que modifica los autores
  }

  const handleClick = () => { // Funcion que ejecuta el GetQuotes
    getQuote();
  }


    return (
      <div className="QuoteBox">
          <Title title={isQuote}/> 
          {/* Componente del titulo */}
          <Author autor={"--  " + isAuthor}/>
          {/* Componente del autor */}
          <div className="buttons">
            {/* Componente de los botones */}
            <Link textCite={isQuote} textAutor={isAuthor} randomStyle={button} text={<FaTwitter />}/>
            <Buttons click={handleClick} randomColor={color} randomStyle={button} text="Next Quote"/>
          </div>
      </div>
    )
}
export default QuoteBox