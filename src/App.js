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
<<<<<<< HEAD
        <Route path="/login" element={ <Login />}/>
        <Route path="/" element={<Dashboard />}> 
          <Route index element={<PatientForm />}/>
        </Route>
=======
        <Route path="/home" element={<Dashboard />}/>
        <Route path="/patient" element={<PatientForm />}/>
        <Route path="/" element={ <Login />}/>
        <Route path='/loading' element={ <LoadingScreen /> } />
        <Route path='/sloading' element={ <SimpleLoading /> } />
>>>>>>> 3a7f3b0b8d2d861abbe296dd0ec3f8c08789b58b
      </Routes>
      
    </div>
  );
}

export default App;
