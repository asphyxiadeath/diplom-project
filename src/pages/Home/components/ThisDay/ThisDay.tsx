import React from 'react';
import style from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/Images/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
    return (
    <div className={style.this_day}>
         <div className={style.top_block}>
            <div className={style.top_block_wrapper}>
                <div className={style.this_temp}>{Math.floor(weather.main.temp)}°</div>
                <div className={style.this_day_name}>Сегодня</div>
            </div>
            <GlobalSvgSelector id="sun" />
            </div>
         <div className={style.bottom_block}>
            <div className={style.this_time}>
                 Время: <span>21:54</span>
            </div>
            <div className={style.this_city}>
                Город: <span>Минск</span>
        </div>
      </div>
    </div>
    );
        
    };