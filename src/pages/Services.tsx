import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Scissors,
  Droplets,
  Syringe,
  Crown,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { 
      id: 1, 
      name: 'Стрижка', 
      icon: Scissors, 
      price: '2 500 ₽', 
      duration: '60 мин', 
      popularity: 85, 
      color: 'bg-pink',
      description: 'Модельная стрижка по стандарту породы'
    },
    { 
      id: 2, 
      name: 'Мытьё', 
      icon: Droplets, 
      price: '1 200 ₽', 
      duration: '30 мин', 
      popularity: 72, 
      color: 'bg-sky',
      description: 'Мытьё с профессиональной косметикой'
    },
    { 
      id: 3, 
      name: 'Когти', 
      icon: Syringe, 
      price: '500 ₽', 
      duration: '15 мин', 
      popularity: 60, 
      color: 'bg-mint',
      description: 'Стрижка и подпиливание когтей'
    },
    { 
      id: 4, 
      name: 'Комплекс', 
      icon: Crown, 
      price: '3 500 ₽', 
      duration: '90 мин', 
      popularity: 90, 
      color: 'bg-peach',
      description: 'Стрижка + мытьё + когти + SPA'
    },
    { 
      id: 5, 
      name: 'SPA-уход', 
      icon: Sparkles, 
      price: '1 800 ₽', 
      duration: '45 мин', 
      popularity: 45, 
      color: 'bg-lavender',
      description: 'Маски, кондиционирование, массаж'
    },
  ];

  return (
    <>
      {/* Заголовок */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl font-fredoka font-semibold text-gray-700">Услуги и цены</h2>
          <p className="text-sm text-gray-400 mt-1">{services.length} активных услуг</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-lavender to-pink rounded-4xl shadow-soft text-sm font-medium text-gray-600 hover:shadow-glow transition-all">
          <Plus className="w-4 h-4" />
          Добавить услугу
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка — список услуг */}
        <div className="lg:col-span-2 space-y-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ x: 5 }}
                className="bg-white rounded-4xl p-5 shadow-soft flex items-center gap-4"
              >
                <div className={`w-14 h-14 ${service.color} rounded-3xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-fredoka font-semibold text-gray-700">{service.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">{service.duration}</span>
                  </div>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-xl font-fredoka font-bold text-gray-700">{service.price}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                      <Edit3 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-rose-50 flex items-center justify-center">
                      <Trash2 className="w-4 h-4 text-rose-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Правая колонка — статистика */}
        <div className="space-y-5">
          {/* Популярность услуг */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-4xl p-6 shadow-soft-lg"
          >
            <h3 className="font-fredoka font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-pink" />
              Популярность услуг
            </h3>
            <div className="space-y-4">
              {services.map((service, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{service.name}</span>
                    <span className="text-sm font-fredoka font-semibold text-gray-700">{service.popularity}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${service.popularity}%` }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                      className={`h-full ${service.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Финансовая статистика */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-lavender to-pink rounded-4xl p-6 shadow-soft-lg"
          >
            <h3 className="font-fredoka font-semibold text-gray-700 mb-4">Финансы</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> Средний чек
                </p>
                <p className="text-3xl font-fredoka font-bold text-gray-700">2 840 ₽</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Самая долгая услуга
                </p>
                <p className="text-lg font-fredoka font-semibold text-gray-700">Комплекс — 90 мин</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Самая популярная</p>
                <p className="text-lg font-fredoka font-semibold text-gray-700">Комплекс (90% клиентов)</p>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-white/60 rounded-4xl text-sm font-medium text-gray-600 flex items-center justify-center gap-2 hover:bg-white transition-colors">
              Подробная статистика
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Пакетные предложения */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-4xl p-6 shadow-soft-lg"
          >
            <h3 className="font-fredoka font-semibold text-gray-700 mb-3">Пакетные предложения</h3>
            
            <div className="space-y-3">
              <div className="p-4 bg-mint/30 rounded-3xl">
                <p className="font-medium text-gray-700">Для новых клиентов</p>
                <p className="text-sm text-gray-500 mt-1">Скидка 15% на первый визит</p>
              </div>
              <div className="p-4 bg-sky/30 rounded-3xl">
                <p className="font-medium text-gray-700">Постоянным клиентам</p>
                <p className="text-sm text-gray-500 mt-1">Каждый 5-й визит — скидка 20%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}