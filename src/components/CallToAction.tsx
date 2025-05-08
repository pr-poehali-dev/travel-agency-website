
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#3BAFDA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать новое путешествие?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Забронируйте ваш следующий тур прямо сейчас и получите скидку 10% на первое бронирование.
            Используйте промокод <span className="font-semibold">NEWTRIP</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white px-6 py-6 text-lg rounded-md">
              <Icon name="CalendarPlus" className="mr-2 h-5 w-5" />
              Забронировать сейчас
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-[#3BAFDA] px-6 py-6 text-lg rounded-md">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
