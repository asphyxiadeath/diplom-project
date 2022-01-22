
import { Link } from "react-router-dom"
import style from './Days.module.scss';




interface Props {}


export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
  ]
    const links = [
      {
          
          href: "/game",
          
          value: String,
      },
      
    ]
  
      
  
  
  
    
  
  return (
    
    <div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={style.tab}  key={tab.value}>
            {tab.value}
            
          </div>
        ))}
      </div>
      <div className={style.snake}>
      {links.map((value: { href: string; }) => 
      <Link className="Games" to={value.href}>Змейка</Link>)} </div>
      <div className={style.cancel} ><button disabled={true}>Отмена</button>
      
      </div>
       </div>    
  )
}



