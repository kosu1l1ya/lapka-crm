import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus, 
  Heart, 
  Clock, 
  MoreHorizontal,
  Calendar,
  MapPin,
  AlertCircle
} from 'lucide-react';

export default function PetsPage() {
  const pets = [
    {
      id: 1,
      name: 'Боня',
      emoji: '🐩',
      breed: 'Мальтийская болонка',
      age: '2 года',
      owner: 'Анна Смирнова',
      color: 'bg-pink',
      notes: 'Любит печеньки, боится фена',
      allergies: 'Нет',
      lastGroom: '20.04.2026',
      nextVisit: 'Сегодня 10:00'
    },
    {
      id: 2,
      name: 'Мурзик',
      emoji: '🐱',
      breed: 'Британский кот',
      age: '4 года',
      owner: 'Дмитрий Петров',
      color: 'bg-sky',
      notes: 'Немного пугливый, лучше без фена',
      allergies: 'Курица',
      lastGroom: '18.04.2026',
      nextVisit: 'Сегодня 12:30'
    },
    {
      id: 3,
      name: 'Джеки',
      emoji: '🐕',
      breed: 'Корги',
      age: '1.5 года',
      owner: 'Елена Волкова',
      color: 'bg-peach',
      notes: 'Очень активный, любит играть',
      allergies: 'Нет',
      lastGroom: '15.04.2026',
      nextVisit: 'Завтра 14:00'
    },
    {
      id: 4,
      name: 'Соня',
      emoji: '😺',
      breed: 'Персидская кошка',
      age: '5 лет',
      owner: 'Ольга Морозова',
      color: 'bg-lavender',
      notes: 'Любит спать, спокойная',
      allergies: 'Морепродукты',
      lastGroom: '10.04.2026',
      nextVisit: '23 апр 11:00'
    },
    {
      id: 5,
      name: 'Барни',
      emoji: '🐕',
      breed: 'Лабрадор',
      age: '3 года',
      owner: 'Сергей Котов',
      color: 'bg-mint',
      notes: 'Дружелюбный, любит воду',
      allergies: 'Нет',
      lastGroom: '05.04.2026',
      nextVisit: '25 апр 15:00'
    },
    {
      id: 6,
      name: 'Лола',
      emoji: '🐩',
      breed: 'Той-пудель',
      age: '1 год',
      owner: 'Елена Волкова',
      color: 'bg-pink',
      notes: 'Маленькая, требует осторожности',
      allergies: 'Глютен',
      lastGroom: '15.04.2026',
      nextVisit: '27 апр 10:30'
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
          <h2 className="text-2xl font-fredoka font-semibold text-gray-700">Питомцы</h2>
          <p className="text-sm text-gray-400 mt-1">Всего: {pets.length} пушистых гостей</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-4xl shadow-soft text-sm text-gray-600 hover:shadow-soft-lg transition-all">
            <Filter className="w-4 h-4" />
            Фильтры
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-lavender to-pink rounded-4xl shadow-soft text-sm font-medium text-gray-600 hover:shadow-glow transition-all">
            <Plus className="w-4 h-4" />
            Новый питомец
          </button>
        </div>
      </motion.div>

      {/* Поиск и фильтры по виду */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="flex-1 bg-white rounded-4xl p-4 shadow-soft flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Поиск по кличке или породе..." 
            className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
        <div className="flex gap-2">
          {['Все', '🐕 Собаки', '🐱 Кошки', '🦜 Птицы'].map((filter, i) => (
            <button 
              key={i}
              className={`px-4 py-3 rounded-4xl text-sm font-medium transition-all
                ${i === 0 
                  ? 'bg-white shadow-soft text-gray-700' 
                  : 'text-gray-400 hover:bg-white/60'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Сетка питомцев */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pets.map((pet, i) => (
          <motion.div
            key={pet.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
            className={`${pet.color} rounded-4xl p-5 cursor-pointer transition-all duration-300`}
          >
            {/* Верхняя часть */}
            <div className="flex items-start gap-4 mb-4">
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
              <button className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center hover:bg-white">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Особенности */}
            <div className="bg-white/40 rounded-3xl p-4 mb-4">
              <p className="text-sm text-gray-600 italic">"{pet.notes}"</p>
              {pet.allergies !== 'Нет' && (
                <p className="text-xs text-rose-500 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Аллергия: {pet.allergies}
                </p>
              )}
            </div>

            {/* Информация о визитах */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Последний груминг:
                </p>
                <p className="text-sm text-gray-700">{pet.lastGroom}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3" /> Следующий визит:
                </p>
                <p className="text-sm font-medium text-gray-700">{pet.nextVisit}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Статистика по питомцам */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 bg-white rounded-4xl p-5 shadow-soft"
      >
        <h3 className="font-fredoka font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink fill-pink" />
          Частота визитов по породам
        </h3>
        <div className="flex items-end gap-8">
          {[
            { breed: 'Мальтезе', visits: 12, color: 'bg-pink' },
            { breed: 'Британцы', visits: 8, color: 'bg-sky' },
            { breed: 'Корги', visits: 10, color: 'bg-peach' },
            { breed: 'Персы', visits: 15, color: 'bg-lavender' },
          ].map((stat, i) => (
            <div key={i} className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{stat.breed}</span>
                <span className="text-sm font-fredoka font-semibold text-gray-700">{stat.visits}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(stat.visits / 15) * 100}%` }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className={`h-full ${stat.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}