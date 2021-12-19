import { useState } from 'react'
import './Inputs.css'
import Axios from 'axios';
import Foods from './Foods'


export default function Inputs({submit}) {

    const [inputs, setInputs] = useState([''])
    const [foods, setFoods] = useState('')


    function change(id, value) {
        setInputs(prev => {
            let arr = prev;
            arr[id] = value;
            return [...arr]
        })
    }

  


    

    document.body.style = 'background-color: #e3e9ff;';

    return (
        <>
            <div class="header">
                <h5>Enter the ingredients you wish to use</h5>
            </div>

            <div style = {{display: "none"}}>
            {/* <Foods inputs = {inputs} /> */}
            </div>

            {console.log(inputs)}
            <div class="input-card">
                {inputs.map((input, i) => {
                    return <Input id={i} change={change} key={i} />
                })}
                <button class="input-add" onClick={() => {
                    setInputs(prev => {
                        return [...prev, ',']
                    })
                }}>
                    <i class="fas fa-plus" />
                </button>
            </div>

            <button class="btn btn-purple" onClick={submit}>
                Find Foods
            </button>
        </>
    )
}

function Input({id, change}) {

    const handle = (event) => {
        change(id, event.target.value);
    }

    return (
        <input type="text" onChange={handle} />
    )
}