import styles from "../style/BookCard.module.css";
import colors from "../style/Colors.module.css";
import { Link } from "react-router-dom";
import book_cover from "../images/book-cover.png";
import { useState } from "react";
import { useEffect } from "react";
import URLConst from "./URLConst";

const BookCard = ({ book_id, book_title }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    fetch(`${URLConst}/books/${book_id}`, {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((book) => setBook(book));
  }, []);

  return (
    <Link to={`books/` + book_id} className={colors.txtblack}>
      <div id={book_id} className={`${styles.BookCard}`}>
        <div className={styles.img}>
          <img src={book_cover} />
        </div>
        <div className={`${styles.title_p}`}>
          <p>{book_title}</p>
        </div>
        <div
          className={`${styles.rate_p} ${colors.bglgray} ${colors.txtdgray}`}
        >
          <p>4/5 ⋆⋆⋆⋆</p>
        </div>
      </div>
    </Link>
  );
};
export default BookCard;
