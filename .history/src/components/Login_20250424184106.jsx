import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuthContext } from '../context/authContext/authContext';
import { useNavigate, NavLink } from 'react-router-dom';

export default function LoginPage() {
  const { LoginUser } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await LoginUser(form); // LoginUser should return a user object on success
      if (user) {
        // Successful login, redirect to the dashboard

   
      } else {
        console.log('Login failed: Invalid credentials');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 space-y-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-sky-800">Welcome Back</h2>
        <p className="text-center text-gray-500">Please enter your credentials to login</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-sky-600 transition"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:border-sky-500 transition"
              placeholder="••••••••"
              required
            />
            <div
              onClick={togglePassword}
              className="absolute top-12 right-4 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-700 hover:bg-sky-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
