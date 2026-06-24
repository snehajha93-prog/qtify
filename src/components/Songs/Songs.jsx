import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    fetchSongs();
    fetchGenres();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );

      setSongs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );

      setGenres(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter(
          (song) => song.genre.key === selectedGenre
        );

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Songs</h2>

      <Tabs
        value={selectedGenre}
        onChange={(event, value) => setSelectedGenre(value)}
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            image={song.image}
            follows={song.likes}
            title={song.title}
            isSong={true}
          />
        )}
      />
    </div>
  );
}

export default Songs;