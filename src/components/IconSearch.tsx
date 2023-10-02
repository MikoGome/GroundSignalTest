import React from 'react';

const IconSearch: React.FC<{className: string}> = (props): JSX.Element => {
  const {className} = props;
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"/><path d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"/></g></svg>
  )
}

export default IconSearch;