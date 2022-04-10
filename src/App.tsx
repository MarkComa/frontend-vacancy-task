import './App.css'
import { Layout } from './Layout/Layout'
import { Tokens } from './components/screens/Tokens/Tokens'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Search } from './components/screens/Search/Search';
import { TokenPage } from './components/screens/TokenPage/TokenPage';

function App() {

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/tokens'/>}/>
          <Route path='/tokens' element={<Tokens/>}/>
          <Route path='/tokens/:id' element={<TokenPage />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Layout>
  )
}

export default App
