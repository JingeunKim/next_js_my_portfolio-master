"use client";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[75%] mx-auto mt-24">
          <div className="text-5xl font-bold pl-52 mb-8">About</div>
          <p className="w-[70%] mx-auto text-lg font-light leading-10 whitespace-pre-line">
            I am{" "}
            <a
              href="https://t.me/happy1998071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold"
            >
              Rakhmatov Azam
            </a>{" "}
            a front-end developer who develops web applications with the user
            experience as the top priority.
            {"\n\n"}I mainly use modern frameworks and libraries such as React
            and Vue.js including JavaScript, and create intuitive and responsive
            interfaces using various tools such as HTML, CSS, and Tailwind CSS.
            {"\n"}I value web accessibility, performance optimization, and
            design consistency, and focus on designing UI/UX that users can
            easily understand and use.
            {"\n\n"}
            When working on a project, I actively communicate with the team and
            always think about ways to maximize efficiency in the
            problem-solving process.{"\n"}I enjoy learning new technologies and
            quickly applying them to practice, and I strive to continuously grow
            myself according to changing trends.
            {"\n\n  "}
            In addition, I aim to provide high-quality web services that satisfy
            both users and clients by understanding the needs of various users
            and reflecting them through detailed design and implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
