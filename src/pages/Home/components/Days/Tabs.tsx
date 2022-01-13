import React, { useState } from 'react';
import { Card } from './Card';
import { Days } from './Days';

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
    {
      value: 'На месяц',
    },
  ];

  
  
  return (
    <div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.cancel}>Отменить</div>
       </div>    
  )
}



