import React, { useEffect, useState } from 'react';
import { GlobalSvgSelector } from "../../assets/Images/icons/global/GlobalSvgSelector";
import style from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";


interface Props {}

export const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: 'city-1', label: 'Минск' },
    { value: 'city-2', label: 'Урюпинск' },
    { value: 'city-3', label: 'Чебоксары' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  const links = [
    {
        
        href: "/"
        
    },
  ]
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
        {links.map((value:{href:string}) => (
            <Link className="Home" to={value.href}>
          <GlobalSvgSelector id="header-logo" />
          </Link>
        ))},
        </div>

        <div className={style.title}>React weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};