import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Leaf, Mail, Lock, LogIn } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface LoginProps {
  onLogin: (user: { email: string; name: string }) => void;
  onSwitchToRegister: () => void;
}

export function Login({ onLogin, onSwitchToRegister }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('ecoMeterUsers') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        toast.success('Login berhasil!', {
          description: `Selamat datang kembali, ${user.name}!`
        });
        onLogin({ email: user.email, name: user.name });
      } else {
        toast.error('Login gagal', {
          description: 'Email atau password salah. Silakan coba lagi.'
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Login demo berhasil!', {
        description: 'Selamat datang di EcoMeter!'
      });
      onLogin({ email: 'demo@ecometer.id', name: 'Demo User' });
      setIsLoading(false);
    }, 800);
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
          <h1 className="text-green-900 mb-2">Selamat Datang di EcoMeter</h1>
          <p className="text-sm text-gray-600">Sistem monitoring biogas berbasis blockchain</p>
        </div>

        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="w-5 h-5 text-green-600" />
              Masuk ke Akun Anda
            </CardTitle>
            <CardDescription>Masukkan email dan password untuk melanjutkan</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? 'Memproses...' : 'Masuk'}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Coba Akun Demo
            </Button>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Belum punya akun? </span>
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-green-600 hover:text-green-700 hover:underline"
              >
                Daftar sekarang
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6">
          Enviro-Ders
        </p>
      </motion.div>
    </div>
  );
}
