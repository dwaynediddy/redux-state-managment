import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import HomePage from './components/HomePage'
// import Employees from './components/Employees'
// import Counter from './components/Counter'
import UserList from './components/UserList'
import CounterRedux from './components/CounterRedux'
import EmployeesRedux from './components/EmployeesRedux'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<HomePage />}>Home</Route>
        <Route path={"/employees"} element={<EmployeesRedux />}>Employees</Route>
        <Route path={"/counter"} element={<CounterRedux />}>Counter</Route>
        <Route path={"/users"} element={<UserList />}>User List</Route>
      </Routes>
    </div>
  );
}

export default App;
