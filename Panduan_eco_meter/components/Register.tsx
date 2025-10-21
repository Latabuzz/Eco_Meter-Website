import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Leaf, Mail, Lock, User, UserPlus, Home } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface RegisterProps {
  onRegister: (user: { email: string; name: string }) => void;
  onSwitchToLogin: () => void;
}

export function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (password.length < 6) {
      toast.error('Password terlalu pendek', {
        description: 'Password harus minimal 6 karakter.'
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password tidak cocok', {
        description: 'Pastikan password dan konfirmasi password sama.'
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('ecoMeterUsers') || '[]');
      
      // Check if email already exists
      if (users.some((u: any) => u.email === email)) {
        toast.error('Email sudah terdaftar', {
          description: 'Silakan gunakan email lain atau login.'
        });
        setIsLoading(false);
        return;
      }

      // Save new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        address,
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      localStorage.setItem('ecoMeterUsers', JSON.stringify(users));

      toast.success('Pendaftaran berhasil!', {
        description: `Selamat datang di EcoMeter, ${name}!`
      });
      
      onRegister({ email, name });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4"
          >
            <Leaf className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-green-900 mb-2">Bergabung dengan EcoMeter</h1>
          <p className="text-sm text-gray-600">Mulai perjalanan energi hijau Anda</p>
        </div>

        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-green-600" />
              Buat Akun Baru
            </CardTitle>
            <CardDescription>Lengkapi form untuk mendaftar</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat (RT/RW)</Label>
                <div className="relative">
                  <Home className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="Contoh: RT 01/RW 03 Jl. Tanjung Merah"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Ulangi password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Sudah punya akun? </span>
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-green-600 hover:text-green-700 hover:underline"
              >
                Masuk di sini
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6">
          Dengan mendaftar, Anda menyetujui syarat dan ketentuan EcoMeter
        </p>
      </motion.div>
    </div>
  );
}
