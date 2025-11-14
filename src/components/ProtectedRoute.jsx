import { useEffect, useState } from "react"
import { supabase } from "@/supabaseClient"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  if (loading) return null
  if (!session) return <Navigate to="/admin/login" replace />

  return children
}

export default ProtectedRoute
