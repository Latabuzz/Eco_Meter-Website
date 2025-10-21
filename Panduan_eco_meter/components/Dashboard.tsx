import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Droplet, Coins, TrendingUp, Leaf, Activity } from 'lucide-react';

export function Dashboard() {
  const [currentConsumption, setCurrentConsumption] = useState(0.28);
  const [todayTokens, setTodayTokens] = useState(142);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConsumption(prev => +(0.25 + Math.random() * 0.1).toFixed(2));
      setTodayTokens(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mock data for charts
  const weeklyData = [
    { day: 'Sen', biogas: 2.8, tokens: 140, co2: 5.2 },
    { day: 'Sel', biogas: 3.2, tokens: 160, co2: 6.0 },
    { day: 'Rab', biogas: 2.5, tokens: 125, co2: 4.7 },
    { day: 'Kam', biogas: 3.0, tokens: 150, co2: 5.6 },
    { day: 'Jum', biogas: 2.9, tokens: 145, co2: 5.4 },
    { day: 'Sab', biogas: 3.5, tokens: 175, co2: 6.5 },
    { day: 'Min', biogas: 3.1, tokens: 155, co2: 5.8 },
  ];

  const hourlyData = [
    { hour: '00:00', consumption: 0.02 },
    { hour: '04:00', consumption: 0.01 },
    { hour: '08:00', consumption: 0.15 },
    { hour: '12:00', consumption: 0.25 },
    { hour: '16:00', consumption: 0.18 },
    { hour: '20:00', consumption: 0.30 },
    { hour: '24:00', consumption: 0.12 },
  ];

  const distributionData = [
    { name: 'Memasak', value: 45, color: '#10b981' },
    { name: 'Pemanas Air', value: 30, color: '#14b8a6' },
    { name: 'Lainnya', value: 25, color: '#84cc16' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm text-green-700 flex items-center gap-1.5">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Droplet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.div>
                <span>Konsumsi Hari Ini</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl text-green-900">
                  <AnimatedCounter value={currentConsumption} decimals={2} duration={0.5} />
                </span>
                <span className="text-sm sm:text-base text-green-600">m³</span>
              </div>
              <div className="space-y-1.5">
                <Progress value={currentConsumption * 33} className="h-2" />
                <p className="text-xs text-green-600">Target: 0.3 m³/hari</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-emerald-700 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Coins className="w-4 h-4" />
                </motion.div>
                EcoToken Hari Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-emerald-900">
                  <AnimatedCounter value={todayTokens} duration={0.5} />
                </span>
                <span className="text-emerald-600">ECT</span>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-xs text-emerald-600">+12% dari kemarin</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-teal-700 flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Leaf className="w-4 h-4" />
                </motion.div>
                CO₂ Tersimpan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-teal-900">
                  <AnimatedCounter value={5.8} decimals={1} />
                </span>
                <span className="text-teal-600">kg</span>
              </div>
              <p className="text-xs text-teal-600 mt-3">
                Kontribusi minggu ini
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-lime-700 flex items-center gap-2">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Activity className="w-4 h-4" />
                </motion.div>
                Status Sistem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                ● Operasional
              </Badge>
              <p className="text-xs text-lime-600 mt-3">
                10 perangkat terhubung
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Consumption */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Konsumsi Biogas Mingguan</CardTitle>
              <CardDescription>Volume biogas yang digunakan (m³)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="biogasGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="biogas" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#biogasGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Token Earnings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Perolehan EcoToken</CardTitle>
              <CardDescription>Token yang diperoleh per hari</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="tokens" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hourly Pattern */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Pola Konsumsi Harian</CardTitle>
              <CardDescription>Konsumsi per jam (m³)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="hour" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="consumption" 
                    stroke="#059669" 
                    strokeWidth={2}
                    dot={{ fill: '#059669', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Usage Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Distribusi Penggunaan</CardTitle>
              <CardDescription>Alokasi biogas berdasarkan kebutuhan</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* CO2 Savings */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" />
            Dampak Lingkungan Mingguan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl text-green-600 mb-2">21.2 kg</div>
              <p className="text-sm text-green-700">Total CO₂ Tersimpan</p>
              <p className="text-xs text-green-600 mt-1">≈ 1.2 pohon dewasa</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-emerald-600 mb-2">1,015</div>
              <p className="text-sm text-emerald-700">Total EcoToken</p>
              <p className="text-xs text-emerald-600 mt-1">Nilai: Rp 203,000</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-2">20.5 m³</div>
              <p className="text-sm text-teal-700">Total Biogas</p>
              <p className="text-xs text-teal-600 mt-1">10 rumah tangga</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}