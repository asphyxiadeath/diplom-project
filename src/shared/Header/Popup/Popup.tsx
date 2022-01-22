import { GlobalSvgSelector } from '../../../assets/Images/icons/global/GlobalSvgSelector';
import { ThisDayItem } from '../../../pages/Home/components/ThisDayInfo/ThisDayItem';
import style from './Popup.module.scss';
import trees from './img/trees.jpg';
import { Weather } from '../../../store/types/types';
import Clock from 'react-live-clock';




interface Props {weather: Weather;
}

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
      value: '1',
      degrees: "м/с"
    },
  ];
 
  

  return (
    <>
    
    <div className={style.background}>
    <img className={style.background_img} src={trees} alt="forest" />
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day_temp}>{Math.floor(weather.daily[0].temp.day)}</div>
          <div className={style.day_name}>Понедельник</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day_time}>
            Время: <Clock format="HH:mm:ss" interval={1000} ticking={true}  />
          </div>
          <div className={style.day_city}>
            Город: <span>Минск</span>
          </div>
        </div>
        <div className={style.this_day_info_items}>
          {items.map((item: any) => (
            <ThisDayItem key={item.icon_id} items={item} />
          ))}
        </div>
        
      </div>
      </div> 
       </>
        );
      }

    
      
  


        
      
