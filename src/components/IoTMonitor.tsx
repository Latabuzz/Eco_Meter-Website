"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Thermometer, Droplet, Gauge, Activity, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export function IoTMonitor() {
  const [sensorData, setSensorData] = useState({
    temperature: 38.5,
    pressure: 1.2,
    gasFlow: 15.8,
    humidity: 65,
    ph: 7.2,
    methaneLevel: 78
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 0.5,
        pressure: prev.pressure + (Math.random() - 0.5) * 0.05,
        gasFlow: prev.gasFlow + (Math.random() - 0.5) * 0.3,
        humidity: prev.humidity + (Math.random() - 0.5) * 1,
        ph: prev.ph + (Math.random() - 0.5) * 0.1,
        methaneLevel: Math.max(70, Math.min(85, prev.methaneLevel + (Math.random() - 0.5) * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sensors = [
    {
      name: 'Temperature',
      value: sensorData.temperature.toFixed(1),
      unit: '°C',
      icon: Thermometer,
      status: sensorData.temperature >= 35 && sensorData.temperature <= 40 ? 'optimal' : 'warning',
      optimal: '35-40°C',
      color: 'red'
    },
    {
      name: 'Pressure',
      value: sensorData.pressure.toFixed(2),
      unit: 'bar',
      icon: Gauge,
      status: sensorData.pressure >= 1.0 && sensorData.pressure <= 1.5 ? 'optimal' : 'warning',
      optimal: '1.0-1.5 bar',
      color: 'blue'
    },
    {
      name: 'Gas Flow',
      value: sensorData.gasFlow.toFixed(1),
      unit: 'm³/h',
      icon: Zap,
      status: sensorData.gasFlow >= 10 ? 'optimal' : 'warning',
      optimal: '≥10 m³/h',
      color: 'yellow'
    },
    {
      name: 'Humidity',
      value: sensorData.humidity.toFixed(1),
      unit: '%',
      icon: Droplet,
      status: sensorData.humidity >= 60 && sensorData.humidity <= 70 ? 'optimal' : 'warning',
      optimal: '60-70%',
      color: 'cyan'
    },
    {
      name: 'pH Level',
      value: sensorData.ph.toFixed(1),
      unit: 'pH',
      icon: Activity,
      status: sensorData.ph >= 6.8 && sensorData.ph <= 7.5 ? 'optimal' : 'warning',
      optimal: '6.8-7.5',
      color: 'green'
    },
    {
      name: 'Methane Content',
      value: sensorData.methaneLevel.toFixed(1),
      unit: '%',
      icon: Activity,
      status: sensorData.methaneLevel >= 75 ? 'optimal' : 'warning',
      optimal: '≥75%',
      color: 'purple'
    }
  ];

  const systemStatus = sensors.every(s => s.status === 'optimal');

  return (
    <div className="space-y-6">
      {/* System Status Header */}
      <Card className={`${systemStatus ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {systemStatus ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              )}
              <div>
                <CardTitle className={systemStatus ? 'text-green-900' : 'text-yellow-900'}>
                  System Status: {systemStatus ? 'Optimal' : 'Attention Required'}
                </CardTitle>
                <CardDescription className={systemStatus ? 'text-green-700' : 'text-yellow-700'}>
                  {systemStatus 
                    ? 'All sensors operating within optimal parameters' 
                    : 'Some sensors require attention'}
                </CardDescription>
              </div>
            </div>
            <Badge variant={systemStatus ? 'default' : 'secondary'} className={systemStatus ? 'bg-green-600' : 'bg-yellow-600'}>
              {systemStatus ? 'ONLINE' : 'MONITORING'}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Sensor Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sensors.map((sensor, index) => (
          <motion.div
            key={sensor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 bg-${sensor.color}-100 rounded-full flex items-center justify-center`}>
                      <sensor.icon className={`w-5 h-5 text-${sensor.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{sensor.name}</CardTitle>
                      <CardDescription className="text-xs">Optimal: {sensor.optimal}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={sensor.status === 'optimal' ? 'default' : 'secondary'} 
                         className={sensor.status === 'optimal' ? 'bg-green-600' : 'bg-yellow-600'}>
                    {sensor.status === 'optimal' ? 'OK' : 'WARN'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">{sensor.value}</span>
                    <span className="text-lg text-gray-600">{sensor.unit}</span>
                  </div>
                  <motion.div
                    key={sensor.value}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="origin-left"
                  >
                    <Progress 
                      value={parseFloat(sensor.value) % 100} 
                      className={`h-2 ${sensor.status === 'optimal' ? 'bg-green-200' : 'bg-yellow-200'}`} 
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Production Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Production Metrics</CardTitle>
          <CardDescription>Real-time biogas production statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Today&apos;s Production</span>
                <Badge>Live</Badge>
              </div>
              <div className="text-2xl font-bold text-green-900">
                {(sensorData.gasFlow * 8).toFixed(1)} m³
              </div>
              <Progress value={68} className="h-2" />
              <span className="text-xs text-gray-500">68% of daily target</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Week</span>
                <Badge variant="secondary">Trending</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-900">
                {(sensorData.gasFlow * 8 * 7 * 0.85).toFixed(1)} m³
              </div>
              <Progress value={82} className="h-2" />
              <span className="text-xs text-gray-500">82% of weekly target</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Efficiency</span>
                <Badge className="bg-purple-600">Optimal</Badge>
              </div>
              <div className="text-2xl font-bold text-purple-900">
                {sensorData.methaneLevel.toFixed(1)}%
              </div>
              <Progress value={sensorData.methaneLevel} className="h-2" />
              <span className="text-xs text-gray-500">Methane content ratio</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts & Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Recent notifications and system events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {!systemStatus && (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-900">Parameter Warning</p>
                  <p className="text-xs text-yellow-700">Some sensors are outside optimal range</p>
                </div>
                <span className="text-xs text-yellow-600">Just now</span>
              </div>
            )}
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-green-900">Production Target Reached</p>
                <p className="text-xs text-green-700">Daily production goal achieved at 14:30</p>
              </div>
              <span className="text-xs text-green-600">2h ago</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">System Update</p>
                <p className="text-xs text-blue-700">All sensors calibrated successfully</p>
              </div>
              <span className="text-xs text-blue-600">5h ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
