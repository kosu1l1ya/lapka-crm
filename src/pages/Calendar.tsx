import { motion } from 'framer-motion';
import { Plus, Sparkles, TrendingUp, Heart, ChevronRight, MoreHorizontal, Clock, Droplets, Syringe, Crown, Scissors, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function CalendarPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка — точно как было */}
        <div className="space-y-6">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-4xl p-6 shadow-soft-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-fredoka font-semibold text-gray-700 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink" />
                Сегодня, 20 апреля
              </h2>
              <span className="text-2xl font-fredoka font-bold text-gray-700">6</span>
            </div>
            <div className="space-y-3">
              {[
                { time: '10:00', pet: 'Боня 🐩', service: 'Стрижка', color: 'bg-pink' },
                { time: '12:30', pet: 'Мурзик 🐱', service: 'Мытьё', color: 'bg-sky' },
                { time: '15:00', pet: 'Кеша 🦜', service: 'Когти', color: 'bg-mint' },
              ].map((apt, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-3xl hover:bg-gray-50 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-3xl ${apt.color} flex items-center justify-center text-2xl`}>
                    {apt.pet.includes('🐩') ? '🐩' : apt.pet.includes('🐱') ? '🐱' : '🦜'}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">{apt.pet}</p>
                    <p className="text-xs text-gray-400">{apt.service}</p>
                  </div>
                  <span className="font-fredoka font-medium text-gray-600">{apt.time}</span>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-lavender to-pink rounded-4xl text-sm font-medium text-gray-600 flex items-center justify-center gap-2 hover:shadow-glow transition-shadow">
              <Plus className="w-4 h-4" />
              Новая запись
            </button>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-mint to-sky rounded-4xl p-6 shadow-soft-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <h3 className="font-fredoka font-semibold text-gray-700">За эту неделю</h3>
            </div>
            <div className="text-4xl font-fredoka font-bold text-gray-700 mb-2">24 500 ₽</div>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <span className="text-green-600">↑ 12%</span> к прошлой неделе
            </p>
            <div className="flex items-end gap-1 mt-6 h-12">
              {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: h }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex-1 bg-white/60 rounded-full"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Правая колонка */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-fredoka font-semibold text-gray-700 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink fill-pink" />
              Наши пушистые гости
            </h2>
            <button className="text-sm text-gray-400 flex items-center gap-1 hover:text-gray-600">
              Все питомцы <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Боня', emoji: '🐩', breed: 'Мальтийская болонка', age: '2 года', owner: 'Анна', color: 'bg-pink', notes: 'Любит печеньки ❤️', nextVisit: 'Сегодня 10:00' },
              { name: 'Мурзик', emoji: '🐱', breed: 'Британский кот', age: '4 года', owner: 'Дмитрий', color: 'bg-sky', notes: 'Немного пугливый', nextVisit: 'Сегодня 12:30' },
              { name: 'Джеки', emoji: '🐕', breed: 'Корги', age: '1.5 года', owner: 'Елена', color: 'bg-peach', notes: 'Очень активный ⚡', nextVisit: 'Завтра 14:00' },
              { name: 'Соня', emoji: '😺', breed: 'Персидская кошка', age: '5 лет', owner: 'Ольга', color: 'bg-lavender', notes: 'Любит спать на столе 😴', nextVisit: '23 апр 11:00' },
            ].map((pet, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
                className={`${pet.color} rounded-4xl p-5 cursor-pointer transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-white/60 rounded-4xl flex items-center justify-center text-5xl">
                    {pet.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-fredoka font-semibold text-gray-700">{pet.name}</h3>
                      <span className="text-xs bg-white/60 px-2 py-1 rounded-full text-gray-500">{pet.age}</span>
                    </div>
                    <p className="text-sm text-gray-500">{pet.breed}</p>
                    <p className="text-xs text-gray-400 mt-1">👤 {pet.owner}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-sm text-gray-600 italic">"{pet.notes}"</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-white/50 px-3 py-1 rounded-full text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {pet.nextVisit}
                    </span>
                    <button className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center hover:bg-white">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-4xl p-6 shadow-soft-lg"
          >
            <h3 className="font-fredoka font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-pink" />
              Услуги и цены
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Стрижка', price: '2 500 ₽', icon: Scissors, color: 'bg-pink' },
                { name: 'Мытьё', price: '1 200 ₽', icon: Droplets, color: 'bg-sky' },
                { name: 'Когти', price: '500 ₽', icon: Syringe, color: 'bg-mint' },
                { name: 'Комплекс', price: '3 500 ₽', icon: Crown, color: 'bg-peach' },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`${service.color} rounded-3xl p-4 cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/60 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{service.name}</p>
                      <p className="text-lg font-fredoka font-semibold text-gray-600">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Нижняя плашка */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-white/70 backdrop-blur-sm rounded-5xl p-4 shadow-soft flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lavender rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">+7 (999) 123-45-67</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">hello@lapka.ru</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">ул. Цветочная, 15</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 ml-2">4.9 (128 отзывов)</span>
        </div>
      </motion.div>
    </>
  );
}