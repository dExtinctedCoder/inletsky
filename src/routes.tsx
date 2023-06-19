import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home';

// component for managing all routes
const RootRoutes = () => {
  return (
    <Routes>
      <Route Component={Home} path='/' />
    </Routes>
  )
}

export default RootRoutes