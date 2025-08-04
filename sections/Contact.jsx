import { FaHeadset } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdOutlinePermIdentity, MdOutlineMailOutline } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-10">
      <div className="flex items-center gap-4 justify-center">
        <FaHeadset className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">Get In Touch</h2>
      </div>
      <div className="mt-10 shadow border rounded-2xl">
        <div className="grid grid-cols-2 gap-4 p-6">
          <Image src="/image.jpeg" alt="image one" width={500} height={500} />
          <form className="flex flex-col gap-4 ">
            <div className="relative ">
              <MdOutlinePermIdentity className="absolute left-2 top-1/2 h-6 w-6 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Name"
                className="border pl-10 p-2 rounded-md h-14 w-full"
              />
            </div>
            <div className="relative mb-4">
              <MdOutlineMailOutline className="absolute left-2 top-1/2 h-6 w-6 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="border pl-10 p-2 rounded-md h-14 w-full"
              />
            </div>
            <div className="relative mb-4">
              <LuMessageCircleMore className="absolute left-2 top-5 h-6 w-6 transform -translate-y-1/2 text-gray-500" />
              <textarea
                placeholder="Message"
                className="border pl-10 p-2 rounded-md h-32 w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-1/2 p-2 rounded-md flex items-center gap-2 justify-center "
            >
              Send
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
