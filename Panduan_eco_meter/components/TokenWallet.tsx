import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, History } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function TokenWallet() {
  const tokenBalance = 3247;
  const tokenValue = tokenBalance * 200; // Rp 200 per token

  const transactions = [
    {
      id: 'TX-001',
      type: 'earn',
      amount: 142,
      description: 'Reward konsumsi biogas',
      date: '20 Okt 2025, 18:30',
      status: 'completed'
    },
    {
      id: 'TX-002',
      type: 'redeem',
      amount: -50,
      description: 'Tukar pupuk organik 5kg',
      date: '19 Okt 2025, 14:20',
      status: 'completed'
    },
    {
      id: 'TX-003',
      type: 'earn',
      amount: 138,
      description: 'Reward konsumsi biogas',
      date: '19 Okt 2025, 08:15',
      status: 'completed'
    },
    {
      id: 'TX-004',
      type: 'redeem',
      amount: -100,
      description: 'Subsidi energi bulanan',
      date: '18 Okt 2025, 16:45',
      status: 'completed'
    },
    {
      id: 'TX-005',
      type: 'earn',
      amount: 145,
      description: 'Reward konsumsi biogas',
      date: '18 Okt 2025, 09:30',
      status: 'completed'
    },
  ];

  const tokenHistory = [
    { month: 'Apr', balance: 1200 },
    { month: 'Mei', balance: 1580 },
    { month: 'Jun', balance: 1920 },
    { month: 'Jul', balance: 2310 },
    { month: 'Agu', balance: 2650 },
    { month: 'Sep', balance: 2890 },
    { month: 'Okt', balance: 3247 },
  ];

  return (
    <div className="space-y-6">
      {/* Wallet Balance */}
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-emerald-100 text-sm">Saldo EcoToken</p>
              <h2 className="text-4xl">{tokenBalance.toLocaleString('id-ID')}</h2>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div>
              <p className="text-emerald-100 text-sm">Nilai Rupiah</p>
              <p className="text-2xl">Rp {tokenValue.toLocaleString('id-ID')}</p>
            </div>
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23.5% bulan ini
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button className="bg-white text-green-700 hover:bg-green-50">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Tukar Token
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <History className="w-4 h-4 mr-2" />
              Riwayat
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Token Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Pertumbuhan EcoToken</CardTitle>
          <CardDescription>Akumulasi token selama 7 bulan terakhir</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={tokenHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="balance" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Riwayat Transaksi
          </CardTitle>
          <CardDescription>Aktivitas EcoToken terbaru</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div 
                key={tx.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'earn' 
                      ? 'bg-green-100' 
                      : 'bg-orange-100'
                  }`}>
                    {tx.type === 'earn' ? (
                      <ArrowDownRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-orange-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-900">{tx.description}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg ${
                    tx.type === 'earn' 
                      ? 'text-green-600' 
                      : 'text-orange-600'
                  }`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount} ECT
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {tx.status === 'completed' ? 'Selesai' : 'Pending'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Token Info */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-green-600" />
            Tentang EcoToken
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Nama Token:</span>
              <span className="text-green-900">EcoToken (ECT)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Blockchain:</span>
              <span className="text-green-900">Flow Blockchain</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nilai Tukar:</span>
              <span className="text-green-900">1 ECT = Rp 200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cara Dapat:</span>
              <span className="text-green-900">Konsumsi biogas & kontribusi emisi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cara Tukar:</span>
              <span className="text-green-900">Subsidi, pupuk, produk komunitas</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}