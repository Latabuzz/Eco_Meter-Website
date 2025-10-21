"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface LoginProps {
  onLogin: (user: { email: string; name: string }) => void;
  onSwitchToRegister: () => void;
}

export function Login({ onLogin, onSwitchToRegister }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Validasi Error', {
        description: 'Email dan password harus diisi'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Validasi Error', {
        description: 'Format email tidak valid'
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userName = formData.email.split('@')[0];
      onLogin({
        email: formData.email,
        name: userName.charAt(0).toUpperCase() + userName.slice(1)
      });
      toast.success('Login Berhasil', {
        description: 'Selamat datang di EcoMeter!'
      });
      setIsLoading(false);
    }, 500);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Login demo berhasil!', {
        description: 'Selamat datang di EcoMeter!'
      });
      onLogin({ email: 'demo@ecometer.id', name: 'Demo User' });
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-0 shadow-2xl">
          {/* Header */}
          <CardHeader className="text-center bg-gradient-to-br from-green-50 to-emerald-50">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden"
            >
              <img 
                src="/logo.png" 
                alt="EcoMeter Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-green-900">Masuk ke EcoMeter</CardTitle>
            <CardDescription className="text-green-700">
              Lanjutkan perjalanan energi hijau Anda
            </CardDescription>
          </CardHeader>

          {/* Form */}
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-green-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-green-500" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Minimal 6 karakter"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isLoading ? 'Memproses...' : 'Masuk'}
                </Button>
              </motion.div>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="px-3 text-sm text-gray-500">atau</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                type="button"
                variant="outline"
                className="w-full border-green-300 text-green-700 hover:bg-green-50"
                onClick={handleDemoLogin}
                disabled={isLoading}
              >
                Coba Akun Demo
              </Button>
            </motion.div>

            {/* Register Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center space-y-3 mt-6"
            >
              <p className="text-gray-600 text-sm">
                Belum punya akun?{' '}
                <button
                  onClick={onSwitchToRegister}
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Daftar di sini
                </button>
              </p>
            </motion.div>

            {/* Terms */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xs text-gray-500 text-center mt-4 leading-relaxed"
            >
              Dengan masuk, Anda menyetujui{' '}
              <a href="#" className="text-green-600 hover:underline">
                syarat dan ketentuan
              </a>{' '}
              EcoMeter
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
