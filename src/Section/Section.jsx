import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Top Albums</h2>

        <button className={styles.collapseBtn}>
          Collapse
        </button>
      </div>

      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;