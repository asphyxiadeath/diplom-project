import React from 'react';
import style from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/Images/icons/global/GlobalSvgSelector';

interface Props {}

export const ThisDay = (props: Props) => {
    return (
    <div className={style.this_day}>
         <div className={style.top_block}>
            <div className={style.top_block_wrapper}>
                <div className={style.this_temp}>20°</div>
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