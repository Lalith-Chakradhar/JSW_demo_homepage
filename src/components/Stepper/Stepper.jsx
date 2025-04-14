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
      // context: "Reaching the 100-year mark was a monumental achievement for the institution, and it marked a deep connection with the local community. The series of community engagement initiatives included financial literacy programs, charity events, and partnerships with local organizations to promote economic development. The bank used its centennial celebration to reflect on its history of supporting local businesses and individuals, as well as to reaffirm its commitment to future growth and community-focused innovation."
      context: `Finance plays a crucial role in the functioning of any economy, serving as the backbone for economic growth and stability. At its core, finance involves the management of money and investments, ensuring that resources are allocated efficiently to foster business development and innovation. Financial institutions like banks, investment firms, and insurance companies act as intermediaries, channeling funds from savers to borrowers, thereby facilitating economic activity. By providing the necessary capital for businesses to expand, finance supports entrepreneurship and job creation. Moreover, well-functioning financial markets allow individuals and institutions to manage risk, ensuring the stability of both the macro and microeconomies.

In addition to fueling business ventures, finance is a tool for personal wealth management and economic planning. Individuals use financial services such as savings accounts, retirement plans, and insurance to secure their futures and safeguard against unexpected financial challenges. Financial literacy has become an increasingly important skill, as individuals must navigate complex financial products and markets to make informed decisions about their money. A sound understanding of finance can lead to better life choices, such as managing debt responsibly, saving for long-term goals, and investing wisely to generate wealth.

At a larger scale, governments rely on finance to manage national budgets, fund infrastructure projects, and implement social welfare programs. Public finance is crucial for maintaining the smooth functioning of society, ensuring that essential services like healthcare, education, and transportation are adequately funded. By managing tax revenues and issuing bonds, governments can invest in the future of their nation, stimulating growth and providing stability. Additionally, central banks play an essential role in controlling inflation, regulating interest rates, and managing the money supply to maintain economic stability.

However, the field of finance is not without its risks. Poor financial decision-making, excessive debt, or market volatility can lead to economic crises, as seen in the global financial meltdown of 2008. Overleveraging, speculative investments, and unregulated lending practices contributed to the crisis, leading to widespread job losses, bankruptcies, and a global recession. The aftermath of such crises often requires years of recovery and restructuring, highlighting the importance of financial regulation and oversight. Effective financial policies, transparency, and accountability are crucial to maintaining trust in financial systems and preventing similar crises in the future.

In conclusion, finance is indispensable to the growth and stability of economies at both the micro and macro levels. It not only drives business development and personal wealth management but also ensures the smooth operation of governments and societies. While the benefits of finance are undeniable, its risks require careful management and regulation. A well-regulated financial system, coupled with informed decision-making, is essential for fostering long-term economic prosperity and preventing the instability that can arise from poor financial practices.`
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