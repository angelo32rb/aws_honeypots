import React, { useEffect, useRef } from "react";
import styles from "./stars.module.css";

export default function Stars() {
  const starContainerRef = useRef(null);
  const filters = [
    styles.filter_red,
    styles.filter_purple,
    styles.filter_yellow,
    styles.filter_cyan,
    styles.filter_blue,
    styles.filter_orange,
  ];
  useEffect(() => {
    const starContainer = starContainerRef.current;

    function createStar() {
      const star = document.createElement("span");
      star.textContent = "★";

      const randomFilter = filters[Math.floor(Math.random() * filters.length)];

      star.className = `${styles.star} ${randomFilter}`;
      const size = Math.random() * 8 + 8 + "px";
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;

      star.style.left = `${posX}px`;
      star.style.top = `${posY}px`;
      star.style.fontSize = size;

      starContainer.appendChild(star);
      setTimeout(() => star.remove(), 4000);
    }

    function createShootingStar() {
      const size = Math.floor(Math.random() * 9) + 20;
      const angle = Math.random() * 30 + 15;
      const distance = 1000;
      const duration = 3500;
      const randomFilter = filters[Math.floor(Math.random() * filters.length)];

      const container = document.createElement("div");
      container.className = styles.shootingStarContainer;

      const starHead = document.createElement("div");
      starHead.className = `${styles.starHead} ${randomFilter}`;
      starHead.innerText = "★";

      container.appendChild(starHead);
      starContainer.appendChild(container);

      const startX = Math.random() * window.innerWidth;
      const startY = (Math.random() * window.innerHeight) / 3;
      const particles = [];
      let lastParticleTime = 0;

      const animate = (timestamp) => {
        if (!lastParticleTime) lastParticleTime = timestamp;
        const progress = Math.min((timestamp - lastParticleTime) / duration, 1);

        const currentX =
          startX + progress * distance * Math.cos((angle * Math.PI) / 180);
        const currentY =
          startY + progress * distance * Math.sin((angle * Math.PI) / 180);

        container.style.cssText = `
          left: ${currentX}px;
          top: ${currentY}px;
          transform: rotate(${angle}deg);
        `;

        if (timestamp % 10 < 5) {
          const particle = document.createElement("div");
          particle.className = `${styles.starParticle} ${randomFilter}`;
          particle.innerText = "★";
          const life = Math.random() * 3000 + 800;
          const sizeParticle = Math.random() * 4 + 1;
          const spread = Math.random() * 6 - 3;

          particle.style.cssText = `
            left: ${-size / 2}px;
            top: ${spread}px;
            width: ${sizeParticle}px;
            height: ${sizeParticle}px;
            opacity: ${Math.random() * 0.8 + 0.2};
            transition: all ${life}ms ease-out;
          `;

          container.appendChild(particle);
          particles.push({
            element: particle,
            born: timestamp,
            speed: Math.random() * 0.2 + 0.4,
          });
        }

        particles.forEach((p, index) => {
          const age = timestamp - p.born;
          if (age > 1200) {
            p.element.remove();
            particles.splice(index, 1);
          } else {
            const progress = age / 100;
            p.element.style.opacity = 1 - progress;
            p.element.style.transform = `translateX(${
              -size / 2 - progress * 100 * p.speed
            }px) translateY(${p.element.style.top})`;
          }
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          container.remove();
        }
      };

      requestAnimationFrame(animate);
    }

    const intervals = [
      setInterval(createStar, 100),
      setInterval(createShootingStar, 6000),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div
      ref={starContainerRef}
      className={`position-absolute top-0 start-0 w-100 h-100 ${styles.stars} z-0`}
    />
  );
}
