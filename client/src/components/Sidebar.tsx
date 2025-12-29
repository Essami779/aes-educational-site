import { Link } from 'wouter';
import { BookOpen, Zap, Key, Lock, Home } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'الرئيسية', icon: <Home size={20} />, href: '/' },
  { id: 'intro', label: 'المقدمة', icon: <BookOpen size={20} />, href: '#intro' },
  { id: 'initialization', label: 'مرحلة التهيئة', icon: <Zap size={20} />, href: '#initialization' },
  { id: 'subbytes', label: 'SubBytes', icon: <Lock size={20} />, href: '#subbytes' },
  { id: 'shiftrows', label: 'ShiftRows', icon: <Lock size={20} />, href: '#shiftrows' },
  { id: 'mixcolumns', label: 'MixColumns', icon: <Lock size={20} />, href: '#mixcolumns' },
  { id: 'addroundkey', label: 'AddRoundKey', icon: <Lock size={20} />, href: '#addroundkey' },
  { id: 'finalround', label: 'الجولة النهائية', icon: <Lock size={20} />, href: '#finalround' },
  { id: 'keyexpansion', label: 'توسيع المفتاح', icon: <Key size={20} />, href: '#keyexpansion' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border overflow-y-auto shadow-lg">
      {/* Logo/Header */}
      <div className="sticky top-0 bg-card border-b border-border p-6">
        <h1 className="text-2xl font-bold text-primary">AES</h1>
        <p className="text-sm text-muted-foreground mt-1">شرح مفصل</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => handleNavClick(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-accent text-accent-foreground shadow-md'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card to-transparent border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          AES-128 (10 جولات)
        </p>
      </div>
    </aside>
  );
}
