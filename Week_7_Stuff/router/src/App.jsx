import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import { useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
        </Routes>
    </BrowserRouter>
  );
}

function AppBar(){
  const nav = useNavigate();
  return (
    <>
      <button onClick={()=>{  
        nav('/')
      }}>Landing Page</button>
      <button onClick={()=>{
        nav('/dashboard')
      }}>Dashboard</button>
    </>
  )
}

export default App;