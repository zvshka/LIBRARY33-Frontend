import { Link } from "react-router-dom";
import Catalogue from "../components/Catalogue";
import SearchEl from "../components/SearchEl";
import styles from "../style/Books.module.css";
import colors from "../style/Colors.module.css";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useState } from "react";

const Books = () => {
  const user = useSelector((state) => state.auth.user);

  const [sorting, setSorting] = useState("title");
  const [grouping, setGrouping] = useState("none");

  return (
    <>
      <div className={styles.header}>
        <div>
          <p>Каталог доступных книг</p>
          {user.role === "ADMIN" ? (
            <Link to="/Create_PG">
              <Button gold>Создать книгу</Button>
            </Link>
          ) : (
            ""
          )}
        </div>

        <div className={styles.sorting_group}>
          <div className={`${colors.bggray} ${styles.sorting}`}>
            <p>Сортировка:</p>
            <select id="sorting" onChange={(e) => setSorting(e.target.value)}>
              <option value="title">Название</option>
              <option value="author">Автор</option>
              <option value="style">Жанр</option>
              <option value="publisherId">Издатель</option>
            </select>
          </div>
          <div className={`${colors.bggray} ${styles.sorting}`}>
            <p>Группировка:</p>
            <select id="grouping" onChange={(e) => setGrouping(e.target.value)}>
              <option value="none">Нет</option>
              <option value="author">Автор</option>
              <option value="style">Жанр</option>
              <option value="publisherId">Издатель</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.main}>
        <SearchEl />
        <Catalogue sortby={sorting} groupby={grouping} />
      </div>
    </>
  );
};
export default Books;
