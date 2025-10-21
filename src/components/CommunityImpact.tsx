"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Globe, Users, TrendingUp, Award, Leaf, Zap, Trophy } from 'lucide-react';

export function CommunityImpact() {
  const globalStats = [
    {
      label: 'Total Members',
      value: '12,547',
      change: '+1,234',
      icon: Users,
      color: 'blue'
    },
    {
      label: 'Biogas Produced',
      value: '847,392 m³',
      change: '+12,450 m³',
      icon: Zap,
      color: 'yellow'
    },
    {
      label: 'CO₂ Offset',
      value: '523,847 kg',
      change: '+8,234 kg',
      icon: Leaf,
      color: 'green'
    },
    {
      label: 'Tokens Circulated',
      value: '28.4M ECT',
      change: '+2.3M',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Sarah Johnson',
      location: 'Jakarta, Indonesia',
      production: '8,542 m³',
      tokens: '12,847 ECT',
      avatar: 'SJ',
      badge: 'platinum'
    },
    {
      rank: 2,
      name: 'Ahmad Rizki',
      location: 'Bandung, Indonesia',
      production: '7,831 m³',
      tokens: '11,523 ECT',
      avatar: 'AR',
      badge: 'platinum'
    },
    {
      rank: 3,
      name: 'Maria Santos',
      location: 'Surabaya, Indonesia',
      production: '7,245 m³',
      tokens: '10,892 ECT',
      avatar: 'MS',
      badge: 'gold'
    },
    {
      rank: 4,
      name: 'John Doe',
      location: 'Yogyakarta, Indonesia',
      production: '6,732 m³',
      tokens: '9,845 ECT',
      avatar: 'JD',
      badge: 'gold'
    },
    {
      rank: 5,
      name: 'Lisa Chen',
      location: 'Semarang, Indonesia',
      production: '6,124 m³',
      tokens: '8,976 ECT',
      avatar: 'LC',
      badge: 'gold'
    }
  ];

  const achievements = [
    {
      title: 'Pioneer Producer',
      description: 'First 100 users to join EcoMeter',
      progress: 100,
      earned: true,
      icon: Trophy
    },
    {
      title: 'Green Champion',
      description: 'Offset 1,000 kg of CO₂',
      progress: 84,
      earned: false,
      icon: Leaf
    },
    {
      title: 'Community Builder',
      description: 'Refer 10 new members',
      progress: 60,
      earned: false,
      icon: Users
    },
    {
      title: 'Energy Master',
      description: 'Produce 2,000 m³ of biogas',
      progress: 62,
      earned: false,
      icon: Zap
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
      case 'gold':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Global Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6" />
              <CardTitle className="text-white">Global Impact</CardTitle>
            </div>
            <CardDescription className="text-green-100">
              Our collective contribution to sustainability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {globalStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <stat.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-green-100">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-green-100 mt-1">{stat.change} this month</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Community Leaderboard</CardTitle>
              <CardDescription>Top producers this month</CardDescription>
            </div>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  user.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                    user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                    user.rank === 3 ? 'bg-orange-400 text-orange-900' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    #{user.rank}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-green-100 text-green-700">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <Badge className={getBadgeColor(user.badge)}>
                        {user.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">{user.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{user.production}</p>
                  <p className="text-sm text-gray-500">{user.tokens}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600" />
            <CardTitle>Your Achievements</CardTitle>
          </div>
          <CardDescription>Track your milestones and unlock rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-2 ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-purple-600' : 'bg-gray-300'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.earned ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      {achievement.earned && (
                        <Badge className="bg-purple-600">Earned</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    <div className="space-y-1">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-gray-500">{achievement.progress}% Complete</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
