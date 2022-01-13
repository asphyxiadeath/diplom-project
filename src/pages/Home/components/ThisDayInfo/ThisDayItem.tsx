import React from 'react';
import { Item } from './ThisDayInfo';
import style from './ThisDayInfo.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/Images/icons/indicators/IndicatorSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
  items: Item;
}
  
  export const ThisDayItem = ({ items }: Props) => {
    const { icon_id, name,  value, degrees  } = items;
    return (
      <div className={style.item}>
        <div className={style.indicator}>
          <IndicatorSvgSelector id={icon_id} />
        </div>
        <div className={style.indicator__name}>{name}</div>
        <div className={style.indicator__value}>{value}</div>
        <div className={style.indicator__degrees}>{degrees}</div>
      </div>
    );
  };