import { useState } from "react"
import { supabase } from "@/supabaseClient"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setError(error.message)
    else navigate("/admin/dashboard")
  }

  return (
    <div className="flex justify-center items-center min-h-screen " style={{ backgroundColor: "#1A5F5F" }}>
    <form
  onSubmit={handleLogin}
  className="glass-morphism p-6 rounded-2xl shadow-lg w-80 text-white backdrop-blur-xl border border-white/20"
>
  <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>

  {error && <p className="text-red-300 text-sm mb-2">{error}</p>}

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full mb-3 px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
  />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full mb-4 px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
  />

 <button
  type="submit"
  className="w-64 bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] text-white py-2 rounded-lg hover:opacity-90 transition-all"
>
  Login
</button>
</form>

    </div>
  )
}

export default AdminLogin
