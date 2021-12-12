import loading from '../recources/images/loading.gif'
import React, { useEffect } from 'react'

export default function Loading() {

    document.body.style = 'text-align: center;'
    document.body.style = 'opacity: 0; text-align: center;'

    useEffect(() => {
        document.body.style = 'opacity: 1; transition: 1s ease; text-align: center;'
    }, [])

    return (
        <img style={{width: '437px', height: '328px', marginTop: '13.5%'}} src={loading} />
    )
}