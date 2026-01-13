
// Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bgColor?: string;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onJump: (index: number) => void;
}