
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DestinationProps {
  title: string;
  image: string;
  price: string;
  rating: number;
  duration: string;
}

const DestinationCard = ({ title, image, price, rating, duration }: DestinationProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center">
          <Icon name="Star" className="w-4 h-4 text-yellow-500 mr-1" />
          {rating}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center">
          <Icon name="Clock" className="w-4 h-4 mr-1 text-gray-500" /> {duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-lg font-semibold text-[#4CAF50]">{price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

const Destinations = () => {
  const destinations = [
    {
      title: "Бали, Индонезия",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      price: "от 75 000 ₽",
      rating: 4.8,
      duration: "10 дней"
    },
    {
      title: "Париж, Франция",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
      price: "от 65 000 ₽",
      rating: 4.7,
      duration: "7 дней"
    },
    {
      title: "Мальдивы",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      price: "от 120 000 ₽",
      rating: 4.9,
      duration: "12 дней"
    },
    {
      title: "Турция, Анталия",
      image: "https://images.unsplash.com/photo-1605217409829-696bcd28e304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: "от 45 000 ₽",
      rating: 4.5,
      duration: "7 дней"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Популярные направления</h2>
          <div className="w-20 h-1 bg-[#3BAFDA] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Исследуйте наши самые популярные туристические направления, тщательно отобранные для незабываемых впечатлений
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white px-8 py-2">
            Больше направлений <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
