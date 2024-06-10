import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav> 
      <ul className="flex justify-end gap-4 p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <li className="hover:bg-lime-200 hover:px-4 rounded-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-lime-200 hover:px-4 rounded-2xl">
          <Link to="/owner">Owner</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
