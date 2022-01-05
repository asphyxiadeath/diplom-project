import React, { useState } from "react";

import style from './Days.module.scss';
import { GlobalSvgSelector } from '../../../../assets/Images/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import { Item } from '../ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../ThisDayInfo/ThisDayItem';
import {Popup} from '../../../../shared/Header/Popup/Popup'
import { Link } from "react-router-dom"
import news from '../../../../assets/Images/news.png'
import { Tooltip } from '@varld/popover';
import { Value } from "sass";



interface Props {
    day: Day;
    
  }


  /**const links = [
    {
        textId: "card.links.popup",
        href: "/popup"
        
    },
    
];**/

 export const Card = ({ day }: Props) => {
  const links = [
    {
        textId: "card.links.popup",
        href: "/popup"
        
    },
  ]
      return (
      <div className={style.card} >
        <div className={style.contaiter_header}>
          <div className={style.day}>{day.day} </div>
              <div className={style.news}>
              {links.map((value:{textId:string,href:string}) => (
                <Link className="Popup" to={value.href}>
                  <Tooltip  content="Больше информации"  >
                    <img src={news} alt="новости" />
                    </Tooltip>
                 </Link>
                 
                ))}
                </div>
                </div>
        <div className={style.day_info}>{day.day_info}</div>
        <div className={style.img}>
          <GlobalSvgSelector id={day.icon_id} />
        </div>
        <div className={style.temp_day}>{day.temp_day}</div>
        <div className={style.temp_night}>{day.temp_day}</div>
        <div className={style.info}>{day.info}</div>
        <div className={style.blur}></div>
        </div>
      
        
      )
    }
  

    
    
        

  
  
          

  