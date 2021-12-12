import './Body.css';
import recipe from '../../recources/images/recipe.png';
import ingredients from '../../recources/images/grocery.png';
import food from '../../recources/images/roasted-chicken.png'

export default function Body() {
    return (
        <div class="cards">
            <Card title="Search for Global Food Recipes" img={recipe} />
            <Card title="Find Foods to Make With Ingredients" img={ingredients} />
            <Card title="Personalised Recipes for You!" img={food} />
        </div>
    )
}

function Card({img, title}) {
    return (
        <div class="card">
            <h1>{title}</h1>
            <img src={img} />
            <br/>
        </div>
    )
}