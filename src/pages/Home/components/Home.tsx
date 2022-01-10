import React from 'react';
import style from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import {ThisDayInfo} from './ThisDayInfo/ThisDayInfo';
import {Days} from './Days/Days';
//import { SpinnerInfinity } from 'spinners-react';


interface Props {

}


export const Home = (props: Props) => {
    return (
        
    <div className={style.Home}>
        {/**добавить логику открытия и закрытия спинера */}
        {/**<SpinnerInfinity />**/}
        <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfo />
        
        </div>
        <Days />
    </div>
    );
};