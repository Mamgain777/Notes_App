import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import PrivateRoutes from './utils/PrivateRoutes';
import { ContexProvider } from './contex/AuthContex';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="App">
          <Header />
          
            <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path='/note' element={<NotesListPage />} exact/>
                  <Route path='/note/:id' element={<NotePage />} />
                </Route>
                <Route path='/' element={<HomePage />} exact/>
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
