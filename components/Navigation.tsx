
import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  onJump 
}) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center items-center gap-6">
      <div className="bg-white/90 backdrop-blur-md shadow-xl border border-slate-200 rounded-full px-6 py-3 flex items-center gap-4 transition-all hover:shadow-2xl">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => onJump(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </button>
      </div>
      
      <div className="absolute right-12 hidden md:block">
        <span className="text-sm font-medium text-slate-500 bg-white/80 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          Slide {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};
