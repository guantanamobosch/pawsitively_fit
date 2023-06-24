import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom'

// importing pages
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'


import Appointments from '../Pages/Appointments/Appointments'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Messages from '../Pages/Messages/Messages'
import Pets from '../Pages/Pets/Pets'
import Providers from '../Pages/Providers/Providers'
import Resources from '../Pages/Resources/Resources'
import Settings from '../Pages/Settings/Settings'
import AuthPage from '../Pages/AuthPage/AuthPage'
import { useState } from 'react'
import { getUser } from '../Utilities/users-service'

export default function App() {

  
  const [user, setUser] = useState(getUser());



  return (
    <main>
      <Header />

    { user ? 

    <>
      
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

      </>
      :


      <AuthPage setUser = {setUser} />

    }

      <Footer />
    </main>
  )
}
