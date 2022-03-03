import { useEffect } from "react";
import { useState } from "react";
import URLConst from "./URLConst";
import book_cover from "../images/book-cover.png";
import styles from "../style/BookInfo.module.css";
import Button from "./Button";

const BookInfo = ({ match }) => {
  const [book, setBook] = useState({
    id: 0,
    title: "",
    description: "",
    publisherId: 0,
    real: [],
    reviews: [],
    authors: [
      {
        id: 0,
        name: "",
        description: "",
      },
    ],
    styles: [
      {
        id: 0,
        name: "",
        description: null,
      },
    ],
  });

  const handleOrder = async () => {
    return
    // await fetch(`${URLConst}/`)
  }

  useEffect(() => {
    fetch(`${URLConst}/books/${match.params.id}`)
      .then((res) => res.json())
      .then((res) => setBook(res));
  }, []);

  return (
    <div className={styles.BookInfo}>
      <div className={styles.img}>
        <img src={book_cover} />
      </div>
      <div className={styles.side}>
        <div className={styles.top}>
          <p className={styles.title}>{book.title}</p>
          <Button gold onClick={handleOrder}>Забронировать</Button>
        </div>
        <div className={styles.authors}>
          {book.authors.map((author, i) => (
            <p key={i}>{author.name}</p>
          ))}
        </div>
        <p className={styles.descr}>{book.description}</p>
      </div>
    </div>
  );
};
export default BookInfo;
