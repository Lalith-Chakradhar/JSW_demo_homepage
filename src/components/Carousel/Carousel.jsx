import {useState, useEffect} from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const financeCarouselTexts = [
        {
          id: 1,
          title: "Budgeting Basics",
          text: "Track your income and expenses to build a monthly budget that works for your lifestyle and financial goals."
        },
        {
          id: 2,
          title: "The Power of Compounding",
          text: "Invest early and consistently to take advantage of compound interest — your money earning money over time."
        },
        {
          id: 3,
          title: "Emergency Fund 101",
          text: "Aim to save 3–6 months of living expenses to protect yourself from unexpected financial shocks."
        },
        {
          id: 4,
          title: "Credit Score Tips",
          text: "Pay bills on time, keep credit utilization low, and avoid opening too many accounts at once to maintain a healthy credit score."
        }
      ];
    
      const goToNextSlide = () => {
        //index does not cross the texts length
        setCurrentIndex((prevState)=> (prevState+1) % financeCarouselTexts.length);
      }

      useEffect(()=>{
        const intervalId = setInterval(goToNextSlide,3000);

        return ()=> clearInterval(intervalId);
      });
      
  return (
    <section className={styles.carouselContainer}>
        <div className={styles.carouselContextContainer}>
            <h1>{financeCarouselTexts[currentIndex].title}</h1>
            <p>{financeCarouselTexts[currentIndex].text}</p>
        </div>
        <div className={styles.carouselCircleContainer}>
            {financeCarouselTexts?.map((_,index)=>{
                return(
                    <div key={index} className={index===currentIndex ? styles.currentSlideCircle : styles.slideCircle}></div>
                )
            })}
        </div>
    </section>
  )
}

export default Carousel