import React from 'react'
import styles from "./StepperMoreInfo.module.css";

const StepperMoreInfo = ({moreInfo}) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
            <img src={moreInfo.imageURL} className={styles.imageStyles}/>
        </div>
        <div>
            {moreInfo.context}
        </div>
    </div>
  )
}

export default StepperMoreInfo;