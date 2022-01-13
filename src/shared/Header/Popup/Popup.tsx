
import React, { useState,useCallback } from "react";
import { render } from "react-dom";
import Select from 'react-select';
import { GlobalSvgSelector } from '../../../assets/Images/icons/global/GlobalSvgSelector';
import { Item } from '../../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../../pages/Home/components/ThisDayInfo/ThisDayItem';
import style from './Popup.module.scss';
import trees from './img/trees.jpg'




interface Props {
  
}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  
  ];
 
  

  return (
    <>
    
    <div className={style.background}>
    <img className={style.background_img} src={trees} alt="forest" />
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day_temp}>20°</div>
          <div className={style.day_name}>Среда</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day_time}>
            Время: <span>21:54</span>
          </div>
          <div className={style.day_city}>
            Город: <span>Минск</span>
          </div>
        </div>
        <div className={style.this_day_info_items}>
          {items.map((item: any) => (
            <ThisDayItem key={item.icon_id} items={item} />
          ))}
        </div>
        
      </div>
      </div> 
       </>
        );
      }

    
      
  


        
      
