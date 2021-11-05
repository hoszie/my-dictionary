import { Route, Routes } from 'react-router-dom';

import FullDictionary from './pages/FullDictionary';
import NewWord from './pages/NewWord';
import WordOfDay from './pages/WordOfDay';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <div>
    <MainNav />
      <Routes>
        <Route path='/' element={<FullDictionary />} />
        <Route path='/new-word' element={<NewWord />} />
        <Route path='/word-of-day' element={<WordOfDay />} />
      </Routes>
    </div>
  );
};

export default App;
