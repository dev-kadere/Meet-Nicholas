import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 px-6 md:mt-10">
      {/* Section Heading */}
      <div className="flex items-center gap-4 justify-center mb-10">
        <RxAvatar className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Text Section */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">I am Nicholas Ndereba,</h2>
          <h3 className="text-2xl md:text-3xl text-blue-600 mt-2">
            Frontend Web Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-900 mt-4">
            I am a passionate web developer based in Kenya, with experience in
            building dynamic and responsive websites. I specialize in front-end
            technologies like React, Next.js, and Tailwind CSS, and I'm
            constantly exploring the latest tools and frameworks to stay
            current. My approach blends clean code with thoughtful UI/UX design
            to create user-friendly digital experiences. I'm a strong believer
            in continuous learning, collaboration, and writing code that not
            only works—but scales. Whether it's creating a portfolio, an
            e-commerce platform, or a full-stack application, I enjoy turning
            ideas into real, impactful products.
          </p>

          {/* Resume Button */}
          <div className="mt-8 flex justify-start">
            <a
                href="/NICHOLAS NDEREBA CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg shadow transition duration-300 inline-block"
              >
                View Resume
              </a>

          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center  h-[400px] w-[400px] relative">
          <Image
            src="/passport.jpg"
            alt="Nicholas Ndereba"
            fill
            className="rounded-2xl object-contain"
            priority
            placeholder="empty"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
