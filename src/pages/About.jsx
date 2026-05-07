const About = () => {
  return (
    <div className="flex justify-between p-10 gap-50">
      <div className="flex items-start flex-col">
        <h1 className="text-3xl font-bold mt-5 animate-slide-in-left [animation-delay:200ms]">
          About me
        </h1>
        <p className="text-start my-5 animate-slide-in-left [animation-delay:200ms]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam unde
          est suscipit blanditiis iusto! Quam beatae voluptas dolorum ipsam
          ratione, quisquam delectus, praesentium, similique neque explicabo sit
          in suscipit sint! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Minus, iste suscipit officia ex deleniti illum, iure
          consequuntur maiores, veritatis quasi magnam nesciunt repellat
          inventore adipisci eius. Voluptas est repudiandae nostrum.
        </p>
        <button className="my-5 rounded  bg-[rgb(253,196,53)] px-3 py-1 text-lg shadow animate-slide-in-bottom [animation-delay:200ms]">
          contact
        </button>
      </div>
      <div className="animate-slide-in-right [animation-delay:200ms]">
        <div className="w-70 h-70 bg-amber-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
