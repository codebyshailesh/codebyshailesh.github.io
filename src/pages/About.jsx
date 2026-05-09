import { useEffect, useState } from "react";

const About = () => {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
=======
  const storedTheme = localStorage.getItem("theme");
  console.log(storedTheme);

>>>>>>> fa843c766ce6f97a81ae5268f4a76cc7a2783c7e
  return (
    <div className="flex justify-between items-center my-10 p-10 gap-20 rounded-2xl">
      <div className="flex items-start flex-col">
        <span className="text-lg font-bold  text-accent tracking-widest uppercase animate-slide-in-left [animation-delay:100ms]">
          Who I am
        </span>

        <h1 className="text-4xl font-bold mt-3 text-foreground dark:text-foreground animate-slide-in-left [animation-delay:200ms]">
          About me
        </h1>

        <div className="w-12 h-1 bg-primary rounded mt-3 mb-5 animate-slide-in-left [animation-delay:300ms]" />

        <p className="text-muted dark:text-muted text-start leading-relaxed animate-slide-in-left [animation-delay:400ms]">
          Hi, I'm Shailesh — a passionate web developer who loves turning ideas
          into clean, functional, and beautiful digital experiences. I
          specialize in building modern web applications with a strong focus on
          performance, accessibility, and intuitive design. Whether it's
          crafting a pixel-perfect UI or wiring up a solid backend, I bring care
          and precision to every line of code. I'm always exploring new tools,
          sharpening my skills, and looking for the next problem worth solving.
        </p>

        <button className="mt-8 px-6 py-2.5 rounded-md text-lg font-medium bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm animate-slide-in-bottom [animation-delay:500ms]">
          Contact me
        </button>
      </div>
<<<<<<< HEAD
<<<<<<< Updated upstream
      <div className="animate-slide-in-right [animation-delay:200ms]">
        <div className="w-70 h-70 bg-amber-700 rounded-full"></div>
=======

      <div className="animate-slide-in-right [animation-delay:200ms] shrink-0">
        <img
          src={`${selectedTheme === "light" ? "li-profile.png" : "dr-profile.png"}`}
          alt="Shailesh"
          className="w-96 rounded-2xl object-cover"
        />
>>>>>>> Stashed changes
=======

      <div className="animate-slide-in-right [animation-delay:200ms] shrink-0">
        <img
          src={`${storedTheme === "light" ? "li-img.png" : "dr-img.png"}`}
          alt="Shailesh"
          className="w-96 rounded-2xl object-cover"
        />
>>>>>>> fa843c766ce6f97a81ae5268f4a76cc7a2783c7e
      </div>
    </div>
  );
};

export default About;
