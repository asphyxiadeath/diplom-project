import { Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React from 'react';
import { Link } from "react-router-dom"
import { WeatherService } from '../../../../services/WeatherService';
import style from './Days.module.scss';






export  default function PaginationControlled() {
  const [page, setPage] = React.useState();
  const handleChange = (event: React.ChangeEvent<unknown>, value: any) => {
    setPage(value);
  };  


{/**export const Tabs = (props: Props) => {
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
      
    ]**/
  
    
  
  
  
    
  
 
    return (
      
        
      
      
      <Pagination count={3} onChange={handleChange} />
    
  );

  }
    /**<div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={style.tab}  key={tab.value}>
            {tab.value}
            
          </div>
        ))}
      </div>
     <div> <Pagination count={3} page={page} onChange={handleChange} /></div>
      <div className={style.snake}>
      {links.map((value: { href: string; }) => 
      <Link className="Games" to={value.href}>Змейка</Link>)} </div>
      <div className={style.cancel} ><button disabled={true}>Отмена</button>
      
      </div>
         
  )
}
}**/

}
