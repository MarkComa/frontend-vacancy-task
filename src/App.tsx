import './App.css'
import { Layout } from './Layout/Layout'
import { Tokens } from './components/screens/Tokens/Tokens'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Search } from './components/screens/Search/Search';

function App() {

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Tokens/>}/>
          <Route path='/tokens' element={<Tokens/>}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Layout>
  )
}

export default App
