import React, { useEffect } from 'react';
import style from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import {ThisDayInfo} from './ThisDayInfo/ThisDayInfo';
import {Days} from './Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../../services/selectors';
//import { SpinnerInfinity } from 'spinners-react';


interface Props {

}


export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData);
  
    useEffect(() => {
      dispatch(fetchCurrentWeather('minsk'));
      
    }, []);
   
   

    return (
        
    <div className={style.Home}>
        {/**добавить логику открытия и закрытия спинера */}
        {/**<SpinnerInfinity />**/}
        <div className={style.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather} />
        
        </div>
        <Days weather={weather} />
    </div>
    );
};