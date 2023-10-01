import React from 'react';

const Description:React.FC<{description: string}> = (props):JSX.Element => {
  const {description} = props;

  return (
    <div className="description">
      <p>{description}</p>
    </div>
  )
}

export default Description;