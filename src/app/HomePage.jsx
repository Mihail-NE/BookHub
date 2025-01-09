import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div>HomePage</div>
            <Link to="/about">About</Link>
            <Link to="/books">Contact</Link>
        </>
    );
};

export default HomePage;
