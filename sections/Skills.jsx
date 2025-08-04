import { FaLaptopCode } from "react-icons/fa6";
import { FaHtml5, FaCss3, FaNodeJs, FaGithub, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "CSS",
    icon: <FaCss3 className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "Vue.js",
    icon: <FaVuejs className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-blue-600 h-8 w-8" />,
  },
  { name: "GitHub", icon: <FaGithub className="text-blue-600 h-8 w-8" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-blue-600 h-8 w-8" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-blue-600 h-8 w-8" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto mt-10">
      <div className="flex items-center gap-4 justify-center">
        <FaLaptopCode className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">My Skills & Tools</h2>
      </div>
      <div className="grid grid-cols-3 mt-10 border rounded-2xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col m-4 border rounded-2xl gap-3 items-center p-4"
          >
            {skill.icon}
            <span className="mt-2 text-blue-600 font-semibold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
