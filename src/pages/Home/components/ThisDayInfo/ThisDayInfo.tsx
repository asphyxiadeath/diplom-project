import React from 'react';
import style from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/Images/cloud.png'
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';


interface Props {weather: Weather;}

export interface Item {
    icon_id: string;
    name: string;
    value: any;
    degrees: Item;
  }
  

export const ThisDayInfo = ({ weather}: Props) => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура ощущается как',
          value:  weather.list[0], 
          degrees: "°",
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: weather.list[0],
          degrees: "мм.рт.ст"
        },
        {
          icon_id: 'precipitation',
          name: 'Влажность',
          value: weather.list[0],
          degrees: "%",
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: weather.list[0],
          degrees: "м/с"
        },
      ];
    
    return (
    <div className={style.this_day_info}>
        <div className={style.this_day_info_items}>
            {items.map((item: any) => (
                <ThisDayItem key={item.icon_id} items={item} />
        ))}
        </div>
        <img className={style.cloud_img} src={cloud} alt="облако" />
    </div>
    
    );  
    };