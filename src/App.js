import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/Login/Login'
import { PatientForm } from './components/Patient/PatientForm';
function App() {
  return (
    <div className="App">
      {/* DM HIEU PC
      <Login /> */}
      <Routes>
        <Route path="/patient" element={<PatientForm />}/>
        <Route path="/" element={ <Login />}/>
      </Routes>
      
    </div>
  );
}

export default App;
