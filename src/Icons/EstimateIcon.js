import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default ({ className, onClick: estimate }) => {
  return (
    <FaThumbsUp className={className} onClick={estimate}/>
  )
}