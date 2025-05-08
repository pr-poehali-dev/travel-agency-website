
import React from 'react';
import Icon from '@/components/ui/icon';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-full bg-[#3BAFDA]/10 flex items-center justify-center mb-5">
        <Icon name={icon} className="h-7 w-7 text-[#3BAFDA]" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "MapPin",
      title: "Лучшие направления",
      description: "Мы выбираем только самые интересные и безопасные направления для ваших путешествий."
    },
    {
      icon: "CreditCard",
      title: "Лучшие цены",
      description: "Гарантируем конкурентные цены и регулярные акции на популярные маршруты."
    },
    {
      icon: "HeartHandshake",
      title: "Персональный подход",
      description: "Каждое путешествие разрабатывается индивидуально под ваши предпочтения."
    },
    {
      icon: "ShieldCheck",
      title: "Безопасность",
      description: "Все наши туры застрахованы и соответствуют высоким стандартам безопасности."
    },
    {
      icon: "CalendarDays",
      title: "Гибкое планирование",
      description: "Бронируйте заранее или выбирайте горящие туры - у нас есть варианты для любых планов."
    },
    {
      icon: "Users",
      title: "Опытные гиды",
      description: "Наши гиды говорят на нескольких языках и знают все секретные места."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
          <div className="w-20 h-1 bg-[#4CAF50] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Туристическое агентство с 10-летним опытом организации идеальных путешествий по всему миру
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
