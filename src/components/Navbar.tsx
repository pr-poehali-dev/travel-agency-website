
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Palmtree" className="h-6 w-6 text-[#4CAF50]" />
              <span className="text-xl font-semibold text-gray-800">ТурЭксперт</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#3BAFDA] transition-colors">Главная</Link>
            <Link to="#destinations" className="text-gray-700 hover:text-[#3BAFDA] transition-colors">Направления</Link>
            <Link to="#about" className="text-gray-700 hover:text-[#3BAFDA] transition-colors">О нас</Link>
            <Link to="#contact" className="text-gray-700 hover:text-[#3BAFDA] transition-colors">Контакты</Link>
          </div>
          
          <div>
            <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white rounded-md font-medium">
              Забронировать тур
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
