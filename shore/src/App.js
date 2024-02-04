import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import CreateUser from './pages/Auth/CreateUser';
import ProfilePage from './pages/Profile';
import RegistrationForm from './pages/Registration';
import PlayerRanking from './pages/Rankings/Playerrank';
import SimpleMap from "./pages/Components/Map";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from './UserAuthContext';

import Esports from './pages/Host/Esports';
import Sports from './pages/Host/Sports';
import Hackathon from './pages/Host/Hackathon';

import EsportData from './pages/Host/Esports_view';
import SportData from './pages/Host/Sports_view';
import HackathonData from './pages/Host/Hackathon_view';

import LoginHost from './pages/Host/HostAuth/HostLogin';
import SignUpHost from './pages/Host/HostAuth/HostSignup';
import HostDashBoard from './pages/Host/HostDashBoard';

import UserDash from './pages/UserPages/UserDash';
function App() {
  
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rank/*" element={<PlayerRanking />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<CreateUser />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="dashboard" element={<UserDash/>}/>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/map" element={<SimpleMap />} />

            <Route path="/loginHost" element={<LoginHost/>}/>
            <Route path="/signupHost" element={<SignUpHost/>}/>
            <Route path="/host/dashboard" element={<HostDashBoard/>}/>
            
            <Route path="/esport" element={<EsportData />}/>
            <Route path="/sport" element={<SportData />} />
            <Route path="/hackathon" element={<HackathonData />} />

            <Route path="/host/dashboard/esportHost" element={<Esports/>} />
            <Route path="/host/dashboard/sportHost" element={<Sports/>} />
            <Route path="/host/dashboard/hackathonHost" element={<Hackathon />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
      
    </div>
  );
}

export default App;
