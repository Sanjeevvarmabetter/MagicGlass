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

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
            <Route path="/rank/*" element={<ProtectedRoute> <PlayerRanking /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<CreateUser />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/map" element={<SimpleMap />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
