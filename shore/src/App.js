import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import CreateUser from './pages/Auth/CreateUser';
import ProfilePage from './pages/Profile';
import RegistrationForm from './pages/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<CreateUser/>}/>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/registration' element={<RegistrationForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


