import BookCard from "./BookCard";
import styles from "../style/Catalogue.module.css";
import { useEffect, useState } from "react";
import URLConst from "./URLConst";

const Catalogue = ({ sortby, groupby }) => {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [allPublishers, setAllPublishers] = useState([]);
  console.log(sortby)

  useEffect(() => {
    fetch(`${URLConst}/books`, {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((bks) => setBooks(bks));
  }, []);

  useEffect(() => {
    fetch(`${URLConst}/publishers`, {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((publ) => setAllPublishers(publ));
  }, []);

  useEffect(() => {
    if (sortby === "title") {
      setSortedBooks(
        books.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        })
      );
    } else
    if (sortby === "publisherId") {
      setSortedBooks(
        books.sort((a, b) => {
          if (
            allPublishers[
              allPublishers.map((p) => p.id).indexOf(a.publisherId)
            ].name >
            allPublishers[
              allPublishers.map((p) => p.id).indexOf(b.publisherId)
            ].name
          ) {
            return 1;
          }
          if (
            allPublishers[
              allPublishers.map((p) => p.id).indexOf(a.publisherId)
            ].name <
            allPublishers[
              allPublishers.map((p) => p.id).indexOf(b.publisherId)
            ].name
          ) {
            return -1;
          }
          return 0;
        })
      );
    }
    // if (sortby === "title") {
    //   setSortedBooks(
    //     books.sort((a, b) => {
    //       if (a.title > b.title) {
    //         return 1;
    //       }
    //       if (a.title < b.title) {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //   );
    // }
    // if (sortby === "title") {
    //   setSortedBooks(
    //     books.sort((a, b) => {
    //       if (a.title > b.title) {
    //         return 1;
    //       }
    //       if (a.title < b.title) {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //   );
    // }
  });

  return (
    <div className={`${styles.Catalogue}`}>
      {sortedBooks.map((book, i) => (
        <BookCard book_id={book.id} book_title={book.title} key={i} />
      ))}
    </div>
  );
};
export default Catalogue;
