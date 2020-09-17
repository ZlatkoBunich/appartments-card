import React from 'react';

import './Card.scss';
import CardItem from './CardItem';
import EstimateIcon from '../Icons/EstimateIcon';

const Card = ({ info, estimate: estimateFunc }) => {
  const estimateClassName = 'card-info__estimate' + (info.like ? ' card-info__estimate_active' : '');

  return (
    <div className="card">
      <div className="card-info">
        <h3 className="card-info__title">{info.attributes.title}</h3>
        <CardItem title="Город">{info.attributes.address.city}</CardItem>
        <CardItem title="Улица">{info.attributes.address.street}</CardItem>
        <CardItem title="Комнат">{info.attributes.rooms}</CardItem>
        <CardItem title="Площадь">{info.attributes.area} {info.attributes.unit}</CardItem>
        <EstimateIcon className={estimateClassName} onClick={estimateFunc}/>
      </div>
      <div className="card-pic"/>
    </div>
  )
}

export default Card;

