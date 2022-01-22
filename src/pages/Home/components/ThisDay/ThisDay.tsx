import React from 'react';
import style from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/Images/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import Clock from 'react-live-clock';


interface Props {
  weather: Weather;
}





export const ThisDay = ({ weather }: Props) => {
 
 

 
    return (
    <div className={style.this_day}>
         <div className={style.top_block}>
            <div className={style.top_block_wrapper}>
                <div className={style.this_temp}>{Math.floor(weather.daily[0].temp.day)}°</div>
                <div className={style.this_day_name}>Сегодня</div>
            </div>
            <GlobalSvgSelector id="sun" />
            </div>
         <div className={style.bottom_block}>
            <div className={style.this_time}> Время: 
            <Clock format="HH:mm:ss" interval={1000} ticking={true}  /></div>
      </div>
    </div>
    );   
    };

  
