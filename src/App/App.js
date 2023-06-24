import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom'

// importing pages
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'


import Appointments from '../pages/Appointments/Appointments'
import Dashboard from '../pages/Dashboard/Dashboard'
import Messages from '../pages/Messages/Messages'
import Pets from '../pages/Pets/Pets'
import Providers from '../pages/Providers/Providers'
import Resources from '../pages/Resources/Resources'
import Settings from '../pages/Settings/Settings'
import AuthPage from '../pages/AuthPage/AuthPage'

export default function App() {
  return (
    <main>
      <Header />
      <Navbar />

      <Routes>
        {/* Establishing routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/authpage" element={<AuthPage />} />
        {/* Routing catch all // homepage */}
        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>

      <Footer />
    </main>
  )
}
