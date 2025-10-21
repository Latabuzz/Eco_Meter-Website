"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wallet, ArrowUpRight, ArrowDownLeft, History, TrendingUp, Coins } from 'lucide-react';
import { toast } from 'sonner';

export function TokenWallet() {
  const [balance] = useState(3542);
  const [transactions] = useState([
    {
      id: 1,
      type: 'earn',
      amount: 120,
      description: 'Biogas Production Reward',
      date: '2025-10-20 14:30',
      status: 'completed'
    },
    {
      id: 2,
      type: 'earn',
      amount: 85,
      description: 'Daily Target Achievement',
      date: '2025-10-19 18:45',
      status: 'completed'
    },
    {
      id: 3,
      type: 'redeem',
      amount: -50,
      description: 'Grocery Voucher Redemption',
      date: '2025-10-18 10:15',
      status: 'completed'
    },
    {
      id: 4,
      type: 'earn',
      amount: 95,
      description: 'Weekly Bonus',
      date: '2025-10-17 09:00',
      status: 'completed'
    },
    {
      id: 5,
      type: 'earn',
      amount: 150,
      description: 'Community Contribution',
      date: '2025-10-16 16:20',
      status: 'completed'
    }
  ]);

  const handleSendTokens = () => {
    toast.info('Send Tokens', {
      description: 'Transfer feature coming soon'
    });
  };

  const handleRequestTokens = () => {
    toast.info('Request Tokens', {
      description: 'Request feature coming soon'
    });
  };

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6" />
                <CardTitle className="text-white">EcoWallet</CardTitle>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                Active
              </Badge>
            </div>
            <CardDescription className="text-green-100">
              Your EcoToken Balance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{balance.toLocaleString()}</span>
                  <span className="text-2xl text-green-100">ECT</span>
                </div>
                <p className="text-green-100 text-sm mt-2">
                  ≈ ${(balance * 0.1).toFixed(2)} USD
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleSendTokens}
                  className="flex-1 bg-white text-green-600 hover:bg-green-50"
                >
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Send
                </Button>
                <Button 
                  onClick={handleRequestTokens}
                  variant="outline" 
                  className="flex-1 bg-transparent border-white text-white hover:bg-white/10"
                >
                  <ArrowDownLeft className="w-4 h-4 mr-2" />
                  Request
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">+4,250 ECT</div>
                  <p className="text-xs text-gray-500">All time earnings</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Redeemed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-orange-600">-708 ECT</div>
                  <p className="text-xs text-gray-500">Rewards claimed</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>This Month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-600">+542 ECT</div>
                  <p className="text-xs text-gray-500">Monthly earnings</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Coins className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Your recent token activities</CardDescription>
            </div>
            <History className="w-5 h-5 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="earned">Earned</TabsTrigger>
              <TabsTrigger value="redeemed">Redeemed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-3">
              {transactions.map((tx, index) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'earn' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {tx.type === 'earn' ? (
                        <ArrowDownLeft className={`w-5 h-5 text-green-600`} />
                      ) : (
                        <ArrowUpRight className={`w-5 h-5 text-orange-600`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{tx.description}</p>
                      <p className="text-sm text-gray-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      tx.type === 'earn' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} ECT
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {tx.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="earned" className="space-y-3">
              {transactions.filter(tx => tx.type === 'earn').map((tx, index) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowDownLeft className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{tx.description}</p>
                      <p className="text-sm text-gray-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">+{tx.amount} ECT</p>
                    <Badge variant="secondary" className="text-xs">{tx.status}</Badge>
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="redeemed" className="space-y-3">
              {transactions.filter(tx => tx.type === 'redeem').map((tx, index) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{tx.description}</p>
                      <p className="text-sm text-gray-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">{tx.amount} ECT</p>
                    <Badge variant="secondary" className="text-xs">{tx.status}</Badge>
                  </div>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
