"use client";
import React, { useEffect, useState } from "react";
import styles from "./headerSections.module.css";



const images = ["/fish1.png", "/fish2.png", "/fish3.png"];

export default function HeaderSections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.headerSectionsContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.problemTitle}>Dried Foods</h2>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={styles.sliderImage}
              />
            ))}
          </div>
        </div>

        <p className={styles.solutionText}>
          <span className={styles.solutionLabel}>Our Solution:</span> Premium,
          vacuum-sealed, sand-free dried fish with consistent cuts, elegant
          branding, and a long shelf life. Designed to fit in both local and
          international markets.
        </p>
      </div>
    </div>
  );
}

