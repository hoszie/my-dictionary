import { useNavigate } from 'react-router-dom';

import NewWordForm from "../components/words/NewWordForm";

const NewWord = () => {
  const navigate = useNavigate();

  const addWordHandler = (newWordData) => {
    fetch(
      "https://react-dictionary-9576f-default-rtdb.firebaseio.com/words.json",
      {
        method: "POST",
        body: JSON.stringify(newWordData),
        header: {
          "Content-type": "application/json",
        }
      }
    ).then(() => {
      navigate('/')
    });
  };

  return (
    <section>
      <h1>Add New Word</h1>
      <NewWordForm onAddWord={addWordHandler} />
    </section>
  );
};

export default NewWord;
