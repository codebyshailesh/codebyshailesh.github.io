import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
  const { pathname } = useLocation();
>>>>>>> Stashed changes
=======
  const { pathname } = useLocation();
  const isHome = pathname === "/";

>>>>>>> fa843c766ce6f97a81ae5268f4a76cc7a2783c7e
  return (
    <div className="w-full transition-colors duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-7">
        <h1 className="text-2xl font-bold ml-10 text-primary dark:text-primary">
          Shailesh
        </h1>

        <nav className="flex items-center gap-10">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/project", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-lg relative group transition-colors duration-200 text-foreground dark:text-foreground ${
                pathname === to ? "font-semibold" : ""
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100 ${
                  pathname === to ? "scale-x-100" : ""
                }`}
              />
            </Link>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
