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
          value:  Math.floor(weather.daily[0].feels_like.day), 
          degrees: "°",
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: weather.daily[0].pressure,
          degrees: "мм.рт.ст"
        },
        {
          icon_id: 'precipitation',
          name: 'Влажность',
          value: weather.daily[0].humidity,
          degrees: "%",
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: Math.floor(weather.daily[0].wind_speed),
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