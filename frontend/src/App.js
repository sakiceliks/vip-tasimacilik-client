import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CarPage from './pages/CarPage';
import DriversPage from './pages/DriversPage'
import PassengerPage from './pages/PassengerPage'
import TransferPage from './pages/TransferPage'
import { Link, Route } from "wouter";

function App() {
  return (
    <>
<Header/>
<Route path="/dashboard" component={Dashboard} />
<Route path="/cars" component={CarPage} />
<Route path="/PassengerPage" component={PassengerPage} />
<Route path="/drivers" component={DriversPage} />
<Route path="/transferspage" component={TransferPage} />

    </>


  );
}

export default App;
