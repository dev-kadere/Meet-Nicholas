import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-5">
      <div className="flex items-center gap-4 justify-center">
        <FaProjectDiagram className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Project items go here */}
      </div>
    </section>
  );
};

export default Projects;
