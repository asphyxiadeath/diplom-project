
import style from './Days.module.scss';
import { GlobalSvgSelector } from '../../../../assets/Images/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import { Link } from "react-router-dom"
import news from '../../../../assets/Images/news.png'
import { Tooltip } from '@varld/popover';




interface Props {
    _day: Day;
    
  }

 export const _Card = ({ _day }: Props) => {
  const links = [
    {
        
        href: "/popup"
        
    },
  ]
      return (
      <div className={style.card} >
        <div className={style.contaiter_header}>
          <div className={style.day}>{_day.day} </div>
              <div className={style.news}>
              {links.map((value:{href:string}) => (
               <Link className="Popup" to={value.href}> 
                  <Tooltip  content="Больше информации"  >
                    <img src={news} alt="новости" />
                    </Tooltip>
                 </Link>
                 
                ))}
                </div>
                </div>
        
        <div className={style.img}>
          <GlobalSvgSelector id={_day.icon_id} />
        </div>
        <div className={style.temp_day}>{_day.temp_day}</div>
        <div className={style.temp_night}>{_day.temp_night}</div>
        <div className={style.info}>{_day.info}</div>
        <div className={style.blur}></div>
        </div>
      
        
      )
    }
  

    
    
        

  
  
          

  