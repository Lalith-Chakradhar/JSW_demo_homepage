import React from 'react';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import styles from "./Stepper.module.css";

const Stepper = () => {
    const financialInstitutionHistory = [
        {
          date: "12 January, 1995",
          event: "Launch of a new savings account with higher interest rates to attract more deposits."
        },
        {
          date: "27 July, 2005",
          event: "Introduction of online banking services, allowing customers to manage their accounts remotely."
        },
        {
          date: "9 May, 2012",
          event: "Launch of a new mobile app for seamless banking on-the-go, gaining rapid adoption among millennials."
        },
        {
          date: "15 February, 2015",
          event: "The bank announces a strategic acquisition of a major fintech company to boost its digital capabilities."
        },
        {
          date: "30 August, 2018",
          event: "The institution celebrates 100 years in operation with a series of community engagement initiatives."
        }
      ];
      
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.mainHeading}>Events</h1>
        <div className={styles.eventListContainer}>
        {financialInstitutionHistory?.map((companyEventDetails,index)=>{
            return(
                    <div key={index} className={styles.eventDetails}>
                        <div className={styles.stepperDesign}>
                            <StarsRoundedIcon sx={{ fontSize: 60, color:"darkblue"}}/>
                            <div className={index!==financialInstitutionHistory.length-1 ? styles.lineConnector : undefined}></div>
                        </div>
                        
                        <div className={styles.eventDetailsText}>
                            <div className={styles.eventDate}>{companyEventDetails.date}</div>
                            <div className={styles.eventText}>{companyEventDetails.event}</div>
                        </div>
                    </div>
            );
        })}
        </div>
    </div>
  )
}

export default Stepper;