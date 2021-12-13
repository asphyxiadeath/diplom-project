import React from 'react';

//unlucky routing
import { Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/Home/components/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return <div className="App">
    <Header />
    <Routes>
    <Route path= "/"  element= {<Home/>}/>
    <Route path= "/month-statistics" element= {<MonthStatistics/>}/>
    </Routes>
  </div>
}

export default App;
