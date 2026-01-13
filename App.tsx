
import React, { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { SLIDES } from './constants';
import { Bot, ChevronRight, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col overflow-hidden select-none">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Bot className="w-6 h-6" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">DEVINITI</span>
        </div>
        <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest hidden sm:block">
          {SLIDES[currentSlide].title}
        </div>
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-400">
            {Math.round(((currentSlide + 1) / totalSlides) * 100)}%
          </span>
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 relative mt-16 pb-24 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-6xl h-full flex flex-col justify-center">
          <div 
            key={currentSlide}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full"
          >
            {SLIDES[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        onNext={nextSlide} 
        onPrev={prevSlide}
        onJump={jumpToSlide}
      />

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-400/10 blur-[120px] rounded-full" />
      </div>

      {/* Side Hit-boxes for navigation */}
      <button 
        onClick={prevSlide} 
        disabled={currentSlide === 0}
        className="fixed left-0 top-16 bottom-0 w-24 group flex items-center justify-center disabled:opacity-0 transition-opacity"
      >
        <div className="p-4 rounded-full bg-white/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-all border border-slate-200">
          <ChevronLeft className="w-8 h-8 text-slate-600" />
        </div>
      </button>
      <button 
        onClick={nextSlide} 
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-0 top-16 bottom-0 w-24 group flex items-center justify-center disabled:opacity-0 transition-opacity"
      >
        <div className="p-4 rounded-full bg-white/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-all border border-slate-200">
          <ChevronRight className="w-8 h-8 text-slate-600" />
        </div>
      </button>
    </div>
  );
};

export default App;
