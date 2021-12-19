import './Sidebar.css'
import img from '../../recources/images/list.png';
import img2 from '../../recources/images/book.png';
import search from '../../recources/images/search.png'

export default function Sidebar() {
    return (
        <div class="sidebar">
            <a href = "/"><h1>FOOD4YOU</h1></a>

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

            <a class="item" href="/foods">
                <div class="img">
                    <img src={img2} />
                </div>
                <span>Foods</span>
            </a>
        </div>
    )
}