"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface RegisterProps {
  onRegister: (user: { email: string; name: string }) => void;
  onSwitchToLogin: () => void;
}

export function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.address || !formData.password) {
      toast.error('Validasi Error', {
        description: 'Semua field harus diisi'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Validasi Error', {
        description: 'Format email tidak valid'
      });
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Validasi Error', {
        description: 'Password minimal 6 karakter'
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Validasi Error', {
        description: 'Password dan konfirmasi password tidak cocok'
      });
      return;
    }

    if (!agreeTerms) {
      toast.error('Validasi Error', {
        description: 'Anda harus menyetujui syarat dan ketentuan'
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onRegister({
        email: formData.email,
        name: formData.name
      });
      toast.success('Pendaftaran Berhasil', {
        description: 'Selamat datang di EcoMeter!'
      });
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
            <CardTitle className="text-2xl font-bold text-green-900">Bergabung dengan EcoMeter</CardTitle>
            <CardDescription className="text-green-700">
              Mulai perjalanan energi hijau Anda
            </CardDescription>
          </CardHeader>

          {/* Form */}
          <CardContent className="pt-6">
            <form onSubmit={handleRegister} className="space-y-3">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-1"
              >
                <Label htmlFor="name" className="text-gray-700 font-medium text-sm">
                  Nama Anda
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-green-500" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nama lengkap"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-9 text-sm bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-1"
              >
                <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-green-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-9 text-sm bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-1"
              >
                <Label htmlFor="address" className="text-gray-700 font-medium text-sm">
                  Alamat
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-green-500" />
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Contoh: RT 01/RW 03 Jl. Tanjung Merah"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="pl-9 text-sm bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="space-y-1"
              >
                <Label htmlFor="password" className="text-gray-700 font-medium text-sm">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-green-500" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Minimal 6 karakter"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-9 pr-9 text-sm bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Confirm Password */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-1"
              >
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium text-sm">
                  Ulangi Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-green-500" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Ulangi password Anda"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-9 pr-9 text-sm bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Terms Checkbox */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex items-center gap-2 pt-2"
              >
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="border-gray-300"
                />
                <Label htmlFor="terms" className="text-xs text-gray-600 font-normal cursor-pointer">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    syarat dan ketentuan
                  </a>{' '}
                  EcoMeter
                </Label>
              </motion.div>

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-3"
                >
                  {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
                </Button>
              </motion.div>
            </form>

            {/* Login Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-center pt-3 border-t border-gray-200 mt-4"
            >
              <p className="text-gray-600 text-sm">
                Sudah punya akun?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Masuk di sini
                </button>
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
