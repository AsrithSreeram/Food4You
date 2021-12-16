import './Sidebar.css'
import img from '../../recources/images/list.png';
import img2 from '../../recources/images/book.png';
import search from '../../recources/images/search.png'

export default function Sidebar() {
    return (
        <div class="sidebar">
            <h1>FOOD</h1>

            <a class="item active">
                <div class="img">
                    <img src={img} />
                </div>
                <span>Dashboard</span>
            </a>

            <a class="item" href="/search">
                <div class="img">
                    <img src={search} />
                </div>
                <span>Search</span>
            </a>

            <a class="item" href="/recipe">
                <div class="img">
                    <img src={img2} />
                </div>
                <span>Recipe</span>
            </a>
        </div>
    )
}