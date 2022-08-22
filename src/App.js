import React, { useState } from 'react'
import Local from './pages/local'
import Total from './pages/total'
import Bookmarked from './pages/bookmarked'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Local/>}/>
        <Route path="total" element={<Total/>}/>
        <Route path="bookmarked" element={<Bookmarked/>}/>
      </Routes>
      <nav>
        <Link to="/">내 지역 보기</Link> 
        <Link to="/total">전체 시도 보기</Link>
        <Link to="/bookmarked">즐겨찾기</Link>
      </nav>
    </div>
  )
}

export default App
