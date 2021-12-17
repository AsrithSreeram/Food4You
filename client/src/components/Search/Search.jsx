import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react'
import Loading from "../Loading";
import Body from "./Body";
import axios from 'axios';
import Navbar from '../Home-Page/Navbar'



export default function Search() {
    
    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const submit = () => {
        setLoading(true)
        // we would get some data here
        setTimeout(() => {
            setLoading(false)
            setList([{title: 'hello'}, {title: 'hello'}])
        }, 5000);
    }

    useEffect(() => {
        document.body.style = 'opacity: 1; transition: 1s ease; background: #E3E9FF';
    }, [])
    
    return (
        <>
        <Navbar/>
            {
                isLoading ?
                <Loading />
                :
                <>
                    <SearchBar submit={submit}/>
                    <Body list={list} />
                </>
            }
        </>
    )
}