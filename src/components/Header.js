import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>ToDo List</h1>
            <Link to="/enquery" className="link"><h3>Enqueries</h3></Link>
            <Link to="/food-items" className="link"><h3>Food Items</h3></Link>
        </div>
    );
}

export default Header;