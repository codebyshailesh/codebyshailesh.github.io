import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setSelectedTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-h-screen relative">
      <div className="h-150 w-160 fixed top-0 right-0 -z-10 animate-slide-in-right [animation-delay:200ms]">
        <img
          src={selectedTheme === "light" ? "li-bg.png" : "dr-bg.png"}
          alt=""
        />
      </div>

      <main className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-start py-25 animate-slide-in-left [animation-delay:200ms]">
          <h1 className="text-6xl text-primary dark:bg-primary font-semibold">
            Hello, my name
          </h1>
          <h1 className="text-6xl text-foreground dark:text-foreground font-semibold font-mono mt-2">
            Shailesh Yadav
          </h1>
          <p className="text-start mt-8 text-foreground">
            I'm a self-taught web developer on a journey to build the modern
            web. From my first "Hello World" to complex full-stack projects, I
            love the process of learning something new every day. Check out my
            work below!
          </p>

          <div className="mt-10 flex items-center gap-5 animate-slide-in-bottom [animation-delay:200ms]">
            <button className="rounded px-6 py-2 text-xl shadow border-2 border-primary bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:-translate-y-0.5 transition-all duration-200">
              <Link to="/contact">Contact</Link>
            </button>

            <div className="flex justify-center items-center gap-5 px-6 py-2 rounded">
              <div className="animate-slide-in-bottom [animation-delay:600ms]">
                <a href="https://www.whatsapp.com/">
                  <FaWhatsapp className="h-9 w-9 text-primary hover:text-foreground hover:scale-[1.2] transition-all duration-300" />
                </a>
              </div>
              <div className="animate-slide-in-bottom [animation-delay:700ms]">
                <a href="https://www.github.com/">
                  <FaGithub className="h-9 w-9 text-primary hover:text-foreground hover:scale-[1.2] transition-all duration-300" />
                </a>
              </div>
              <div className="animate-slide-in-bottom [animation-delay:800ms]">
                <a href="https://www.instagram.com/">
                  <FaInstagram className="h-9 w-9 text-primary hover:text-foreground hover:scale-[1.2] transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-content-center"></div>
      </main>
    </div>
  );
};

export default Home;
