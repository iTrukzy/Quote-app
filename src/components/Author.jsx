import React from 'react'
import './Author.css'

const Author = ({autor}) => { // Prop del autor
    return (
        <>
            <p className="autor">{autor}</p>
        </>
    )
}
export default Author
