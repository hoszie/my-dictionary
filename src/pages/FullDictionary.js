import WordList from '../components/words/WordList';

const DUMMY_DATA = [
  {
    id: "w1",
    title: "meretricious",
    definition: "apparently attractive but having no real value",
    phonetic: "ˌmɛrɪˈtrɪʃəs",
  },
  {
    id: "w2",
    title: "sequacious",
    definition: "lacking independence or originality of though",
    phonetic: "ˌsɪˈkweɪʃəs",
  },
];

const FullDictionary = () => {
  return (
    <section>
      <h2>My Full Dictionary</h2>
      <WordList words={DUMMY_DATA}/>
    </section>
  );
};

export default FullDictionary;
