import './App.css'
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import PostEmployee from './component/PostEmployee/PostEmployee';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/post" element={<PostEmployee/>} />

      </Routes>
    </>
  )
}

export default App
