import { GlobalSvgSelector } from '../../../assets/Images/icons/global/GlobalSvgSelector';
import { ThisDayItem } from '../../../pages/Home/components/ThisDayInfo/ThisDayItem';
import style from './Popup.module.scss';
import { Weather } from '../../../store/types/types';
import Clock from 'react-live-clock';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {  useState } from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css'

interface Props {weather: Weather;}

export const Popup = ({ weather}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура ощущается как',
      value:  weather.daily[0].feels_like.day,
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
      value: weather.daily[0].wind_speed,
      degrees: "м/с"
    },
    
  ];
 
    const [date, onChangeDate] = useState(new Date());
    const selectedData = weather.daily.find((dataItem:any)=>
      (new Date(dataItem*1000)).toDateString()===date.toDateString()
    );
    console.log(selectedData);

  return (
    <>
    <div>
    <div><Calendar onChange={onChangeDate} value={date} data={selectedData}/></div>
   
    </div>
      <div className={style.popup}
      >
        <div className={style.day} >
          <div className={style.day_temp}></div>
          <div className={style.day_name}>Понедельник</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day_time}>
            Время: <Clock format="HH:mm:ss" interval={1000} ticking={true}  />
          </div>
        </div>
        <div className={style.this_day_info_items}>
          {items.map((item: any) => (
            <ThisDayItem key={item.icon_id} items={item} />
          ))}
        </div>
     </div>
     <div className={style.drop}></div>
     <div className={style.statistic}>Статистика дипломного проекта</div>
     <div className={style.my_progres}>
        <div className={style.finish_days}><Progress type="circle" percent={43} format={percent => `${percent} Days`} /></div>
        <div className={style.finish_prosent}><Progress type="circle" percent={85} format={() => 'Done'} /></div>
     </div>
     
    
    
       </>
        );
      }
    
    
    
      
  


        
      
