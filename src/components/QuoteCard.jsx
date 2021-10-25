import React from 'react';

function QuoteCard({ quote }) {
  return (
    quote && (
      <div className='QuoteCard'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>"{quote.quote}"</li>
          <li> From : {quote.character}
          </li>
        </ul>
      </div>
    )
  );
}

export default QuoteCard;