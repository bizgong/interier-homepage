import React, { useState } from 'react';
import { SignatureItem } from '../types';

const styles: SignatureItem[] = [
  { 
    id: '1', 
    title: 'Nordic Wood Mood', 
    description: '따뜻한 우드 톤의 편안함', 
    image: 'https://picsum.photos/seed/chair/600/600', 
    tags: ['HOT'],
    category: 'Modern'
  },
  { 
    id: '2', 
    title: 'Urban Gray Lounge', 
    description: '도시적인 세련미', 
    image: 'https://picsum.photos/seed/lounge/600/600', 
    category: 'Minimal'
  },
  { 
    id: '3', 
    title: 'Pure White Minimal', 
    description: '군더더기 없는 깔끔함', 
    image: 'https://picsum.photos/seed/lamp/600/600', 
    tags: ['NEW'],
    category: 'Minimal'
  },
  { 
    id: '4', 
    title: 'Classic Green Point', 
    description: '깊이감 있는 클래식', 
    image: 'https://picsum.photos/seed/sofa/600/600', 
    tags: ['SALE'],
    category: 'Vintage'
  },
];

const categories = ['All Styles', 'Modern', 'Minimal', 'Vintage'];

export const SignatureStyles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Styles');

  const filteredStyles = activeCategory === 'All Styles' 
    ? styles 
    : styles.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Signature Styles</h2>
            <p className="text-gray-500">고객 만족도가 가장 높은 레이어폼만의 시그니처 스타일을 확인하세요.</p>
          </div>
          
          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-400 hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStyles.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tags?.map((tag) => (
                  <span 
                    key={tag}
                    className={`absolute top-4 left-4 text-[10px] font-bold px-2 py-1 text-white rounded-sm
                      ${tag === 'HOT' ? 'bg-red-500' : ''}
                      ${tag === 'NEW' ? 'bg-blue-500' : ''}
                      ${tag === 'SALE' ? 'bg-orange-500' : ''}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};