import React, {useState} from 'react';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import styles from "./Stepper.module.css";
import StepperMoreInfo from '../StepperMoreInfo/StepperMoreInfo';
import { financialInstitutionHistory } from '../../constants/companyEvents';

const Stepper = () => {

  const [showMoreInfoData, setShowMoreInfoData] = useState({});

  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.mainHeading}>Events</h1>
        <div className={styles.eventListContainer}>
          <div>
            {financialInstitutionHistory?.map((companyEventDetails,index)=>{
                return(
                        <div key={companyEventDetails.id} className={styles.eventDetails} onClick={()=>setShowMoreInfoData(companyEventDetails)}>
                            <div className={styles.stepperDesign}>
                                <StarsRoundedIcon sx={{ fontSize: 60, color:"darkblue"}}/>
                                <div className={index!==financialInstitutionHistory.length-1 ? styles.lineConnector : undefined}></div>
                            </div>
                            
                            <div className={`${styles.eventDetailsText} ${showMoreInfoData?.id === companyEventDetails.id ? styles.selectedEvent : undefined}`}>
                                <div className={styles.eventDate}>{companyEventDetails.date}</div>
                                <div className={styles.eventText}>{companyEventDetails.event}</div>
                            </div>
                        </div>
                );
            })}
          </div>
          {showMoreInfoData?.id && <StepperMoreInfo moreInfo={showMoreInfoData.moreInfo} setShowMoreInfoData={setShowMoreInfoData}/>}
        </div>
        <hr/>
    </div>
  )
}

export default Stepper;