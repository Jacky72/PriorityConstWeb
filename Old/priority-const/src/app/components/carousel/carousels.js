"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback  } from "react";

const Carousel = ({ interval = 2000, height = 620 }) => {

  const slides = ["/Pic1.jpg", "/Pic2.jpg", "/Pic3.jpg","/Pic4.jpg", "/Pic5.jpg", "/Pic6.jpg"];

  const timerRef = useRef(null);

  const [i, setI] = useState(0);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setI((x) => (x + 1) % slides.length);
    }, interval);
  }, [interval, slides.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const prev = () => {
    setI(idx);
    startTimer();
  };

  const next = () => {
    setI((x) => (x + 1) % slides.length);
    startTimer();
  };


  return (
    <div className={"relative w-full max-w-xl mx-auto "}>
      <div className="relative overflow-hidden rounded-lg bg-white" style={{ height }}>
        <Image
          src={slides[i]}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 640px"
          priority={i === 0}
        />

        {/* arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center
                     w-8 h-8 rounded-full bg-black/55 text-white hover:bg-black/75"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center
                     w-8 h-8 rounded-full bg-black/55 text-white hover:bg-black/75"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              idx === i ? "bg-gray-700" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
