import { useEffect } from "react";
import { useState } from "react";
import styles from "../style/SelectedOption.module.css";

const SelectedOption = ({ options, setSelectedOptions, selectedOptions }) => {

  const [givenOptions, setGivenOptions] = useState([]);
  useEffect(() => {
    setGivenOptions(options);
  }, [options]);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.className === "active") {
      e.target.className = "inactive";
      e.target.style.backgroundColor = "#fff";
      const index = parseInt(e.target.name);
      const indexInSelected = selectedOptions.indexOf(givenOptions[index]);
      setSelectedOptions(
        selectedOptions
          .slice(0, indexInSelected)
          .concat(selectedOptions.slice(indexInSelected + 1))
      );
    } else if (e.target.className === "inactive") {
      e.target.className = "active";
      e.target.style.backgroundColor = "#efefef";
      const index = parseInt(e.target.name);
      setSelectedOptions([...selectedOptions, givenOptions[index]]);
    }
  };
  const handleDelete = (e) => {
    selectedOptions = selectedOptions
      .slice(0, e.target.name)
      .concat(selectedOptions.slice(e.target.name + 1));
  };
  return (
    <div className={styles.selected_option}>
      <div>
        {selectedOptions.map((option, index) => (
          <button name={index} onClick={handleDelete}>
            {option.name}
          </button>
        ))}
      </div>
      <div>
        {givenOptions.map((option, index) => (
          <button className="inactive" name={index} onClick={handleClick}>
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectedOption;
