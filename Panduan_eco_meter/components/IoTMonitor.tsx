import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  Activity, 
  Gauge, 
  Thermometer, 
  Wind, 
  AlertCircle,
  CheckCircle,
  MapPin
} from 'lucide-react';

interface DeviceStatus {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  flowRate: number;
  pressure: number;
  temperature: number;
  lastUpdate: string;
}

export function IoTMonitor() {
  const [devices, setDevices] = useState<DeviceStatus[]>([
    {
      id: 'ECM-001',
      name: 'Sensor RT 01',
      location: 'Jl. Tanjung Merah No. 12',
      status: 'online',
      flowRate: 0.028,
      pressure: 8.5,
      temperature: 32,
      lastUpdate: '2 detik lalu'
    },
    {
      id: 'ECM-002',
      name: 'Sensor RT 02',
      location: 'Jl. Tanjung Merah No. 15',
      status: 'online',
      flowRate: 0.032,
      pressure: 8.8,
      temperature: 33,
      lastUpdate: '5 detik lalu'
    },
    {
      id: 'ECM-003',
      name: 'Sensor RT 03',
      location: 'Jl. Pantai Barat No. 8',
      status: 'online',
      flowRate: 0.025,
      pressure: 8.3,
      temperature: 31,
      lastUpdate: '3 detik lalu'
    },
    {
      id: 'ECM-004',
      name: 'Sensor RT 04',
      location: 'Jl. Pantai Barat No. 11',
      status: 'warning',
      flowRate: 0.015,
      pressure: 7.2,
      temperature: 30,
      lastUpdate: '8 detik lalu'
    },
    {
      id: 'ECM-005',
      name: 'Sensor RT 05',
      location: 'Jl. Nelayan Sejahtera No. 5',
      status: 'online',
      flowRate: 0.030,
      pressure: 8.6,
      temperature: 32,
      lastUpdate: '1 detik lalu'
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prev => prev.map(device => ({
        ...device,
        flowRate: +(0.015 + Math.random() * 0.025).toFixed(3),
        pressure: +(7.5 + Math.random() * 1.5).toFixed(1),
        temperature: +(30 + Math.random() * 4).toFixed(0),
        lastUpdate: `${Math.floor(Math.random() * 10)} detik lalu`,
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Online
        </Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          <AlertCircle className="w-3 h-3 mr-1" />
          Peringatan
        </Badge>;
      case 'offline':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
          <AlertCircle className="w-3 h-3 mr-1" />
          Offline
        </Badge>;
      default:
        return null;
    }
  };

  const avgFlowRate = devices.reduce((acc, d) => acc + d.flowRate, 0) / devices.length;
  const avgPressure = devices.reduce((acc, d) => acc + d.pressure, 0) / devices.length;
  const onlineDevices = devices.filter(d => d.status === 'online').length;

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Activity, title: 'Perangkat Aktif', value: `${onlineDevices}/${devices.length}`, color: 'green', delay: 0.1 },
          { icon: Gauge, title: 'Rata-rata Flow Rate', value: avgFlowRate.toFixed(3), unit: 'm³/h', color: 'emerald', delay: 0.2 },
          { icon: Wind, title: 'Rata-rata Tekanan', value: avgPressure.toFixed(1), unit: 'kPa', color: 'teal', delay: 0.3 },
          { icon: Thermometer, title: 'Suhu Rata-rata', value: 32, unit: '°C', color: 'lime', delay: 0.4 }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: stat.delay }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className={`border-${stat.color}-200`}>
                <CardHeader className="pb-3">
                  <CardTitle className={`text-sm text-${stat.color}-700 flex items-center gap-2`}>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stat.title === 'Perangkat Aktif' ? (
                    <>
                      <div className={`text-3xl text-${stat.color}-900`}>{stat.value}</div>
                      <Progress value={(onlineDevices / devices.length) * 100} className="mt-3 h-2" />
                    </>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl text-${stat.color}-900`}>
                        {typeof stat.value === 'string' ? stat.value : <AnimatedCounter value={stat.value} decimals={1} />}
                      </span>
                      {stat.unit && <span className={`text-${stat.color}-600`}>{stat.unit}</span>}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Device List */}
      <Card>
        <CardHeader>
          <CardTitle>Status Perangkat IoT</CardTitle>
          <CardDescription>Monitoring real-time dari semua sensor EcoMeter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-green-900">{device.name}</h3>
                          {getStatusBadge(device.status)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          {device.location}
                        </div>
                        <p className="text-xs text-gray-500">ID: {device.id} • {device.lastUpdate}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                            <Gauge className="w-4 h-4" />
                          </div>
                          <div className="text-2xl text-green-900">{device.flowRate}</div>
                          <p className="text-xs text-gray-600">m³/h</p>
                        </div>

                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                            <Wind className="w-4 h-4" />
                          </div>
                          <div className="text-2xl text-emerald-900">{device.pressure}</div>
                          <p className="text-xs text-gray-600">kPa</p>
                        </div>

                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-teal-600 mb-1">
                            <Thermometer className="w-4 h-4" />
                          </div>
                          <div className="text-2xl text-teal-900">{device.temperature}</div>
                          <p className="text-xs text-gray-600">°C</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle>Informasi Sistem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 mb-1">Lokasi Biodigester</p>
              <p className="text-green-900">Pulau Manado Tua, Sulawesi Utara</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Kapasitas Total</p>
              <p className="text-green-900">5 m³/hari</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Teknologi Sensor</p>
              <p className="text-green-900">NodeMCU ESP32 + Flow Meter YF-S201</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Blockchain Network</p>
              <p className="text-green-900">Flow Blockchain (Testnet)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}