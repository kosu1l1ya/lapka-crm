import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Scissors, 
  Settings, 
  Search, 
  Bell,
  PawPrint,
  Sparkles,
  User,
  LogOut
} from 'lucide-react';

// Страницы (создадим дальше)
import CalendarPage from './pages/Calendar';
import ClientsPage from './pages/Clients';
import PetsPage from './pages/Pets';
import ServicesPage from './pages/Services';

// Компонент навигации
function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Calendar, label: 'Календарь' },
    { path: '/clients', icon: Users, label: 'Клиенты' },
    { path: '/pets', icon: PawPrint, label: 'Питомцы' },
    { path: '/services', icon: Scissors, label: 'Услуги' },
  ];

  return (
    <motion.nav 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex gap-2 mb-8 flex-wrap"
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`
            flex items-center gap-2 px-5 py-3 rounded-5xl font-medium text-sm
            transition-all duration-300
            ${location.pathname === item.path
              ? 'bg-white shadow-soft text-gray-700' 
              : 'text-gray-400 hover:bg-white/60 hover:shadow-soft'
            }
          `}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </Link>
      ))}
    </motion.nav>
  );
}

// Шапка (общая для всех страниц)
function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between mb-8"
    >
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-lavender to-pink p-3 rounded-4xl shadow-soft">
          <PawPrint className="w-7 h-7 text-gray-600" />
        </div>
        <div>
          <h1 className="text-3xl font-fredoka font-bold text-gray-700 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5B8E8] to-[#F0B8D8]">Лапка</span>
          </h1>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> уютная CRM для грумера
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-5xl px-4 py-2 shadow-soft flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Поиск...</span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-11 h-11 bg-white rounded-4xl shadow-soft flex items-center justify-center"
        >
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink rounded-full text-xs font-bold text-gray-600 flex items-center justify-center border-2 border-white">
            3
          </span>
        </motion.button>
        
        <div className="relative group">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-4xl bg-gradient-to-br from-peach to-pink shadow-soft flex items-center justify-center overflow-hidden border-2 border-white"
          >
            <span className="text-2xl">🐕</span>
          </motion.button>
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-3xl shadow-soft-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-lavender/30 text-gray-600 text-sm">
              <User className="w-4 h-4" />
              Профиль
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-lavender/30 text-gray-600 text-sm">
              <Settings className="w-4 h-4" />
              Настройки
            </button>
            <div className="h-px bg-gray-100 my-2" />
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-pink/30 text-rose-400 text-sm">
              <LogOut className="w-4 h-4" />
              Выйти
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// Главный компонент
function AppContent() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;