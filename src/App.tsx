import './App.css'
import { Layout } from './screens/Layout/Layout'
import { Tokens } from './screens/Tokens/Tokens'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Search } from './screens/Search/Search';
import { TokenPage } from './screens/TokenPage/TokenPage';

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
