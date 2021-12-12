import classes from './Body.module.css'

export default function Body({list}) {
    return (
        <div style={{marginTop: '70px'}}>
            {list && list.map(list => <Card title={list.title} />)}
        </div>
    )
}

function Card({title, rating}) {
    return (
        <div class={classes.card + " card"}>
            <h1>{title}</h1>
        </div>
    )
}