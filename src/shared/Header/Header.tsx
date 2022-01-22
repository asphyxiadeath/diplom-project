
import { GlobalSvgSelector } from "../../assets/Images/icons/global/GlobalSvgSelector";
import style from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";
import { Weather } from '../../store/types/types';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useDispatch } from 'react-redux';





interface Props {_weather: Weather; }



export const Header = ({_weather}: Props) => {
  const theme = useTheme();
  const dispatch= useDispatch();
  const options = [
    {value: '', label: 'Выберите город',},
    { value: '&lat=53.893009'+'&lon=27.567444', label: 'Минск', },
    { value: '&lat=59.9386'+'&lon=30.3141', label: 'Москва', },
    { value:  '&lat=35.689487'+'&lon=139.691706', label: 'Tokyo' },
  
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

  const onSelectCity=(event:any): void =>{
    dispatch(fetchCurrentWeather(event.value));
    
  }
  
  
  return (
    
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          {links.map((value: { href: string; }) => (
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
          defaultValue={options}
          styles={colourStyles}
          options={options}
          onChange={onSelectCity} 
           />
      </div>
    </header>
  );
};









