import Inputs from "./Inputs";
import Body from "../Search/Body";
import Loading from "../Loading";
import Navbar from '../Home-Page/Navbar'
import Axios from 'axios';


import React, { useState, useEffect } from 'react'


export default function Foods() {

    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState(undefined);
    const [foods, setFoods] = useState('');

    

    const submit = () => {
        setLoading(true)
        // we would get some data here
        setTimeout(() => {
            setLoading(false)
            setList([{title: 'hello'}, {title: 'hello'}])
        }, 5000);
    }


    // const getFoods = async()=> {
    //     const result = await Axios.get(`https://sabadmodi.pythonanywhere.com/recipe?ingredients=${inputs}`)
    //     setFoods(result.data.hits);
    //   }

   


    useEffect(() => {
        document.body.style = 'opacity: 1; transition: 1s ease; background: #E3E9FF';
    }, [])

    return (
        
        <>
        <Navbar/>
            {
                !isLoading
                ?
                    !list
                    ?
                        <Inputs submit={submit} />
                    :
                        <Body list={list}/>
                :
                    <Loading />
            }
        </>
    )
}