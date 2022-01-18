import React, { useState } from "react";

import { Card } from './Card';
import style from './Days.module.scss';
import { Tabs } from './Tabs';
import { Weather } from '../../../../store/types/types';

interface Props {weather: Weather; }



export interface Day {
  day: string;
  day_info: any;
  icon_id: string;
  temp_day: any;
  temp_now: any;
  info: string;

}

export interface Tabs{
 
}


export const Days = ({ weather}: Props) => {
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "17 янв",
      icon_id: 'sun',
      temp_day: Math.floor(weather.main.temp),
      temp_now: weather.main.feels_like,
      info: 'Ясно',
    },
    {
      day: "Вторник",
      day_info: '18 янв',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_now: '+15',
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      day_info: '19 янв',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_now: '+15',
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '20 янв',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_now: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '21 янв',
      icon_id: 'rain',
      temp_day: '+18',
      temp_now: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      day_info: '22 янв',
      icon_id: 'sun',
      temp_day: '+18',
      temp_now: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      day_info: '23 янв',
      icon_id: 'sun',
      temp_day: '+18',
      temp_now: '+15',
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


