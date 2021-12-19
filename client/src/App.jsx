import { useState, useEffect } from 'react'
import HomePage from "./components/Home-Page/HomePage";
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Search from "./components/Search/Search";
import Foods from "./components/Foods/Foods";
import Dashboard from "./components/Dashboard/Dashboard";
import { auth } from "./components/data"


export default function App() {

    const [user, setUser] = useState(null);


    useEffect(() => {
        auth.onAuthStateChanged(user => {
          setUser(user);
          console.log(user)
        })

       
        
      }, [])

      

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}