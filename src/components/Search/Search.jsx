import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchBtn}>
        🔍
      </button>
    </div>
  );
}

export default Search;