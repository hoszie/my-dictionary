import { Route, Routes } from 'react-router-dom';

import FullDictionary from './pages/FullDictionary';
import NewWord from './pages/NewWord';
import WordOfDay from './pages/WordOfDay';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<FullDictionary />} />
        <Route path='/new-word' element={<NewWord />} />
        <Route path='/word-of-day' element={<WordOfDay />} />
      </Routes>
    </Layout>
  );
};

export default App;
