import { useSelector } from "react-redux";
import CreateAuthor from "../components/CreateAuthor";
import CreateBook from "../components/CreateBook";
import CreatePublisher from "../components/CreatePublisher";
import CreateStyle from "../components/CreateStyle";
import styles from "../style/CreatePG.module.css";

const CreatePG = () => {
  const user = useSelector(state => state.auth.user)

  if (user.role === 'ADMIN') {
  return (
    <div className={styles.CreatePGWrapper}>
      <CreateBook />
      <CreateAuthor />
      <CreatePublisher />
      <CreateStyle />
    </div>
  );
  }
  if (!user.role) {
      return <>User unauthorized</>
  } else {
      return <>Access denied</>
  }
};
export default CreatePG;
