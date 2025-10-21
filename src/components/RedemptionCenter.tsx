"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Gift, Zap, Wallet, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

export function RedemptionCenter() {
  const [userBalance] = useState(3542);
  const [redeemedRewards] = useState([
    {
      id: 1,
      name: 'Grocery Store Voucher',
      value: 50,
      redeemedOn: '2025-10-18',
      status: 'used',
      code: 'ECO-GROC-8472'
    },
    {
      id: 2,
      name: 'Electricity Credit',
      value: 100,
      redeemedOn: '2025-10-10',
      status: 'active',
      code: 'ECO-ELEC-2938'
    }
  ]);

  const rewards = [
    {
      id: 1,
      category: 'voucher',
      name: 'Grocery Store Voucher',
      description: 'Redeemable at major grocery stores',
      cost: 50,
      value: '$5',
      icon: ShoppingBag,
      available: true,
      stock: 250
    },
    {
      id: 2,
      category: 'voucher',
      name: 'Restaurant Dining Voucher',
      description: 'Valid at partner restaurants',
      cost: 100,
      value: '$10',
      icon: Gift,
      available: true,
      stock: 180
    },
    {
      id: 3,
      category: 'utility',
      name: 'Electricity Credit',
      description: 'Direct credit to your electricity bill',
      cost: 200,
      value: '$20',
      icon: Zap,
      available: true,
      stock: 150
    },
    {
      id: 4,
      category: 'utility',
      name: 'Water Bill Credit',
      description: 'Credit for your water utility',
      cost: 150,
      value: '$15',
      icon: Zap,
      available: true,
      stock: 200
    },
    {
      id: 5,
      category: 'voucher',
      name: 'Fashion Store Voucher',
      description: 'Shop at partner fashion outlets',
      cost: 300,
      value: '$30',
      icon: ShoppingBag,
      available: true,
      stock: 100
    },
    {
      id: 6,
      category: 'voucher',
      name: 'Electronics Voucher',
      description: 'Redeem at electronics stores',
      cost: 500,
      value: '$50',
      icon: Gift,
      available: true,
      stock: 75
    },
    {
      id: 7,
      category: 'utility',
      name: 'Internet Credit',
      description: 'Credit for internet subscription',
      cost: 250,
      value: '$25',
      icon: Zap,
      available: true,
      stock: 120
    },
    {
      id: 8,
      category: 'voucher',
      name: 'Spa & Wellness Voucher',
      description: 'Relax at partner wellness centers',
      cost: 400,
      value: '$40',
      icon: Gift,
      available: true,
      stock: 50
    }
  ];

  const handleRedeem = (reward: typeof rewards[0]) => {
    if (userBalance >= reward.cost) {
      toast.success('Reward Redeemed!', {
        description: `Successfully redeemed ${reward.name} for ${reward.cost} ECT`
      });
    } else {
      toast.error('Insufficient Balance', {
        description: `You need ${reward.cost - userBalance} more ECT to redeem this reward`
      });
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case 'voucher':
        return 'text-purple-600 bg-purple-100';
      case 'utility':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* User Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-br from-purple-600 to-purple-800 text-white border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6" />
                <CardTitle className="text-white">Available Balance</CardTitle>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                EcoWallet
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold">{userBalance.toLocaleString()}</span>
              <span className="text-2xl text-purple-100">ECT</span>
            </div>
            <p className="text-purple-100 text-sm">
              Ready to redeem for rewards and utilities
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Rewards Catalog */}
      <Card>
        <CardHeader>
          <CardTitle>Rewards Catalog</CardTitle>
          <CardDescription>Redeem your EcoTokens for amazing rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Rewards</TabsTrigger>
              <TabsTrigger value="voucher">Vouchers</TabsTrigger>
              <TabsTrigger value="utility">Utilities</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rewards.map((reward, index) => (
                  <motion.div
                    key={reward.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColor(reward.category)}`}>
                            <reward.icon className="w-6 h-6" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {reward.stock} left
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{reward.name}</CardTitle>
                        <CardDescription>{reward.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-sm text-gray-500">Cost</p>
                            <p className="text-2xl font-bold text-purple-600">{reward.cost} ECT</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Value</p>
                            <p className="text-xl font-semibold text-green-600">{reward.value}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => handleRedeem(reward)}
                          disabled={userBalance < reward.cost}
                          className="w-full"
                          variant={userBalance >= reward.cost ? 'default' : 'secondary'}
                        >
                          {userBalance >= reward.cost ? 'Redeem Now' : 'Insufficient Balance'}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="voucher" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rewards.filter(r => r.category === 'voucher').map((reward, index) => (
                  <motion.div
                    key={reward.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColor(reward.category)}`}>
                            <reward.icon className="w-6 h-6" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {reward.stock} left
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{reward.name}</CardTitle>
                        <CardDescription>{reward.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-sm text-gray-500">Cost</p>
                            <p className="text-2xl font-bold text-purple-600">{reward.cost} ECT</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Value</p>
                            <p className="text-xl font-semibold text-green-600">{reward.value}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => handleRedeem(reward)}
                          disabled={userBalance < reward.cost}
                          className="w-full"
                          variant={userBalance >= reward.cost ? 'default' : 'secondary'}
                        >
                          {userBalance >= reward.cost ? 'Redeem Now' : 'Insufficient Balance'}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="utility" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rewards.filter(r => r.category === 'utility').map((reward, index) => (
                  <motion.div
                    key={reward.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColor(reward.category)}`}>
                            <reward.icon className="w-6 h-6" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {reward.stock} left
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{reward.name}</CardTitle>
                        <CardDescription>{reward.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-sm text-gray-500">Cost</p>
                            <p className="text-2xl font-bold text-purple-600">{reward.cost} ECT</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Value</p>
                            <p className="text-xl font-semibold text-green-600">{reward.value}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => handleRedeem(reward)}
                          disabled={userBalance < reward.cost}
                          className="w-full"
                          variant={userBalance >= reward.cost ? 'default' : 'secondary'}
                        >
                          {userBalance >= reward.cost ? 'Redeem Now' : 'Insufficient Balance'}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Redemption History */}
      <Card>
        <CardHeader>
          <CardTitle>Redemption History</CardTitle>
          <CardDescription>Your recently redeemed rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {redeemedRewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    reward.status === 'active' ? 'bg-green-100' : 'bg-gray-200'
                  }`}>
                    {reward.status === 'active' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{reward.name}</p>
                    <p className="text-sm text-gray-500">Code: {reward.code}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={reward.status === 'active' ? 'default' : 'secondary'} className={
                    reward.status === 'active' ? 'bg-green-600' : ''
                  }>
                    {reward.status}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{reward.redeemedOn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
