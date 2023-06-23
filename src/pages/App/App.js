import './App.css'
import { Routes, Route} from 'react-router-dom'

// importing pages
import Header from '../components/header/header'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

import Appointments from '../Appointments/Appointments'
import Dashboard from '../Dashboard/Dashboard'
import Messages from '../Messages/Messages'
import Pets from '../Pets/Pets'
import Providers from '../Providers/Providers'
import Resources from '../Resources/Resources'
import Settings from '../Settings/Settings'

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
        {/* Routing catch all // homepage
        <Route path="/*" element={<Navigate to="/dashboard" />} /> */}
      </Routes>

      <Footer />
    </main>
  )
}
