import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteSection = () => {
  return (
    <div className='section quote'>
        <p className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} />
            Food is everything we are. it's an extension on nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma, it;s inswparable from thoose from the get-go.
        </p>
        <p className="qoute-auhtor">-Anthony Bourdain</p>
    </div>
  )
}

export default QuoteSection