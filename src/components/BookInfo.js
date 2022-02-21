import { useEffect } from "react";
import { useState } from "react";
import URLConst from './URLConst'

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

  useEffect(() => {
    fetch(`${URLConst}/books/${match.params.id}`).then((res) => res.json()).then((res) => setBook(res))
  }, [])

  return (
    <div id={match.params.id}>
      <p>{book.title}</p>
    </div>
  );
};
export default BookInfo;
