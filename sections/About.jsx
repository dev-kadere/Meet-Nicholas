import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

const About = () => {
  return (
    <section id="about" className="container md:mt-10 mx-auto py-20 px-6">
      <div className="flex items-center gap-4 justify-center">
        <RxAvatar className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">About Me</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className=" col-span-2">
          <h2 className="mt-4 font-bold text-3xl">I am Nicholas Ndereba,</h2>
          <h3 className="mt-2 text-2xl md:text-3xl text-blue-600">
            Frontend web developer
          </h3>
          <p className="mt-4 text-lg md:text-xl text-gray-900">
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
          <div className="mt-8 justify-center">
            <Link href="/">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white py-2 px-6 rounded-full text-lg shadow">
                resume
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="hidden h-64 w-64 md:h-100 md:w-100 bg-blue-600 md:block "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
