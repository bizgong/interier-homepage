import React from 'react';
import { SpaceItem } from '../types';

const spaces: SpaceItem[] = [
  { id: '1', title: 'LIVING ROOM', image: 'https://picsum.photos/seed/living/600/600' },
  { id: '2', title: 'KITCHEN', image: 'https://picsum.photos/seed/kitchen2/600/600' },
  { id: '3', title: 'BATHROOM', image: 'https://picsum.photos/seed/bath/600/600' },
  { id: '4', title: 'BEDROOM', image: 'https://picsum.photos/seed/bedroom/600/600' },
  { id: '5', title: 'OFFICE', image: 'https://picsum.photos/seed/office/600/600' },
];

export const SpaceCollection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Space Collection</h2>
          <p className="text-gray-500">우리가 만들어온 감각적인 공간들을 만나보세요.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={space.image} 
                alt={space.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-bold tracking-wider text-sm md:text-base border-b-2 border-primary pb-1">
                  {space.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};