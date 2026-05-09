const Contact = () => {
  return (
<<<<<<< Updated upstream
    <div className="max-w-2xl mx-auto py-20 px-6 text-center">
      <h1 className="text-5xl font-serif font-bold mb-6">Let's Connect</h1>
      <p className="text-gray-500 mb-10">
        I'm currently looking for new opportunities. Feel free to drop a
        message!
      </p>
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>
        <button className="w-full bg-black text-white py-4 rounded-md font-bold hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>
=======
    <div className="max-w-4xl my-8 mx-auto grid grid-cols-2  rounded-2xl border-primary ">
      <div className="grid  border-2 dark:border-primary place-content-center bg-primary rounded-bl-2xl rounded-tl-2xl px-8 transition-colors duration-500 animate-slide-in-left [animation-delay:500ms] ">
        <h1 className="text-5xl font-bold mt-3 mb-4 text-background dark:text-background  ">
          Let's{" "}
          <span className="text-foreground dark:text-foreground">Connect</span>
        </h1>

        <p className="text-foreground dark:text-muted mb-10 leading-relaxed ">
          I'm currently open to new opportunities. Whether you have a project in
          mind or just want to say hi — my inbox is always open!
        </p>
      </div>

      <div className="p-5 border-primary border-t-2 border-b-2 border-r-2 rounded-tr-2xl rounded-br-2xl animate-slide-in-right [animation-delay:500ms] ">
        <form className="space-y-5 text-left ">
          <div>
            {/* <label className="block text-sm font-medium text-primary dark:text-primary mb-1.5">
              Name
            </label> */}
            <input
              type="text"
              placeholder="Shailesh"
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>

          <div>
            {/* <label className="block text-sm font-medium text-primary dark:text-primary mb-1.5">
              Email
            </label> */}
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground py-3.5 rounded-md font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            Send Message →
          </button>
        </form>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Contact;
