import styles from './Slider.module.css';
import { SliderItem } from './SliderItem';
import { useState, useEffect } from 'react';

export const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleArrowClick = (direction) => {
    const container = document.querySelector(`.${styles.slider}`);
    const scrollAmount = 1;
    const newPosition = direction === 'right' 
      ? scrollPosition + scrollAmount 
      : scrollPosition - scrollAmount;

    if (container) {
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const container = document.querySelector(`.${styles.slider}`);
    const totalItems = container ? container.children.length : 0;
    const containerWidth = container ? container.clientWidth : 0;
    const itemWidth = totalItems > 0 ? containerWidth / totalItems : 0;
    const newMaxScroll = Math.max(0, totalItems * itemWidth - containerWidth);
    setMaxScroll(newMaxScroll);
  }, [scrollPosition]);

  const isNearMaxScroll = scrollPosition >= maxScroll - 10; // Tolerancia de 10 píxeles
  const isNearMinScroll = scrollPosition <= 10; // Tolerancia de 10 píxeles
  
  return (
    <main className={styles.container}>
      <i className={`${styles.leftArrow} bx bxs-chevron-left-square ${isNearMaxScroll 
        ? styles.disabled 
        : ''}`}
        onClick={() => handleArrowClick('left')}
      ></i>        
      <i className={`${styles.rightArrow} bx bxs-chevron-right-square ${isNearMinScroll 
        ? styles.disabled 
        : ''}`}
        onClick={() => handleArrowClick('right')}
      ></i>
      <section className={styles.slider}>
        <SliderItem firstTeam='Barcelona' firstResult={3} secondTeam='Real Madrid' secondResult={0} />
        <SliderItem firstTeam='Man City' firstResult={2} secondTeam='Bayer' secondResult={1} />
        <SliderItem firstTeam='Atl Madrid' firstResult={1} secondTeam='Sevilla' secondResult={1} />
        <SliderItem firstTeam='Barcelona' firstResult={4} secondTeam='Tottenham' secondResult={2} />
        <SliderItem firstTeam='Napoli' firstResult={1} secondTeam='Augsburg' secondResult={0} />
        <SliderItem firstTeam='Borussia Dor' firstResult={3} secondTeam='Ajax' secondResult={1} />
        <SliderItem firstTeam='Man United' firstResult={1} secondTeam='Ath Bilbao' secondResult={1} />
        <SliderItem firstTeam='Liverpool' firstResult={3} secondTeam='SV Darm' secondResult={1} />
      </section>
    </main>
  )
}
