
//unlucky routing
import { Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/Home/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import {Popup} from './shared/Header/Popup/Popup'
import {Weather} from './store/types/types'
import {  useCustomSelector } from './hooks/store';
import Snake from './shared/Header/snake'
import { selectCurrentWeatherData } from './services/selectors';







function App() {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  
  return (
    
    <div className="global-container">  
    <div className="container">
      <Header weather={weather}/>
      
      <Routes>
        <Route path= "/"  element= {<Home/>}/>
        <Route path= "/game" element= {<Snake/>}/>
        <Route path= "/popup" element={<Popup weather={weather}/>}/>
        
        
      </Routes>
    </div>
  </div>
);
}


export default App;
