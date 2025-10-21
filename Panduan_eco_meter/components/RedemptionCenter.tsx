import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useState } from 'react';
import { 
  Leaf, 
  Zap, 
  DollarSign, 
  Package, 
  ShoppingCart,
  Gift,
  Coins
} from 'lucide-react';

interface RedemptionItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: 'energy' | 'fertilizer' | 'credit' | 'product';
  icon: any;
  available: number;
  imageUrl: string;
}

export function RedemptionCenter() {
  const [userTokens, setUserTokens] = useState(3247);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleRedeem = (item: RedemptionItem) => {
    if (userTokens >= item.cost) {
      setUserTokens(prev => prev - item.cost);
      toast.success('Penukaran Berhasil!', {
        description: `${item.name} berhasil ditukar dengan ${item.cost} ECT. Token Anda sekarang: ${userTokens - item.cost} ECT`,
        duration: 4000,
      });
    } else {
      toast.error('Token Tidak Cukup', {
        description: `Anda memerlukan ${item.cost - userTokens} ECT lagi untuk menukar item ini.`,
        duration: 3000,
      });
    }
  };

  const redemptionItems: RedemptionItem[] = [
    {
      id: 'R-001',
      name: 'Subsidi Energi Bulanan',
      description: 'Potongan biaya energi senilai Rp 20,000',
      cost: 100,
      category: 'energy',
      icon: Zap,
      available: 50,
      imageUrl: 'https://images.unsplash.com/photo-1592016871124-4ca5fa965939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZ3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDk3OTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-002',
      name: 'Pupuk Organik 5kg',
      description: 'Pupuk organik berkualitas dari biodigester',
      cost: 50,
      category: 'fertilizer',
      icon: Leaf,
      available: 120,
      imageUrl: 'https://images.unsplash.com/photo-1590154743804-cf7c51dcbfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmVydGlsaXplciUyMGZhcm1pbmd8ZW58MXx8fHwxNzYwOTc5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-003',
      name: 'Pupuk Organik 10kg',
      description: 'Pupuk organik berkualitas dari biodigester',
      cost: 90,
      category: 'fertilizer',
      icon: Leaf,
      available: 85,
      imageUrl: 'https://images.unsplash.com/photo-1716903282677-3a1b5c936b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3N0JTIwb3JnYW5pYyUyMHdhc3RlfGVufDF8fHx8MTc2MDk0MDkwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-004',
      name: 'Kredit Mikro Rp 50,000',
      description: 'Dana mikro untuk usaha produktif',
      cost: 250,
      category: 'credit',
      icon: DollarSign,
      available: 20,
      imageUrl: 'https://images.unsplash.com/photo-1669748191314-7e0b628657dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGNvaW5zJTIwY2FzaHxlbnwxfHx8fDE3NjA5Mzk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-005',
      name: 'Kredit Mikro Rp 100,000',
      description: 'Dana mikro untuk usaha produktif',
      cost: 500,
      category: 'credit',
      icon: DollarSign,
      available: 15,
      imageUrl: 'https://images.unsplash.com/photo-1669748191314-7e0b628657dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGNvaW5zJTIwY2FzaHxlbnwxfHx8fDE3NjA5Mzk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-006',
      name: 'Produk UMKM Lokal',
      description: 'Berbagai produk dari UMKM komunitas',
      cost: 150,
      category: 'product',
      icon: Package,
      available: 40,
      imageUrl: 'https://images.unsplash.com/photo-1661260518151-114b0c165416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MDkxNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-007',
      name: 'Paket Bibit Sayuran',
      description: '10 jenis bibit sayuran organik',
      cost: 75,
      category: 'product',
      icon: Gift,
      available: 60,
      imageUrl: 'https://images.unsplash.com/photo-1628444756989-ea3f47c0ebb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzZWVkcyUyMGdhcmRlbnxlbnwxfHx8fDE3NjA5Nzk0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'R-008',
      name: 'Subsidi Energi Premium',
      description: 'Potongan biaya energi senilai Rp 50,000',
      cost: 250,
      category: 'energy',
      icon: Zap,
      available: 30,
      imageUrl: 'https://images.unsplash.com/photo-1592016871124-4ca5fa965939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZ3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDk3OTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const categories = [
    { id: 'all', name: 'Semua', icon: ShoppingCart },
    { id: 'energy', name: 'Subsidi Energi', icon: Zap },
    { id: 'fertilizer', name: 'Pupuk Organik', icon: Leaf },
    { id: 'credit', name: 'Dana Mikro', icon: DollarSign },
    { id: 'product', name: 'Produk Komunitas', icon: Package },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'energy': return 'bg-yellow-100 text-yellow-700';
      case 'fertilizer': return 'bg-green-100 text-green-700';
      case 'credit': return 'bg-blue-100 text-blue-700';
      case 'product': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? redemptionItems 
    : redemptionItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* User Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 mb-1">Saldo EcoToken Anda</p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-4xl text-green-900">{userTokens.toLocaleString('id-ID')}</h2>
                  <span className="text-green-600">ECT</span>
                </div>
                <p className="text-sm text-green-600 mt-1">≈ Rp {(userTokens * 200).toLocaleString('id-ID')}</p>
              </div>
              <motion.div 
                className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Coins className="w-8 h-8 text-green-700" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Categories */}
      <motion.div 
        className="flex gap-3 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className="flex-shrink-0"
                onClick={() => setSelectedCategory(cat.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {cat.name}
              </Button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Redemption Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const Icon = item.icon;
          const canAfford = userTokens >= item.cost;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card 
                className={`hover:shadow-lg transition-shadow overflow-hidden ${
                  !canAfford ? 'opacity-60' : ''
                }`}
              >
                {/* Product Image */}
                <motion.div 
                  className="h-48 overflow-hidden bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(item.category)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.available} tersedia
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Harga</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl text-green-900">{item.cost}</span>
                          <span className="text-green-600 text-sm">ECT</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Nilai</p>
                        <p className="text-green-700">
                          Rp {(item.cost * 200).toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>

                    {!canAfford && (
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Token Anda</span>
                          <span>{userTokens} / {item.cost} ECT</span>
                        </div>
                        <Progress value={(userTokens / item.cost) * 100} className="h-2" />
                      </div>
                    )}

                    <Button 
                      className="w-full"
                      disabled={!canAfford}
                      variant={canAfford ? "default" : "secondary"}
                      onClick={() => handleRedeem(item)}
                    >
                      {canAfford ? (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Tukar Sekarang
                        </>
                      ) : (
                        <>Token Tidak Cukup</>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Redemption Stats */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle>Statistik Penukaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl text-green-600 mb-1">42</div>
              <p className="text-sm text-green-700">Total Penukaran</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-emerald-600 mb-1">1,850</div>
              <p className="text-sm text-emerald-700">Token Terpakai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-teal-600 mb-1">Rp 370k</div>
              <p className="text-sm text-teal-700">Total Nilai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-lime-600 mb-1">85%</div>
              <p className="text-sm text-lime-700">Kepuasan</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>Cara Menukar EcoToken</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-700">
                1
              </div>
              <p className="text-sm">Pilih item yang ingin ditukar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-700">
                2
              </div>
              <p className="text-sm">Pastikan saldo token mencukupi</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-700">
                3
              </div>
              <p className="text-sm">Klik tombol "Tukar Sekarang"</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-700">
                4
              </div>
              <p className="text-sm">Ambil reward di kantor desa</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}