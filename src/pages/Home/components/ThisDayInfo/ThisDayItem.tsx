import React from 'react';
import { Item } from './ThisDayInfo';
import style from './ThisDayInfo.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/Images/icons/indicators/IndicatorSvgSelector';


interface Props {
    item: Item;
  }
  
  export const ThisDayItem = ({ item }: Props) => {
    const { icon_id, name, value } = item;
    return (
      <div className={style.item}>
        <div className={style.indicator}>
          <IndicatorSvgSelector id={icon_id} />
        </div>
        <div className={style.indicator__name}>{name}</div>
        <div className={style.indicator__value}>{value}</div>
      </div>
    );
  };