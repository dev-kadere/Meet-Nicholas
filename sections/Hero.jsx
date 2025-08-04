import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-white h-7 w-7" />,
      url: "/linkedin",
    },
    {
      icon: <FaWhatsapp className="text-white h-7 w-7" />,
      url: "/whatsapp",
    },
    {
      icon: <FaTwitter className="text-white h-7 w-7" />,
      url: "/twitter",
    },
  ];

  return (
    <section id="home" className=" ">
      <div className="container mx-auto">
        <div className="mt-10 text-5xl font-bold leading-15">
          <h2 className="">Hi There, </h2>
          <h2>
            I'm <span className="text-blue-600">Nicholas Ndereba.</span>
          </h2>
          <p> I am Web Developer</p>
        </div>
        <div className="mt-10">
          <button className="bg-blue-600  text-white py-2 rounded-full text-xl px-5">
            About Me
          </button>
        </div>
        <div className="mt-10 flex gap-5">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="h-15 w-15 rounded-full bg-blue-600 flex items-center justify-center"
            >
              <Link
                key={index}
                href={link.url}
                className="flex items-center justify-center"
              >
                {link.icon}
              </Link>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500 mt-15 h-100 w-100 rounded-full flex items-center justify-center mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
