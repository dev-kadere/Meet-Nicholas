import { RxAvatar } from "react-icons/rx";

const About = () => {
  return (
    <section className="container mt-10 mx-auto">
        <div className="flex items-center gap-4 justify-center">
            <RxAvatar className="text-blue-600 h-10 w-10" />
            <h2 className="text-4xl text-blue-600 font-bold">About Me</h2>
        </div>
        <div className="mt-10">
            <h2 className="mt-4 font-bold text-3xl">
                I am Nicholas Ndereba,
            </h2>
            <h3 className="mt-2 text-xl text-gray-700">
            FrontEnd web developer
            </h3>
            <p className="mt-7 text-gray-900">
                 I am a passionate web developer based in Kenya, with experience in building dynamic and responsive websites. I specialize in front-end technologies like React, Next.js, and Tailwind CSS, and I'm constantly exploring the latest tools and frameworks to stay current. My approach blends clean code with thoughtful UI/UX design to create user-friendly digital experiences. I'm a strong believer in continuous learning, collaboration, and writing code that not only works—but scales. Whether it's creating a portfolio, an e-commerce platform, or a full-stack application, I enjoy turning ideas into real, impactful products.
            </p>

        </div>
    </section>
  )
}

export default About