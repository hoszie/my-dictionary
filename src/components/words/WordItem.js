import Card from "../ui/Card";

import styles from "./WordItem.module.css";

const WordItem = (props) => {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <p>{props.phonetic}</p>
          <h3>{props.definition}</h3>
        </div>
      </Card>
    </li>
  );
};

export default WordItem;
