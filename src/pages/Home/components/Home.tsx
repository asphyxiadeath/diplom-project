import React from 'react';
import style from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import {ThisDayInfo} from './ThisDayInfo/ThisDayInfo';
import {Days} from './Days/Days';

interface Props {

}

export const Home = (props: Props) => {
    return (
    <div className={style.Home}>
        <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfo />
        </div>
        <Days />
    </div>
    );
};