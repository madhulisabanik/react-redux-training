import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <Link to="/" className="navbar-brand">ToDo List</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/enquery" className="nav-link">Enqueries</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/food-items" className="nav-link">Food Items</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;