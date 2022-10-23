import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <h1>ToDo List</h1>
        <Link to="/enquery"><h1>Enquery</h1></Link>
        </>
    );
}

export default Header;