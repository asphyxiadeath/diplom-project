
import { Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { Header } from './shared/Header/Header';
import {Popup} from './shared/Header/Popup/Popup'
import { useCustomSelector } from './hooks/store';
import { selectCurrentWeatherData} from './services/selectors';

function App() {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  
  return (
    <div className="global-container">  
    <div className="container">
      <Header _weather={weather}/>
      <Routes>
        <Route path= "/"  element= {<Home/>}/>
        <Route path= "/popup" element={<Popup weather={weather} />}/>
      </Routes>
    </div>
  </div>
);
}


export default App;
