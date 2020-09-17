import React from 'react';

export default ({ title, children }) => {
  return (
    <>
      <p className="card-info__item">
        {title}: <span className="card-info__item-info">{children}</span>
      </p>
    </>
  )
}
