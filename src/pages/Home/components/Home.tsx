import  { useEffect,  } from 'react';
import style from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import {ThisDayInfo} from './ThisDayInfo/ThisDayInfo';
import {Days} from './Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../../services/selectors';


interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData);
  
    useEffect(() => {
      dispatch(fetchCurrentWeather('&lat=53.893009'+'&lon=27.567444'));
      
    }, []);
   
    
    return (   
    <div className={style.Home}>
        <div className={style.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather} /> 
        </div>
        <Days weather={weather} />
      </div>
    );
};