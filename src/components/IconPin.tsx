import React from 'react';

const IconPin:React.FC<{className: string}> = (props):JSX.Element => {
  const {className} = props;

  return (
    <svg className={className} width="11" height="14" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"/>
    </svg>
  )
}

export default IconPin;