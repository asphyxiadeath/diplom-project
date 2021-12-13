import React from "react";
import { GlobalSvgSelector } from "../../assets/Images/icons/global/GlobalSvgSelector";
import style from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {
    return <header className={style.header}>
        <div className={style.wrapper}>
            <div className={style.logo}>
                <GlobalSvgSelector id= "header-logo"/>
            </div>
            <div className={style.title}>React weather</div>
        </div>
        <div className={style.wrapper}></div>
    
     </header>
}