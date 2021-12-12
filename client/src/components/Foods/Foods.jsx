import Inputs from "./Inputs";
import Body from "../Search/Body";
import Loading from "../Loading";
import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Foods() {

    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState(undefined);

    const submit = () => {
        setLoading(true)
        // we would get some data here
        setTimeout(() => {
            setLoading(false)
            setList([{title: 'hello'}, {title: 'hello'}])
        }, 5000);

        axios
        .get("http://localhost:5000/recipe/")
        .then((response) => {
          this.setState({ records: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }



    useEffect(() => {
        document.body.style = 'opacity: 1; transition: 1s ease; background: #E3E9FF';
    }, [])

    return (
        <>
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