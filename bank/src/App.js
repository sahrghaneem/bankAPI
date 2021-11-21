import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Userlist from "./components/Userlist"
import AddUser from "./components/AddUser"
import Depositing from "./components/Depositing"
import Transfer from "./components/Transfer"
function App() {
  return (
    <Router className="App">
        <div>
        <nav>
          <ul>
          <li>
              <Link to="/userlist">list of users</Link>
            </li>
            <li>
              <Link to="/AddUser">Add Users</Link>
            </li>
            <li>
              <Link to="/Depositing"> Depositing </Link>
            </li>
            <li>
              <Link to="/Transfer"> Transfer </Link>
            </li>
          </ul>
        </nav>
        
          <Routes>
          <Route  path='/AddUser'  element={ <AddUser />} />
          <Route  path='/userlist'  element={ <Userlist />} />
          <Route  path='/Depositing'  element={ <Depositing />} />
          <Route  path='/Transfer'  element={ <Transfer />} />


          </Routes>
          </div>
    </Router>
  );
}

export default App;