import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react'
import Loading from "../Loading";
import Body from "./Body";
import Axios from 'axios';
import Navbar from '../Home-Page/Navbar'



export default function Search() {
    
    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [recipes,setRecipes] = useState([]);
    const APP_ID = "ac7c773b";     // Get API ID from here https://developer.edamam.com/
    const APP_KEY = "5c2563407e5ec5f547edc77ce221e637";

  

    const getRecipes = async()=> {
        const result = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
          setRecipes(result.data.hits);
      }

      const updateSearch = e => {
        setLoading(true)
        setSearch(e.target.value);
        setQuery(e.target.value)
      };

      const getSearch = () => {
        setQuery(search);
        setSearch("");
      }

    useEffect(() => {
        document.body.style = 'opacity: 1; transition: 1s ease; background: #E3E9FF';
        getRecipes()
    }, [query])
    
    return (
        <>
        <Navbar/>
            {
                isLoading ?
                <Loading />
                :
                <>
                    <SearchBar mysearch={search} updateSearch = {updateSearch} getSearch = {getSearch}/>
                    <Body recipes={recipes}/>
                </>
            }
        </>
    )
}