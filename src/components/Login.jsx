import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuthContext } from '../context/authContext/authContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const { LoginUser } = useAuthContext();
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
      const result = await LoginUser(form);
      console.log('Login Result:', result);

      
      if (result?.token || result?.user || result) {
        toast.success('🎉 You logged in successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });
      } else {
        toast.error('❌ Login failed. Please check credentials.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      toast.error('❌ Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0 pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute top-8 right-3 text-gray-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-800 hover:bg-sky-900 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <span className="text-sky-800 font-semibold cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}
