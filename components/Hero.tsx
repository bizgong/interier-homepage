import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop")', 
        }}
      >
        {/* Dark Overlay - slightly lighter to show the interior details */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up drop-shadow-lg">
          공간은 바꾸는 것이 아니라,<br className="hidden md:block" />
          삶의 흐름을 다시 설계하는 일입니다.
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto font-light animate-slide-up delay-100 drop-shadow-md">
          레이어폼 인테리어는 디자인부터 시공까지 직접 책임집니다.<br />
          당신의 라이프스타일에 맞춘 프리미엄 공간을 경험하세요.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up delay-200">
          <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 font-medium min-w-[160px] backdrop-blur-sm shadow-sm">
            프로젝트 상담하기
          </button>
          <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium min-w-[160px] shadow-lg border border-transparent hover:border-primary">
            시공 사례 보기
          </button>
        </div>
      </div>
    </header>
  );
};