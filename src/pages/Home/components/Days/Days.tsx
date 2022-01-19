import React, { useState } from "react";

import { Card } from './Card';
import style from './Days.module.scss';
import { Tabs } from './Tabs';
import { Weather } from '../../../../store/types/types';
import Clock from 'react-live-clock';
import { Value } from "sass";
interface Props {weather: Weather; }



export interface Day {
  day: string;
  
  icon_id: string;
  temp_day: any;
  temp_night: any;
  info: string;

}

export interface Tabs{
 
}


export const Days = ({ weather}: Props) => {
  
  
  const days: Day[] = [
    {
      day: "Пн",
      icon_id: 'sun',
      temp_day: Math.floor(weather.daily[0].temp.day),
      temp_night: Math.floor(weather.daily[0].temp.night),
      info: 'Ясно',
    },
    {
      day: "Вт",
      
      icon_id: 'small_rain_sun',
      temp_day: Math.floor(weather.daily[1].temp.day),
      temp_night: Math.floor(weather.daily[1].temp.night),
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      
      icon_id: 'small_rain',
      temp_day: Math.floor(weather.daily[2].temp.day),
      temp_night: Math.floor(weather.daily[2].temp.night),
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      
      icon_id: 'mainly_cloudy',
      temp_day: Math.floor(weather.daily[3].temp.day),
      temp_night: Math.floor(weather.daily[3].temp.night),
      info: 'Облачно',
    },
    {
      day: 'Пт',
      
      icon_id: 'rain',
      temp_day:  Math.floor(weather.daily[4].temp.day),
      temp_night: Math.floor(weather.daily[4].temp.night),
      info: 'Облачно',
    },
    {
      day: 'Сб',
      
      icon_id: 'sun',
      temp_day: Math.floor(weather.daily[5].temp.day),
      temp_night:  Math.floor(weather.daily[5].temp.night),
      info: 'Облачно',
    },
    {
      day: 'Вс',
      
      icon_id: 'sun',
      temp_day: Math.floor(weather.daily[6].temp.day),
      temp_night: Math.floor(weather.daily[6].temp.night),
      info: 'Облачно',
    },
  ];


  

  return (
    <>
      <Tabs  />
      <div className={style.days} >
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>

    </>
  )
};


