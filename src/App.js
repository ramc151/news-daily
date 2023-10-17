
import './App.css';

import React, { useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const page = 5
  const [progress, setProgress] = useState(0)
  const apikey = process.env.REACT_API_KEY


  return (
    <>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='general' category='general' />}></Route>
          <Route path='/business' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='business' category='business' />}></Route>
          <Route path='/entertainment' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='entertainment' category='entertainment' />}></Route>
          <Route path='/general' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='general' category='general' />}></Route>
          <Route path='/health' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='health' category='health' />}></Route>
          <Route path='/science' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='science' category='science' />}></Route>
          <Route path='/sports' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='sports' category='sports' />}></Route>
          <Route path='/technology' element={<News pageSize={page} country='in' apikey={apikey} setProgress={setProgress} key='technology' category='technology' />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App