import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ServiceCards: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/seed/residential/1000/800" 
                alt="Residential" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Residential Design</h3>
              <p className="text-white/80 mb-6">가족의 라이프스타일을 담은 주거 공간</p>
              <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-white group-hover:text-secondary transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
             <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/seed/commercial/1000/800" 
                alt="Commercial" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Commercial Design</h3>
              <p className="text-white/80 mb-6">브랜드의 가치를 높이는 상업 공간</p>
              <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-white group-hover:text-secondary transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};