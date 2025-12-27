import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { id: '1', title: 'Living Room', category: 'Modern Cozy', image: 'https://picsum.photos/seed/livingroom/800/600' },
  { id: '2', title: 'Dining Room', category: 'Natural Wood', image: 'https://picsum.photos/seed/dining/800/600' },
  { id: '3', title: 'Bedroom', category: 'Hotel Style', image: 'https://picsum.photos/seed/bed/800/600' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Portfolio by Room</h2>
          <p className="text-gray-500">공간별 최적의 인테리어 솔루션을 제안합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              <div className="w-full overflow-hidden rounded-3xl mb-6 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
              <a href="#" className="flex items-center text-sm text-primary font-medium hover:underline gap-1">
                See Projects <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};