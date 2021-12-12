import './Navbar.css';

export default function Navbar() {
    return (
        <nav class={"navbar navbar-expand-lg navbar-dark bg-navbar"}>
            <span class="navbar-brand mb-0 h1" style={{fontSize: "25px"}}>FOOD HELPER</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto" style={{fontSize: '20px'}}>
                    <li class="nav-item">
                    <a class="nav-link" href="/foods">Foods <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/search">Search</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/sign-in">Sign in</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}