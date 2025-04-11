import React from 'react'
import styles from "./Footer.module.css";

const footerDetails =  [
    {
        "title": "Policies & code",
        "links": [
            {
                "link_title": "Methodology to determine interest rates & changes",
                "link": "https://jswonefinance.in/pdfs/Methdology_to_determine_interest_rate.pdf"
            },
            {
                "link_title": "Schedule of charges",
                "link": "https://jswonefinance.in/pdfs/schedule%20_of_charges.pdf"
            },
            {
                "link_title": "Customer education literature- SMA and NPA classification",
                "link": "https://jswonefinance.in/pdfs/Customer_education_literature.pdf"
            },
            {
                "link_title": "Whistle Blower Policy",
                "link": "https://jswonefinance.in/pdfs/Whistle_Blower_Policy.pdf"
            }
        ]
    },
    {
        "title": "Contact us",
        "content": [
        {
            "contentTitle": "Registered address",
            "context": "6th floor, JSW centre, Bandra kurla complex, Bandra east, Mumbai - 400051"
        },
        {
            "contentTitle": "Corporate address",
            "context": "6th floor, Grande Palladium, CST Road, Kolivery Village, MMRDA Area, Kalina, Santacruz (E), Mumbai, Maharashtra – 400098"
        },
        {
            "contentTitle": "Contact details",
            "context": {
                "phone": "+91 7738207911",
                "email": "customercare@jswonefinance.in"
            }
        }
        ]
    }
]

const Footer = () => {
  return (
    <div>
    <div className={styles.footerContainer}>
        {footerDetails.map((item,index)=>(
                <div key={index} className={styles.footerNoteContainer}>
                    <h3 className={styles.footerHeading}>{item.title}</h3>
                    {item.links ? (
                        <div>
                            {item.links.map((policy, i)=> (
                                <div key={i} className={styles.footerItem}>
                                    <a href={policy.link} target="_blank" rel="noopener noreferrer">
                                        {policy.link_title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {item.content.map((contactDetail, j)=> (
                               <div key={j} className={styles.footerItem}>
                                    <strong>{contactDetail.contentTitle}</strong>
                                    {typeof contactDetail.context === "string" ? (<div className={styles.contactDetails}>{contactDetail.context}</div>) : (<div>
                                        <div className={styles.contactDetails}>Phone: {contactDetail.context.phone}</div>
                                        <div className={styles.contactDetails}>Email: {contactDetail.context.email}</div>
                                    </div>)}
                               </div>
                            ))}
                        </div>
                    )}
                </div>
            )
        )}
    </div>
           <div className={styles.disclaimerBox}>
           <strong>RBI disclaimer</strong>
           <p>Reserve Bank of India neither accepts any responsibility nor guarantees the present position as to the financial soundness of the company or for the correctness of any of the statements or representations made or opinions expressed by the company and for discharge of any liability by the company.
           </p>
           <p>Neither there is any provision in law to keep, nor does the company keep any part of the deposits with the Reserve Bank of India and by issuing a Certificate of Registration to the company, the Reserve Bank of India, neither accepts any responsibility nor guarantees the payment of the deposits to any depositor or any person who has lent any sum to the company.</p>
       </div>
       </div>
  );
}

export default Footer;