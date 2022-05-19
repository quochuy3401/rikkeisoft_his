import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/Login/Login'
import { PatientForm } from './components/Patient/PatientForm';
import Dashboard from './components/Dashboard/Dashboard';
import PatientList from './components/PatientList/PatientList';

function App() {
  return (
    <div className="App">
      {/* DM HIEU PC
      <Login /> */}
      <Routes>
        <Route path="/login" element={ <Login />}/>
        <Route path="/" element={ <Dashboard /> }> 
          <Route index element={ <PatientForm /> }/>
        </Route>
        <Route path="/patientList" element={ <PatientList/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
