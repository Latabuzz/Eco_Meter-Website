"use client";

import { useState, useEffect } from 'react';
import { Leaf, Zap, Coins, Users, TrendingUp, Droplet, LogOut, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Hero } from '@/components/Hero';
import { Dashboard } from '@/components/Dashboard';
import { IoTMonitor } from '@/components/IoTMonitor';
import { TokenWallet } from '@/components/TokenWallet';
import { RedemptionCenter } from '@/components/RedemptionCenter';
import { CommunityImpact } from '@/components/CommunityImpact';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('ecoMeterCurrentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('ecoMeterCurrentUser');
    setCurrentUser(null);
    setIsLoggedIn(false);
    toast.success('Logout berhasil', {
      description: 'Sampai jumpa lagi!'
    });
  };

  const handleDemoLogin = () => {
    const demoUser = { email: 'demo@ecometer.io', name: 'Demo User' };
    setCurrentUser(demoUser);
    setIsLoggedIn(true);
    localStorage.setItem('ecoMeterCurrentUser', JSON.stringify(demoUser));
    toast.success('Login berhasil', {
      description: 'Selamat datang di EcoMeter!'
    });
  };

  const handleLogin = (user: { email: string; name: string }) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('ecoMeterCurrentUser', JSON.stringify(user));
  };

  const handleRegister = (user: { email: string; name: string }) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('ecoMeterCurrentUser', JSON.stringify(user));
  };

  if (!isLoggedIn) {
    return (
      <>
        <Toaster />
        {authView === 'login' ? (
          <Login
            onLogin={handleLogin}
            onSwitchToRegister={() => setAuthView('register')}
          />
        ) : (
          <Register
            onRegister={handleRegister}
            onSwitchToLogin={() => setAuthView('login')}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Toaster />
      
      {/* Header */}
      <motion.header 
        className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-green-100"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/logo.png" 
                  alt="EcoMeter Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h1 className="text-green-900 font-semibold">EcoMeter</h1>
                <p className="text-sm text-green-600">Blockchain for a Sustainable Future</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <motion.div 
                className="hidden md:flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700">Live Monitoring Active</span>
              </motion.div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 bg-emerald-100 px-3 py-2 rounded-full">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-emerald-700">{currentUser?.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Keluar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Features */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 gap-2 bg-white/50 p-2">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="iot" className="flex items-center gap-2">
                <Droplet className="w-4 h-4" />
                <span>IoT Monitor</span>
              </TabsTrigger>
              <TabsTrigger value="wallet" className="flex items-center gap-2">
                <Coins className="w-4 h-4" />
                <span>EcoWallet</span>
              </TabsTrigger>
              <TabsTrigger value="redeem" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Redeem</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Community</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="dashboard" className="space-y-6">
                <Dashboard />
              </TabsContent>

              <TabsContent value="iot" className="space-y-6">
                <IoTMonitor />
              </TabsContent>

              <TabsContent value="wallet" className="space-y-6">
                <TokenWallet />
              </TabsContent>

              <TabsContent value="redeem" className="space-y-6">
                <RedemptionCenter />
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                <CommunityImpact />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EcoMeter</h3>
              <p className="text-green-200 text-sm">
                Blockchain-based IoT system for transparent and sustainable biogas distribution management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>Yayasan Tana Nyiur Lestari</li>
                <li>Baciraro Recycle & TRC</li>
                <li>Elmast Greenovasi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Team Enviro-DERS</h4>
              <p className="text-green-200 text-sm">
                Enviro-Ders 2025<br />
                Developed by Owen, Rizky, Friestha, Natasya.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-300 text-sm">
            © 2025 EcoMeter. Create by Enviro-DERS.
          </div>
        </div>
      </footer>
    </div>
  );
}
