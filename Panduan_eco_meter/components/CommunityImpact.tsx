import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  Users, 
  Home, 
  Leaf, 
  TrendingUp, 
  Award,
  Target,
  Droplet,
  Coins
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export function CommunityImpact() {
  const monthlyData = [
    { month: 'Apr', households: 8, biogas: 68, co2: 38, tokens: 9800 },
    { month: 'Mei', households: 10, biogas: 85, co2: 48, tokens: 12500 },
    { month: 'Jun', households: 10, biogas: 91, co2: 51, tokens: 13200 },
    { month: 'Jul', households: 12, biogas: 110, co2: 62, tokens: 16000 },
    { month: 'Agu', households: 12, biogas: 115, co2: 65, tokens: 16800 },
    { month: 'Sep', households: 15, biogas: 140, co2: 79, tokens: 20500 },
    { month: 'Okt', households: 15, biogas: 145, co2: 82, tokens: 21200 },
  ];

  const topContributors = [
    { name: 'RT 01 - Jl. Tanjung Merah', tokens: 3420, co2: 18.5, rank: 1 },
    { name: 'RT 05 - Jl. Nelayan Sejahtera', tokens: 3280, co2: 17.8, rank: 2 },
    { name: 'RT 02 - Jl. Tanjung Merah', tokens: 3150, co2: 17.1, rank: 3 },
    { name: 'RT 03 - Jl. Pantai Barat', tokens: 2980, co2: 16.2, rank: 4 },
    { name: 'RT 04 - Jl. Pantai Barat', tokens: 2760, co2: 15.0, rank: 5 },
  ];

  const wasteDistribution = [
    { name: 'Sampah Dapur', value: 45, color: '#10b981' },
    { name: 'Sampah Kebun', value: 35, color: '#14b8a6' },
    { name: 'Sampah Pasar', value: 20, color: '#84cc16' },
  ];

  const achievements = [
    {
      title: 'Pelopor Energi Bersih',
      description: '15 rumah tangga aktif menggunakan biogas',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Penghemat Emisi',
      description: '82 kg CO₂ dihemat bulan ini',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Komunitas Produktif',
      description: '21,200 EcoToken diterbitkan',
      icon: Coins,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Target Tercapai',
      description: '145% dari target bulanan',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Home, title: 'Rumah Tangga Aktif', value: 15, total: 20, unit: '', color: 'green', delay: 0.1 },
          { icon: Droplet, title: 'Biogas Bulan Ini', value: 145, unit: 'm³', color: 'emerald', delay: 0.2 },
          { icon: Leaf, title: 'CO₂ Tersimpan', value: 82, unit: 'kg', color: 'teal', delay: 0.3 },
          { icon: Coins, title: 'Total EcoToken', value: 21200, unit: '', color: 'lime', delay: 0.4 }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className={`border-${stat.color}-200 bg-gradient-to-br from-${stat.color}-50 to-white`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-gray-700 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <AnimatedCounter value={stat.value} className={`text-3xl text-${stat.color}-900`} />
                    {stat.unit && <span className={`text-${stat.color}-600`}>{stat.unit}</span>}
                  </div>
                  {stat.total && (
                    <p className="text-xs text-gray-600 mt-2">
                      {stat.total} {stat.title.toLowerCase()}
                    </p>
                  )}
                  {stat.total && (
                    <Progress value={(stat.value / stat.total) * 100} className="mt-3 h-2" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Pertumbuhan Komunitas</CardTitle>
            <CardDescription>Perkembangan partisipasi dan produksi</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="households" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Rumah Tangga"
                />
                <Line 
                  type="monotone" 
                  dataKey="biogas" 
                  stroke="#14b8a6" 
                  strokeWidth={2}
                  name="Biogas (m³)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* CO2 Savings */}
        <Card>
          <CardHeader>
            <CardTitle>Penghematan CO₂</CardTitle>
            <CardDescription>Kontribusi pengurangan emisi bulanan</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="co2" fill="#059669" radius={[8, 8, 0, 0]} name="CO₂ (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Contributors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Kontributor Terbaik Bulan Ini
          </CardTitle>
          <CardDescription>Rumah tangga dengan kontribusi energi bersih tertinggi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topContributors.map((contributor) => (
              <div 
                key={contributor.rank}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    contributor.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                    contributor.rank === 2 ? 'bg-gray-100 text-gray-700' :
                    contributor.rank === 3 ? 'bg-orange-100 text-orange-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {contributor.rank}
                  </div>
                  <div>
                    <p className="text-gray-900">{contributor.name}</p>
                    <p className="text-sm text-gray-500">{contributor.co2} kg CO₂ dihemat</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {contributor.tokens.toLocaleString()} ECT
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Waste Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Sampah Organik</CardTitle>
            <CardDescription>Jenis sampah yang diproses di biodigester</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wasteDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                    
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        fill="white" 
                        textAnchor={x > cx ? 'start' : 'end'} 
                        dominantBaseline="central"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {`${name} ${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {wasteDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle>Dampak Ekonomi & Lingkungan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">Target Net Zero Emission</span>
                  <span className="text-sm text-green-700">32%</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl text-green-600">±9 ton</div>
                  <p className="text-xs text-gray-600 mt-1">CO₂/tahun potensial</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl text-emerald-600">Rp 2jt</div>
                  <p className="text-xs text-gray-600 mt-1">Nilai pupuk/bulan</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-700 mb-2">Mitra Komunitas</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Yayasan Tana Nyiur Lestari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Baciraro Recycle & TRC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">PT Sasa (CSR Partner)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Banner with Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="h-64 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1713634437183-1ec04e1927a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwaW5kb25lc2lhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MDk3OTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Komunitas Desa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="mb-2">Komunitas Manado Tua</h3>
                <p className="text-sm text-green-100">
                  Bersama membangun masa depan hijau dan berkelanjutan
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="h-64 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjA5Nzk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dampak Lingkungan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="mb-2">Dampak Positif Lingkungan</h3>
                <p className="text-sm text-emerald-100">
                  Setara menanam 4.7 pohon setiap bulan
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}