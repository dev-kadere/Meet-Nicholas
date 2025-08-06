import { FaProjectDiagram } from "react-icons/fa";
import Card from "../componets/Card";

const projects = [
    {
    image: "/laxint.png",
    title: "Laxint bulk sms",
    description:
      "A bulk SMS service that allows users to send messages to multiple recipients efficiently. Bult on angular ,java",
  },
  {
    image: "/internet.png",
    title: "internet monitoring",
    description:
      "This is a monitoring tool designed to detect and record internet disconnections in real-time.",
  },
  {
    image: "/anita.png",
    title: "Anita Restaurant website",
    description:
      "A restaurant website that showcases the menu, location, and contact information. Built with React and Tailwind CSS.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto mt-10 px-6 py-5">
      <div className="flex items-center gap-4 justify-center">
        <FaProjectDiagram className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center justify-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
