import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/Login/Login'
import { PatientForm } from './components/Patient/PatientForm';
import Dashboard from './components/Dashboard/Dashboard';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import SimpleLoading from './components/SimpleLoading/SimpleLoading';

function App() {
  return (
    <div className="App">
      {/* DM HIEU PC
      <Login /> */}
      <Routes>
        <Route path="/home" element={<Dashboard />}/>
        <Route path="/patient" element={<PatientForm />}/>
        <Route path="/" element={ <Login />}/>
        <Route path='/loading' element={ <LoadingScreen /> } />
        <Route path='/sloading' element={ <SimpleLoading /> } />
      </Routes>
      
    </div>
  );
}

export default App;
