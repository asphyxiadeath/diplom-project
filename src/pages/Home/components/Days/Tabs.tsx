import React, { useState } from 'react';
import { Card } from './Card';
import { Days } from './Days';
import { Link } from "react-router-dom"
import Snake from '../../../../shared/Header/snake'

import style from './Days.module.scss';




interface Props {
   
}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
  ]
    const links = [
      {
          
          href: "/game",
          value: String,
      },
      
    ]
  

  
  
  
    
  
  return (
    
    <div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.games}>
      {links.map((value: { href: string; }) => 
      <Link className="Games" to={value.href}>Игры</Link>)} </div>
      <div className={style.cancel}>Отменить
      
      </div>
       </div>    
  )
}



