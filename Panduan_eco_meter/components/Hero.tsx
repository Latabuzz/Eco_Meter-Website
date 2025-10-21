import { ArrowRight, Leaf, Coins, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface HeroProps {
  onTabChange: (tabName: string) => void;
}

export function Hero({ onTabChange }: HeroProps) {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleStartMonitoring = () => {
    onTabChange('dashboard');
    scrollToContent();
  };

  const handleLearnMore = () => {
    onTabChange('community');
    scrollToContent();
  };

  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Image Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673208683808-9f3498b7d10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9nYXMlMjBwbGFudCUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjA5Nzk0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Renewable Energy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="w-4 h-4" />
            <span>Enviro-Ders 2025</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            EcoMeter
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-green-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Blockchain for a Sustainable Future
          </motion.p>
          
          <motion.p 
            className="text-lg text-green-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sistem IoT berbasis blockchain untuk memantau dan mengelola distribusi biogas 
            secara transparan, efisien, dan berkelanjutan.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={handleStartMonitoring}
            >
              Mulai Monitoring
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={handleLearnMore}
            >
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
            {[
              {
                icon: BarChart3,
                title: 'IoT Monitoring',
                desc: 'Real-time tracking konsumsi biogas dengan sensor pintar',
                delay: 0.6
              },
              {
                icon: Coins,
                title: 'EcoToken Rewards',
                desc: 'Dapatkan token digital dari penggunaan energi bersih',
                delay: 0.7
              },
              {
                icon: Leaf,
                title: 'Carbon Credits',
                desc: 'Kontribusi langsung terhadap pengurangan emisi karbon',
                delay: 0.8
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-green-100 text-sm">{feature.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}