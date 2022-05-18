import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Shared/NotFound/Notfound';
import Header from './components/Shared/Header/Header';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={
          <RequiredAuth>
            <Todo></Todo>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
