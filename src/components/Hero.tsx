
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
           }}>
        <span className="w-full h-full absolute opacity-60 bg-gradient-to-r from-[#3BAFDA]/70 to-[#4CAF50]/70"></span>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-white font-semibold text-5xl mb-6 drop-shadow-md">
                Откройте мир вместе с нами
              </h1>
              <p className="mt-4 text-lg text-white/90 drop-shadow-md">
                Лучшие туры и направления по самым привлекательным ценам. 
                Мы сделаем ваше путешествие незабываемым!
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-6 py-3 bg-[#FF9800] hover:bg-[#F57C00] text-white rounded-md text-lg">
                  Найти тур
                </Button>
                <Button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-md text-lg border border-white/40">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
