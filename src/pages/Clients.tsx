import { motion } from 'framer-motion';
import { 
  Search, 
  Phone, 
  Mail, 
  MoreHorizontal, 
  ChevronRight,
  Plus,
  Filter,
  Clock,
  Calendar,
  Star
} from 'lucide-react';

export default function ClientsPage() {
  const clients = [
    { 
      id: 1, 
      name: 'Анна Смирнова', 
      phone: '+7 (999) 123-45-67', 
      email: 'anna@mail.ru', 
      pets: ['🐩 Боня', '🐕 Рекс'], 
      visits: 12, 
      lastVisit: '20.04.2026',
      totalSpent: '32 500 ₽',
      color: 'bg-pink'
    },
    { 
      id: 2, 
      name: 'Дмитрий Петров', 
      phone: '+7 (999) 234-56-78', 
      email: 'dmitry@mail.ru', 
      pets: ['🐱 Мурзик'], 
      visits: 5, 
      lastVisit: '18.04.2026',
      totalSpent: '8 900 ₽',
      color: 'bg-sky'
    },
    { 
      id: 3, 
      name: 'Елена Волкова', 
      phone: '+7 (999) 345-67-89', 
      email: 'elena@mail.ru', 
      pets: ['🐕 Джеки', '🐩 Лола'], 
      visits: 8, 
      lastVisit: '15.04.2026',
      totalSpent: '21 400 ₽',
      color: 'bg-peach'
    },
    { 
      id: 4, 
      name: 'Ольга Морозова', 
      phone: '+7 (999) 456-78-90', 
      email: 'olga@mail.ru', 
      pets: ['😺 Соня'], 
      visits: 15, 
      lastVisit: '10.04.2026',
      totalSpent: '45 800 ₽',
      color: 'bg-lavender'
    },
    { 
      id: 5, 
      name: 'Сергей Котов', 
      phone: '+7 (999) 567-89-01', 
      email: 'sergey@mail.ru', 
      pets: ['🐕 Барни', '🐱 Симба'], 
      visits: 3, 
      lastVisit: '05.04.2026',
      totalSpent: '5 200 ₽',
      color: 'bg-mint'
    },
  ];

  return (
    <>
      {/* Заголовок и действия */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl font-fredoka font-semibold text-gray-700">Клиенты</h2>
          <p className="text-sm text-gray-400 mt-1">Всего: {clients.length} постоянных клиентов</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-4xl shadow-soft text-sm text-gray-600 hover:shadow-soft-lg transition-all">
            <Filter className="w-4 h-4" />
            Фильтры
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-lavender to-pink rounded-4xl shadow-soft text-sm font-medium text-gray-600 hover:shadow-glow transition-all">
            <Plus className="w-4 h-4" />
            Новый клиент
          </button>
        </div>
      </motion.div>

      {/* Поиск */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-4xl p-4 shadow-soft mb-6 flex items-center gap-3"
      >
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Поиск по имени, телефону или email..." 
          className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
      </motion.div>

      {/* Таблица клиентов */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-4xl shadow-soft-lg overflow-hidden"
      >
        {/* Заголовок таблицы */}
        <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-xs font-medium text-gray-400 uppercase tracking-wider">
          <div className="col-span-2">Клиент</div>
          <div>Контакты</div>
          <div>Питомцы</div>
          <div className="text-center">Визитов</div>
          <div>Последний визит</div>
          <div className="text-right">Потрачено</div>
        </div>

        {/* Строки таблицы */}
        <div className="divide-y divide-gray-100">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ backgroundColor: 'rgba(253, 211, 232, 0.1)' }}
              className="grid grid-cols-7 gap-4 px-6 py-5 items-center cursor-pointer transition-colors"
            >
              {/* Клиент */}
              <div className="col-span-2 flex items-center gap-3">
                <div className={`w-10 h-10 ${client.color} rounded-3xl flex items-center justify-center text-xl`}>
                  {client.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-700">{client.name}</p>
                  <p className="text-xs text-gray-400">ID: {1000 + client.id}</p>
                </div>
              </div>
              
              {/* Контакты */}
              <div className="space-y-1">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-gray-400" /> {client.phone}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-gray-400" /> {client.email}
                </p>
              </div>
              
              {/* Питомцы */}
              <div className="text-sm text-gray-600">
                {client.pets.join(', ')}
              </div>
              
              {/* Визитов */}
              <div className="text-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                  <Calendar className="w-3 h-3" /> {client.visits}
                </span>
              </div>
              
              {/* Последний визит */}
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" />
                {client.lastVisit}
              </div>
              
              {/* Потрачено */}
              <div className="flex items-center justify-between">
                <span className="font-fredoka font-semibold text-gray-700">{client.totalSpent}</span>
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Статистика по клиентам */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 grid grid-cols-4 gap-4"
      >
        <div className="bg-white rounded-4xl p-5 shadow-soft">
          <p className="text-sm text-gray-400 mb-1">Всего клиентов</p>
          <p className="text-3xl font-fredoka font-bold text-gray-700">24</p>
          <p className="text-xs text-green-600 mt-2">↑ 3 за этот месяц</p>
        </div>
        <div className="bg-white rounded-4xl p-5 shadow-soft">
          <p className="text-sm text-gray-400 mb-1">Постоянных</p>
          <p className="text-3xl font-fredoka font-bold text-gray-700">18</p>
          <p className="text-xs text-gray-400 mt-2">Более 3 визитов</p>
        </div>
        <div className="bg-white rounded-4xl p-5 shadow-soft">
          <p className="text-sm text-gray-400 mb-1">Новых за месяц</p>
          <p className="text-3xl font-fredoka font-bold text-gray-700">5</p>
          <p className="text-xs text-green-600 mt-2">↑ 2 к прошлому</p>
        </div>
        <div className="bg-gradient-to-br from-lavender to-pink rounded-4xl p-5 shadow-soft">
          <p className="text-sm text-gray-600 mb-1">Средний чек</p>
          <p className="text-3xl font-fredoka font-bold text-gray-700">2 840 ₽</p>
          <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            Топ-клиенты: Анна, Ольга
          </p>
        </div>
      </motion.div>
    </>
  );
}