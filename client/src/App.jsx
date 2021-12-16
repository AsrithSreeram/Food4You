import HomePage from "./components/Home-Page/HomePage";
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Search from "./components/Search/Search";
import Foods from "./components/Foods/Foods";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}