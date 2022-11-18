import './App.css';
import { Route, Routes } from 'react-router-dom'
import FormInput from './Components/displays/FormInput';
import Monsters from './Components/results/Monsters';
import Monster from './Components/results/Monster';
import Banner from './Components/displays/Banner';

function App() {
  return (
    <div>
      
      <Banner/>

      <Routes>
        <Route path='/form' element={<FormInput/>}/>

        <Route path= "/:input" element={<Monsters/>}/>

        <Route path= "/:input/:name" element={<Monster/>}/>

      </Routes>
    </div>
  );
}

export default App;
