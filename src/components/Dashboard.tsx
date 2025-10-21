"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Zap, Leaf, Users, ArrowUp, ArrowDown } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot } from 'recharts';

export function Dashboard() {
  // Chart Data
  const biogasWeeklyData = [
    { day: 'Sen', value: 2.1 },
    { day: 'Sel', value: 2.4 },
    { day: 'Rab', value: 2.8 },
    { day: 'Kam', value: 3.1 },
    { day: 'Jum', value: 3.4 },
    { day: 'Sab', value: 3.2 },
    { day: 'Min', value: 2.9 }
  ];

  const tokenEarningsData = [
    { day: 'Sen', tokens: 95 },
    { day: 'Sel', tokens: 112 },
    { day: 'Rab', tokens: 128 },
    { day: 'Kam', tokens: 145 },
    { day: 'Jum', tokens: 168 },
    { day: 'Sab', tokens: 152 },
    { day: 'Min', tokens: 135 }
  ];

  const hourlyConsumptionData = [
    { time: '00:00', consumption: 0.05 },
    { time: '04:00', consumption: 0.04 },
    { time: '08:00', consumption: 0.12 },
    { time: '12:00', consumption: 0.18 },
    { time: '16:00', consumption: 0.22 },
    { time: '20:00', consumption: 0.28 },
    { time: '24:00', consumption: 0.08 }
  ];

  const usageDistributionData = [
    { name: 'Residential', value: 65, color: '#0891b2' },
    { name: 'Commercial', value: 35, color: '#84cc16' }
  ];

  const stats = [
    {
      title: 'Total Biogas Produced',
      value: '1,247 m³',
      change: '+12.5%',
      trend: 'up',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'EcoTokens Earned',
      value: '3,542 ECT',
      change: '+8.2%',
      trend: 'up',
      icon: Leaf,
      color: 'green'
    },
    {
      title: 'CO₂ Offset',
      value: '842 kg',
      change: '+15.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      title: 'Community Impact',
      value: '127 Users',
      change: '+23%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    }
  ];

  const recentActivity = [
    { action: 'Biogas Production', amount: '+45 m³', time: '2 hours ago', type: 'production' },
    { action: 'Token Earned', amount: '+120 ECT', time: '5 hours ago', type: 'earn' },
    { action: 'Reward Redeemed', amount: '-50 ECT', time: '1 day ago', type: 'redeem' },
    { action: 'Biogas Production', amount: '+38 m³', time: '1 day ago', type: 'production' }
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`w-8 h-8 bg-${stat.color}-100 rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs flex items-center gap-1 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts & Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Konsumsi Biogas Mingguan */}
        <Card>
          <CardHeader>
            <CardTitle>Konsumsi Biogas Mingguan</CardTitle>
            <CardDescription>Weekly biogas production (m³)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={biogasWeeklyData}>
                <defs>
                  <linearGradient id="colorBiogas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                <Area type="monotone" dataKey="value" stroke="#0891b2" fill="url(#colorBiogas)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Perolehan EcoToken */}
        <Card>
          <CardHeader>
            <CardTitle>Perolehan EcoToken</CardTitle>
            <CardDescription>Daily token earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tokenEarningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                <Bar dataKey="tokens" fill="#0891b2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pola Konsumsi Harian & Distribusi Penggunaan */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Pola Konsumsi Harian */}
        <Card>
          <CardHeader>
            <CardTitle>Pola Konsumsi Harian</CardTitle>
            <CardDescription>24-hour consumption pattern (m³/hour)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                <Line 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="#0891b2" 
                  strokeWidth={2}
                  dot={{ fill: '#0891b2', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribusi Penggunaan */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Penggunaan</CardTitle>
            <CardDescription>Usage allocation breakdown</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }: any) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {usageDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Environmental Impact</CardTitle>
          <CardDescription>Your contribution to sustainability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
              <Leaf className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-2xl font-bold text-green-900">842 kg</span>
              <span className="text-sm text-green-600">CO₂ Offset</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-2xl font-bold text-blue-900">1,247 m³</span>
              <span className="text-sm text-blue-600">Clean Energy</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-2xl font-bold text-purple-900">15.3%</span>
              <span className="text-sm text-purple-600">Growth Rate</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
