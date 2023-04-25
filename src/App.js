import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import PrivateRoutes from './utils/PrivateRoutes';
import { ContexProvider } from './contex/AuthContex';
import { useContext, useEffect } from 'react';
import SignUp from './pages/SignUp';

function App() {

  // const {authToken,loading,updateToken,setLoading} = useContext(ContexProvider)

//   useEffect(()=>{

//     setTimeout(()=>{
//         if(authToken){
//             updateToken()
//             setLoading(false)
//         }
//     },2000)
    
// },[authToken,loading])
  
  return (
      <div className="container dark">
        <div className="App">
          <Header />
          
            <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path='/note' element={<NotesListPage />} exact/>
                  <Route path='/note/:id' element={<NotePage />} />
                </Route>
                <Route path='/' element={<HomePage />} exact/>
                <Route path='/signUp' element={<SignUp />} exact/>
            </Routes>
          
        </div>
      </div>
  );
}

export default App;
