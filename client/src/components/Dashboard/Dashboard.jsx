import Sidebar from "./Sidebar";
import './Dashboard.css'
import Navbar from '../Home-Page/Navbar'
import recipe from '../../recources/images/recipe.png';
import ingredients from '../../recources/images/grocery.png';
import food from '../../recources/images/roasted-chicken.png'


export default function Dashboard() {

    document.body.style = 'background: #F8F8FF;'

    return (
        <div>
        <Navbar/>
        <Sidebar />
        <div className = "dashboard">
            <h2>Your Dashboard</h2>
            <p>Check out some stuff</p>
            <CardHeadline title = "Hello!" description = "Check out the features our application offers!" img={food} button1="Recipes" button2 = "Foods!!!"/>

            <Card title="Alfredo Pasta" img={recipe} />
            <Card title="Caesar Salad" img={ingredients} />
            <Card title="Chicken Wings" img={food} />
            <br/><br/>

        </div>

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

function CardHeadline({img, title, description, button1, button2}) {
    return (
        <div class="card2">
            <div style = {{display: "flex", justifyContent: "space-between"}}>
            <h1>{title}</h1>
            <a href = "/search"><button className = "buttonHeadline">{button1}</button></a>
            </div>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
            <p>{description}</p>
            <a href = "/foods"><button className = "buttonHeadline">{button2}</button></a>
            </div>
            
            <br/>
        </div>
    )
}