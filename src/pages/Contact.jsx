const Contact = () => {
  return (
    <div className="max-w-4xl my-8 mx-auto grid grid-cols-2 rounded-2xl border-2 border-primary overflow-hidden">
      {/* Left Side */}
      <div className="grid place-content-center bg-primary px-8 transition-colors duration-500 animate-slide-in-left [animation-delay:500ms]">
        <h1 className="text-5xl font-bold mt-3 mb-4 text-background dark:text-background">
          Let's{" "}
          <span className="text-foreground dark:text-foreground">Connect</span>
        </h1>
        <p className="text-foreground dark:text-muted mb-10 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a project in
          mind or just want to say hi — my inbox is always open!
        </p>
      </div>

      {/* Right Side */}
      <div className="p-5 animate-slide-in-right [animation-delay:500ms]">
        <form className="space-y-5 text-left">
          <div>
            <input
              type="text"
              placeholder="Shailesh"
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>
          <div>
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
    </div>
  );
};

export default Contact;
