import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
<<<<<<< Updated upstream
=======
  const { pathname } = useLocation();
>>>>>>> Stashed changes
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center  py-5">
      <h1 className="text-2xl font-bold ml-10">Shailesh</h1>
      <nav className="flex items-center gap-10">
        {/* Use Link for instant page switching */}
        <Link to="/" className="hover:text-blue-500 relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/about" className="hover:text-blue-500  relative group">
          About
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/project" className="hover:text-blue-500  relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/contact" className="hover:text-blue-500 relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <ThemeToggle/>  
      </nav>
    </div>
  );
};

export default Navbar;
