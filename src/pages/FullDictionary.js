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
      <ul>
        <h2>This is my full Dictionary</h2>
        {DUMMY_DATA.map((word) => {
          return (
            <li key={word.id}>
              {word.title} - {word.definition}
              {<br />}{word.phonetic}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FullDictionary;
