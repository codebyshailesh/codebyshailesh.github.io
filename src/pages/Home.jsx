const Home = () => {
  return (
    <div className="max-h-screen relative">
      <div className="h-150 w-160 fixed top-0 right-0 -z-10">
        <img src="image.png" alt="" />
      </div>

      <main className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-start py-25 animate-slide-in-left [animation-delay:200ms]">
          <h1 className="text-6xl font-semibold ">Hello,my name</h1>
          <h1 className="text-6xl font-semibold">Shailesh yadav</h1>
          <p className="text-start mt-8 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            labore, architecto totam repellendus quos aperiam veniam corporis,
            maiores, nihil beatae et! Modi, quis nesciunt! Aut a rem animi
            fugiat unde.
          </p>
          <div className="mt-10 flex items-center gap-5 animate-slide-in-bottom [animation-delay:200ms] ">
            <button className="rounded  bg-[rgb(253,196,53)] px-3 py-1 text-lg shadow ">
              contact
            </button>
            <button className="px-3 py-1 text-lg border-2 border-slate-900 rounded hover:border-2 hover:border-amber-800 hover:shadow hover:text-yellow-800">
              Linkden
            </button>
          </div>
        </div>
        <div class="grid place-content-center">
          <div className="h-100 w-100 animate-slide-in-right [animation-delay:200ms] rounded-full bg-amber-700"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
