import React from 'react';
import hero from "../../../public/hero.jpg"
import styles from "./HeroComponent.module.css";
import Carousel from '../Carousel/Carousel';

const HeroComponent = () => {
  return (
    <section>
        <div className={styles.heroContainer}>
        <img src={hero} className={styles.heroImage}/>
        <Carousel/>
        </div>
    </section>
  )
}

export default HeroComponent;