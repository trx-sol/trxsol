import { FiExternalLink, FiEye } from 'react-icons/fi';

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tools: ["Next.js", "Stripe", "Tailwind"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tools: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Restaurant Booking",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      tools: ["Next.js", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Educational Platform",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      tools: ["React", "Firebase", "Material-UI"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Real Estate Portal",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      tools: ["Next.js", "Supabase", "Tailwind"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Healthcare App",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      tools: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "#",
      demoUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-trx-gray max-w-2xl mx-auto">
            Showcasing our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass-effect hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-trx-blue/20 to-trx-cyan/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm text-trx-gray">
                    {project.category}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-trx-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center"
                    >
                      <FiEye className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.demoUrl}
                      className="border border-trx-cyan text-trx-cyan px-4 py-2 rounded-lg text-sm font-medium hover:bg-trx-cyan hover:text-trx-bg transition-colors flex items-center"
                    >
                      <FiExternalLink className="mr-2" />
                      Tech Used
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-trx-cyan transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="text-xs bg-trx-blue/20 text-trx-cyan px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    className="flex-1 gradient-bg text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <FiEye className="mr-2" />
                    View Live
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex-1 border border-trx-cyan text-trx-cyan py-2 rounded-lg text-sm font-medium hover:bg-trx-cyan hover:text-trx-bg transition-colors flex items-center justify-center"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
