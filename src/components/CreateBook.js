import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import colors from "../style/Colors.module.css";
import stylesheet from "../style/CreateObj.module.css";
import SelectedOption from "./SelectedOption";
import URLConst from "./URLConst";

const CreateBook = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState([]);
  const [publisher, setPublisher] = useState("");
  const [styles, setStyles] = useState([]);

  const [allStyles, setAllStyles] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allPublishers, setAllPublishers] = useState([]);

  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    fetch(`${URLConst}/styles`)
      .then((res) => res.json())
      .then((res) => setAllStyles(res));
  }, []);
  useEffect(() => {
    fetch(`${URLConst}/authors`)
      .then((res) => res.json())
      .then((res) => setAllAuthors(res));
  }, []);
  useEffect(() => {
    fetch(`${URLConst}/publishers`)
      .then((res) => res.json())
      .then((res) => setAllPublishers(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URLConst}/books`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        authors: selectedAuthors.map((a) => a.id),
        publisherId: publisher,
        styles: selectedStyles.map((s) => s.id),
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert(`Книга ${title} создана`);
  };

  return (
    <div className={stylesheet.CreateObj}>
      <p>Создание книги</p>
      <div className={`${colors.bggray}`}>
        <input
          placeholder="Название"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={`${colors.bggray}`}>
        <textarea
          placeholder="Описание"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <SelectedOption
        options={allAuthors}
        setSelectedOptions={setSelectedAuthors}
        selectedOptions={selectedAuthors}
      />
      <div className={`${colors.bggray}`}>
        <input
          list="publisher_list"
          placeholder="Издатель"
          onChange={(e) =>
            setPublisher(
              allPublishers[
                allPublishers.map((p) => p.name).indexOf(e.target.value)
              ].id
            )
          }
        />
      </div>
      <datalist id="publisher_list">
        {allPublishers.map((publisher, index) => (
          <option index={publisher.id} value={publisher.name}>
            {publisher.address}
          </option>
        ))}
      </datalist>
      <SelectedOption
        options={allStyles}
        setSelectedOptions={setSelectedStyles}
        selectedOptions={selectedStyles}
      />
      <Button gold onClick={handleSubmit}>
        Создать
      </Button>
    </div>
  );
};
export default CreateBook;
