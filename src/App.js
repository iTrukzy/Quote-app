import React, { useState }from 'react'
import './App.css';


import QuoteBox from './components/QuoteBox.jsx'


const App = () => {
    const [isColor, setIsColor] = useState("#86b3c2") // Estado para modificar el BackGound del body
    const [isButtonHex, setIsButtonHex] = useState("#86b3c2") // Estado para modificar el BackGound de los botones

    const handleColor = () => { // Function que contiene el generador de color
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16) // Metodo para generar color random
      setIsColor(randomColor); // Funcion del estado que modifica el BackGound del body
      setIsButtonHex(randomColor); // Funcion del estado que modifica el BackGound de los botones
    }

    return (
      <div className="app" style={{backgroundColor: isColor, transition: "all .3s ease"}}>
        <QuoteBox color={handleColor} button={isButtonHex}/> 
        {/* Props del componente QuoteBox */}
      </div>
    );
}
export default App;
