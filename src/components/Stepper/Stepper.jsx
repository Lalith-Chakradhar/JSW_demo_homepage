import React, {useState} from 'react';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import styles from "./Stepper.module.css";
import StepperMoreInfo from '../StepperMoreInfo/StepperMoreInfo';

const financialInstitutionHistory = [
  {
    id: 1,
    date: "12 January, 1995",
    event: "Launch of a new savings account with higher interest rates to attract more deposits.",
    moreInfo: {
      imageURL: "/more_info_savings_acc.webp",
      context: "The bank's decision to offer higher interest rates on savings accounts was driven by a desire to remain competitive in a rapidly evolving financial market. The move came at a time when interest rates were fluctuating, and the institution aimed to retain and attract customers by offering a more attractive savings product. The initiative also highlighted the institution's commitment to providing customers with better returns on their investments while maintaining stability."
    }
  },
  {
    id: 2,
    date: "27 July, 2005",
    event: "Introduction of online banking services, allowing customers to manage their accounts remotely.",
    moreInfo: {
      imageURL: "/more_info_online_banking.png",
      context: "The advent of online banking was a significant milestone for the bank, marking its transition into the digital era. Customers, who were previously reliant on visiting physical branches for most transactions, now had the ability to check balances, transfer funds, and pay bills from the comfort of their homes. This shift not only made banking more convenient but also helped reduce operational costs for the bank, opening the door to a wider customer base."
    }
  },
  {
    id: 3,
    date: "9 May, 2012",
    event: "Launch of a new mobile app for seamless banking on-the-go, gaining rapid adoption among millennials.",
    moreInfo: {
      imageURL: "/more_info_mobile_app.jpg",
      context: "As smartphones became more ubiquitous, the bank recognized the need for a mobile-first approach to meet the expectations of a younger, tech-savvy demographic. The launch of the mobile app was part of the institution's strategy to offer a more personalized and convenient banking experience. Features like mobile check deposits, real-time transaction alerts, and easy fund transfers helped the app gain rapid adoption, especially among millennials who preferred managing their finances on-the-go."
    }
  },
  {
    id: 4,
    date: "15 February, 2015",
    event: "The bank announces a strategic acquisition of a major fintech company to boost its digital capabilities.",
    moreInfo: {
      imageURL: "/more_info_fintech_acquisition.jpg",
      context: "The acquisition was a strategic move to enhance the bank's digital services, particularly in the areas of payment processing, AI-powered financial planning, and blockchain technology. By acquiring the fintech company, the bank gained access to cutting-edge technology and a team of experts who could help streamline digital services. The move was also a response to the growing popularity of fintech startups, with the bank seeking to stay ahead of the competition and continue innovating in the evolving financial landscape."
    }
  },
  {
    id: 5,
    date: "30 August, 2018",
    event: "The institution celebrates 100 years in operation with a series of community engagement initiatives.",
    moreInfo: {
      imageURL: "/more_info_anniversary.jpg",
      context: "Reaching the 100-year mark was a monumental achievement for the institution, and it marked a deep connection with the local community. The series of community engagement initiatives included financial literacy programs, charity events, and partnerships with local organizations to promote economic development. The bank used its centennial celebration to reflect on its history of supporting local businesses and individuals, as well as to reaffirm its commitment to future growth and community-focused innovation."
    }
  }
];


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
          {showMoreInfoData?.id && <StepperMoreInfo moreInfo={showMoreInfoData.moreInfo}/>}
        </div>
        <hr/>
    </div>
  )
}

export default Stepper;