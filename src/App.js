import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' exact Component={NotesListPage} />
            <Route path='/note/:id' Component={NotePage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
