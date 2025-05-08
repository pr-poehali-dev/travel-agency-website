
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Palmtree" className="h-6 w-6 text-[#4CAF50]" />
              <span className="text-xl font-semibold">ТурЭксперт</span>
            </div>
            <p className="text-gray-400 mb-6">
              Ваш надежный партнер в мире путешествий. Мы делаем ваши мечты о путешествиях реальностью с 2013 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#3BAFDA] transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3BAFDA] transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3BAFDA] transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3BAFDA] transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-[#4CAF50] mr-3 mt-1 shrink-0" />
                <span>ул. Туристическая 123, г. Москва, Россия</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-[#4CAF50] mr-3 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-[#4CAF50] mr-3 shrink-0" />
                <span>info@турэксперт.рф</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Направления
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Виды туров
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Подписка</h3>
            <p className="text-gray-400 mb-4">
              Подпишитесь на наши новости и получайте уведомления о специальных предложениях.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Ваш e-mail" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white w-full">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ТурЭксперт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
