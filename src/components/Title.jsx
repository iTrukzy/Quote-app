import React from 'react'
import './Title.css'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = ({title}) => { // prop del ttulo
    return (
        <>
            <h3 className="title">
                <span>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </span> {title}
            </h3>
        </>
    )
}
export default Title