function Projects() {
  const projects = [
    {
      title: "Chat App",
      description: "An app for chatting ,secure , better ui design",
      tech: ["NextJS", "subabase"],
      img: "chatapp.png",
      link: "https://thechatly.vercel.app/",
    },
    {
      title: "QR Generator",
      description: "An app for chatting ,secure , better ui design",
      tech: ["NextJS", "App Router","qrgenerator"],
      img: "qrapp.png",
      link: "https://madeqr.vercel.app/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto ">
      {/* Heading */}
      <h1 className="text-4xl font-bold mt-3 mb-2 text-foreground animate-slide-in-bottom [animation-delay:200ms]">
        Projects
      </h1>

      <div className="w-12 h-1 bg-primary rounded mb-10 animate-slide-in-bottom [animation-delay:300ms]" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-row rounded-2xl overflow-hidden border border-border shadow-sm bg-card animate-slide-in-bottom transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: `${400 + index * 100}ms` }}
          >
            {/* Left Banner */}
            <div className=" w-[45%] bg-primary dark:bg-primary/80 transition-colors duration-500">
              <img
                src={project.img}
                alt="chat app image"
                className=" h-full w-full "
              />
            </div>

            {/* Content */}
            <div className=" w-[55%] p-6 flex flex-col gap-4">
              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>

                <p className="text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium px-3 py-1 rounded-full bg-background text-primary border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-auto">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
