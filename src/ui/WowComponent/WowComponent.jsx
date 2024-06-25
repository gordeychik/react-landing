// /src/ui/WowComponent/WowComponent.jsx
import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'animate.css';

export const WowComponent = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);

  return null;
};