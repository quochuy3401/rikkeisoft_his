import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import PatientList from './components/PatientList/PatientList';
import { TabButton } from './components/TabButton/TabButton';
import QueueCard from './components/QueueCard/QueueCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login />}/>
        <Route path="/" element={ <Dashboard /> }> 
          <Route index element={ <TabButton /> }/>
        </Route>
        <Route path="/patientList" element={ <PatientList/> }/>
        <Route path="/queueCard" element={ <QueueCard/> }/>
      </Routes>
    </div>
  );
}

export default App;
