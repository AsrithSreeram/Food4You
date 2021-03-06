import './SearchBar.css';
import img from '../../recources/images/magnifying-glass.png'
import Loading from '../Loading';
import React, { useEffect } from 'react';


export default function SearchBar(props) {

    document.body.style = 'background: #E3E9FF';
    const {search, updateSearch}= props;

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getSearch()
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <div class="search">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onchange={updateSearch} />
                    <button type="submit">
                        <img src={img} />
                    </button>
                </form>
            </div>
        </>
    )
}