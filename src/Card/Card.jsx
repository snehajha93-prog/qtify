import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} />

        <div className={styles.chipContainer}>
          <Chip
            label={`${follows} Follows`}
            size="small"
            sx={{
              backgroundColor: "#121212",
              color: "#fff",
            }}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;