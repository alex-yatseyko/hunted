import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/index.module.sass";

const Rating: React.FC<{ stars: number; color: string }> = ({
  stars,
  color = "rgb(105 105 105);",
}) => {
  const fillStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    fillStars.push(
      <div
        key={i}
        className={styles.fillStarWrapper}
        style={{ background: color }}
      >
        <FontAwesomeIcon icon={faStar} className={styles.star} />
      </div>
    );
    emptyStars.push(
      <div key={i} className={styles.starWrapper}>
        <FontAwesomeIcon icon={faStar} className={styles.star} />
      </div>
    );
  }
  return (
    <>
      <div className={styles.ratingWrapper}>
        <div
          style={{
            width: `${Math.floor((stars / 5) * 100)}%`,
          }}
          className={styles.fillStarsWrapper}
        >
          {fillStars}
        </div>
        <div className={styles.starsWrapper}>{emptyStars}</div>
      </div>
    </>
  );
};

export default Rating;
