import { useRef } from 'react';

import Card from "../ui/Card";
import styles from "./NewWordForm.module.css";

const NewWordForm = props => {
  const titleInputRef = useRef();
  const definitionInputRef = useRef();
  const phoneticInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDefinition = definitionInputRef.current.value;
    const enteredPhonetic = phoneticInputRef.current.value;

    const newWordData = {
      title: enteredTitle,
      defition: enteredDefinition,
      phonetic: enteredPhonetic
    };

    props.onAddWord(newWordData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">New Word</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="definition">Definition</label>
          <textarea id="definition" required rows="3s" ref={definitionInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="phonetic">Phonetics</label>
          <input type="text" required id="phonetic" ref={phoneticInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Add New Word</button>
        </div>
      </form>
    </Card>
  );
};

export default NewWordForm;
