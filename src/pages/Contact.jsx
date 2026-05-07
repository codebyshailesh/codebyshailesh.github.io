const Contact = () => {
  return (
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
    </div>
  );
};

export default Contact;
