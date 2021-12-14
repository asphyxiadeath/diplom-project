import React from "react";
import { GlobalSvgSelector } from "../../assets/Images/icons/global/GlobalSvgSelector";
import style from './Header.module.scss';
import Select from 'react-select'


interface Props {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Минск' },
        { value: 'city-2', label: 'Урюпинск' },
        { value: 'city-3', label: 'Чебоксары' }
      ]
      
      const colourStyles = {
        control: (styles: any) => ({
          ...styles,
          backgroundColor: '#4793FF33',
          width: '194px',
          height: '37px',
          border: 'none',
          borderRadius: '10px',
          zIndex: 100,
        }),
}

   return <header className={style.header}>
        <div className={style.wrapper}>
            <div className={style.logo}>
                <GlobalSvgSelector id= "header-logo"/>
            </div>
            <div className={style.title}>React weather</div>
        </div>
        <div className={style.wrapper}></div>
            <div className={style.change_theme}></div>
                <GlobalSvgSelector  id= "change-theme"/>
                <Select 
                defaultValue={options[0]}
                styles={colourStyles}
                options={options} />

     </header>
}