import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((s) => !!s.auth.user)
  const location = useLocation()
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />
  return children
}


