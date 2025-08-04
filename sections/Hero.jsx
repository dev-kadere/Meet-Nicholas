import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-white h-6 w-6" />,
      url: "/linkedin",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp className="text-white h-6 w-6" />,
      url: "/whatsapp",
      label: "WhatsApp",
    },
    {
      icon: <FaTwitter className="text-white h-6 w-6" />,
      url: "/twitter",
      label: "Twitter",
    },
  ];

  return (
    <section id="home" className="container mx-auto px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 items-center md:mt-20">
        <div className="flex justify-center">
          <div className="h-64 w-64 md:h-100 md:w-100  rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="/passport.jpg"
              alt="Nicholas Ndereba"
              width={500}
              height={500}
              className="rounded-full"
              priority
              placeholder="empty"
            />
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold space-y-2">
            <h2>Hello,</h2>
            <h2>
              I'm <span className="text-blue-600">Nicholas Ndereba</span>
            </h2>
            <p className="text-lg md:text-3xl font-normal text-gray-700 mt-4">
              A passionate Web Developer focused on building responsive and
              scalable web applications.
            </p>
          </div>

          <div className="mt-8 flex flex-row gap-20 ">
            <Link href="#about">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white py-2 px-6 rounded-full text-lg shadow">
                About Me
              </button>
            </Link>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
