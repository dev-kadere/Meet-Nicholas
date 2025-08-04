import { FaHeadset } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdOutlinePermIdentity, MdOutlineMailOutline } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-10 px-6 py-5">
      <div className="flex items-center gap-4 justify-center">
        <FaHeadset className="text-blue-600 h-10 w-10" />
        <h2 className="text-4xl text-blue-600 font-bold">Get In Touch</h2>
      </div>

      <div className="mt-10 shadow border rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="flex items-center justify-center">
            <Image
              src="/person.png"
              alt="Person"
              width={450}
              height={450}
              priority
              placeholder="empty"
            />
          </div>

          <form className="flex flex-col justify-center gap-4">
            {/* Name Input */}
            <div className="relative">
              <MdOutlinePermIdentity className="absolute left-3 top-1/2 h-6 w-6 transform -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                placeholder="Name"
                className="border pl-12 p-2 rounded-md h-14 w-full placeholder:text-blue-600 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <MdOutlineMailOutline className="absolute left-3 top-1/2 h-6 w-6 transform -translate-y-1/2 text-blue-600" />
              <input
                type="email"
                placeholder="Email"
                className="border pl-12 p-2 rounded-md h-14 w-full placeholder:text-blue-600 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <LuMessageCircleMore className="absolute left-3 top-5 h-6 w-6 transform -translate-y-1/2 text-blue-600" />
              <textarea
                placeholder="Message"
                className="border pl-12 p-2 rounded-md h-32 w-full resize-none placeholder:text-blue-600 focus:outline-none focus:border-blue-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white w-1/2 p-3 rounded-md flex items-center gap-2 justify-center hover:bg-blue-700 transition-colors"
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
