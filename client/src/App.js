import './App.css';
import { Route, Routes } from 'react-router-dom'
import FormInput from './Components/FormInput';
import Result from './Components/Result';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<FormInput/>}/>

        <Route path= "/:input" element={<Result/>}/>

      </Routes>
    </div>
  );
}

export default App;
