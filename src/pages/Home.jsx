const Home = () => {
  const storedTheme = localStorage.getItem("theme");
 
  return (
    <div className="max-h-screen  relative">
      <div className="h-150 w-160 fixed top-0 right-0 -z-10 animate-slide-in-right [animation-delay:200ms] ">
        <img
          src={`${storedTheme === "dark" ? "li-bg.png" : "dr-bg.png"}`}
          alt=""
        />
      </div>
      {/* <div className="h-150 w-160 fixed top-0 right-0 -z-10">
        <img src="image.png" alt="" />
      </div> */}

      <main className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-start py-25 animate-slide-in-left [animation-delay:200ms]">
          <h1 className="text-6xl text-primary dark:bg-primary font-semibold ">
            Hello,my name
          </h1>
          <h1 className="text-6xl text-foreground dark:text-foreground font-semibold font-mono mt-2">
            Shailesh yadav
          </h1>
          <p className="text-start mt-8 text-foreground ">
            I'm a self-taught web developer on a journey to build the modern
            web. From my first "Hello World" to complex full-stack projects, I
            love the process of learning something new every day. Check out my
            work below!
          </p>
          <div className="mt-10 flex items-center gap-5 animate-slide-in-bottom [animation-delay:200ms] ">
            <button className="rounded text-pr px-6 py-2 text-xl shadow border-2 border-primary  bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground">
              contact
            </button>
            <button className="rounded text-pr px-6 py-2 text-xl shadow border-2 border-primary text-primary">
              connect
            </button>
          </div>
        </div>
        <div class="grid place-content-center"></div>
      </main>
    </div>
  );
};

export default Home;
