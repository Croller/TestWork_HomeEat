import React, { memo } from 'react';
import {
  Item,
  Img,
  Name,
  Category,
  Show,
} from './styled';

export const Card = memo(({
  source = null,
  card = false,
  onClick = () => {},
  className,
}) => source && (
  <Item className={className} onClick={() => onClick(source.idDrink)}>
    <Img src={source.strDrinkThumb} />
    <Name>{source.strDrink}</Name>
    <Category>{source.strCategory}</Category>
    {card ? (
      <Category>{source.strInstructions}</Category>
    ) : (
      <Show to={`card/${source.idDrink}`}>Посмотреть</Show>
    )}
  </Item>
));

export default Card;
