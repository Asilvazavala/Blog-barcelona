import styles from './Slider.module.css';
import { SliderItem } from './SliderItem';
import { useState } from 'react';

export const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleArrowClick = (direction) => {
    const container = document.querySelector(`.${styles.slider}`);
    const scrollAmount = 200;
    const newPosition = direction === 'right' 
      ? scrollPosition + scrollAmount 
      : scrollPosition - scrollAmount;

    container.scrollLeft = newPosition;
    setScrollPosition(newPosition);    
  };  
  
  return (
    <main className={styles.container}>
      <i className={`${styles.leftArrow} bx bxs-chevron-left-square ${scrollPosition < 50
        ? styles.disabled
        : ''}`}
        onClick={() => handleArrowClick('left')}
      ></i>        
      <i className={`${styles.rightArrow} bx bxs-chevron-right-square ${scrollPosition >= 600 
        ? styles.disabled
        : ''}`}
        onClick={() => handleArrowClick('right')}
      ></i>
      <section className={styles.slider}>
        <SliderItem firstTeam='Barcelona' firstResult={3} secondTeam='Real Madrid' secondResult={0} current='EN JUEGO' />
        <SliderItem firstTeam='Man City' firstResult={2} secondTeam='Bayern Munchen' secondResult={1} />
        <SliderItem firstTeam='Atl Madrid' firstResult={1} secondTeam='Sevilla' secondResult={1} current='EN JUEGO' />
        <SliderItem firstTeam='Barcelona' firstResult={4} secondTeam='Tottenham' secondResult={2} />
        <SliderItem firstTeam='Napoli' firstResult={1} secondTeam='Augsburg' secondResult={0} current='EN JUEGO' />
        <SliderItem firstTeam='Borussia Dor' firstResult={3} secondTeam='Ajax' secondResult={1} />
        <SliderItem firstTeam='Man United' firstResult={1} secondTeam='Ath Bilbao' secondResult={1} current='EN JUEGO' />
        <SliderItem firstTeam='Liverpool' firstResult={3} secondTeam='SV Darm' secondResult={1} />
      </section>
    </main>
  )
}
