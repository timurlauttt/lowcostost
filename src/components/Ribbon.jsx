import { useEffect, useRef } from 'react';

export default function Ribbon() {
  const ribbonRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ribbon = ribbonRef.current;
    const content = contentRef.current;
    if (!ribbon || !content) return;

    // Duplicate content until it fills 2x the ribbon width
    function ensureRepeat() {
      let cw = content.scrollWidth;
      const rw = ribbon.clientWidth || window.innerWidth;
      let loops = 0;
      while (cw < rw * 2 && loops < 10) {
        content.innerHTML += content.innerHTML;
        cw = content.scrollWidth;
        loops++;
      }
    }

    ensureRepeat();

    // Adjust animation duration based on content width
    const speed = 100; // px/s
    const travel = content.scrollWidth / 2;
    const duration = Math.max(8, Math.round(travel / speed));
    content.style.animation = `scroll ${duration}s linear infinite`;

    // Recalculate on resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newTravel = content.scrollWidth / 2;
        const newDuration = Math.max(8, Math.round(newTravel / speed));
        content.style.animation = `scroll ${newDuration}s linear infinite`;
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      ref={ribbonRef}
      className="w-full mt-16 sm:-mt-16 md:-mt-20 overflow-hidden whitespace-nowrap relative"
      style={{
        background: 'linear-gradient(135deg, #3730A3 0%, #1e1b5e 100%)',
        transform: 'rotate(-3deg)',
      }}
    >
      <div ref={contentRef} className="inline-block py-3">
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">COMING SOON</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">|</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">COMING SOON</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">|</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">COMING SOON</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">|</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">COMING SOON</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">|</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">COMING SOON</span>
        <span className="text-white font-bold text-xs sm:text-sm px-2 sm:px-4">|</span>
      </div>
    </div>
  );
}
