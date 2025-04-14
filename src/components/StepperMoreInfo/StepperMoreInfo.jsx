import React from "react";
import styles from "./StepperMoreInfo.module.css";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const StepperMoreInfo = ({ moreInfo, setShowMoreInfoData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img src={moreInfo.imageURL} className={styles.imageStyles} />
      </div>
      <div className={styles.moreInfoContextContainer}>
        {moreInfo.context.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <IconButton
        aria-label="close"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClick={() => setShowMoreInfoData({})}
      >
        <CloseIcon />
      </IconButton>

      <Button variant="contained" sx={{backgroundColor: "darkblue"}} onClick={() => setShowMoreInfoData({})}>Close</Button>
    </div>
  );
};

export default StepperMoreInfo;
