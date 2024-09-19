import React from "react";
import styles from "./ProCard.module.css";

const ProCard = () => {


  return (
    <div className={styles.cardbox}>
      <div className={styles.cardImg}>
        <img src='' alt="api-img" />
        <div className={styles.cate}>Category</div>
      </div>
      <div className={styles.cardContext}>
        <h4>Title</h4>
        <span>description</span>
        <h3 style={{ color: "red" }}>$Price</h3>
        {/* <StarRatings
      rating={rate}
      starDimension="20px"
      starSpacing="0px"
      starRatedColor='#FFC107'
      /> */}
        <button>Add</button>
      </div>
    </div>
  );
};

export default ProCard;
