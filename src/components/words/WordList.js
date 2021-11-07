import WordItem from "./WordItem";

import styles from './WordList.module.css';

const WordList = (props) => {
  return (
    <ul className={styles.list}>
      {props.words.map((word) => (
        <WordItem
          key={word.id}
          id={word.id}
          title={word.title}
          definition={word.definition}
          phonetic={word.phonetic}
        />
      ))}
    </ul>
  );
};

export default WordList;
