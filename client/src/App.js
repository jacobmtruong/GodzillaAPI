import './App.css';
import { Route, Routes } from 'react-router-dom'
import FormInput from './Components/FormInput';
import Monsters from './Components/results/Monsters';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<FormInput/>}/>

        <Route path= "/:input" element={<Monsters/>}/>

        <Route path= "/:input/:name" element={<Monsters/>}/>

      </Routes>
    </div>
  );
}

export default App;
