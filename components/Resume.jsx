import React from "react";
import useDownloader from "react-use-downloader";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import links from "../constant/links";

const resume = () => {
  {
    /* 
  const { download } = useDownloader();
  const fileUrl = "/Resume.pdf";
  const filename = "Resume.pdf";*/
  }
  return (
    <div id="resume" className="max-w-[940px] mx-auto p-2 pt-[120px]">
      <h2 className="text-center mt-2">Resume</h2>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-center">Mehmet Simsek</h2>
        <div className="flex">
          {/* 
          <button
            onClick={() => download(fileUrl, filename)}
            style={{ marginRight: "1rem", color: "black" }}
          >
            <FaDownload size={20} />
          </button>*/}
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn
              size={20}
              style={{ marginRight: "1rem", backgroundColor: "transparent" }}
            />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub size={20} style={{ marginRight: "1rem" }} />
          </a>
        </div>
      </div>
      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            Web Development <span className="px-1">|</span> Backend Development
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <div className="block sm:hidden">
          <p>Web Development</p>
          <p className="py-2">Backend Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Passionate about software development with more than 5 years of
        experience in developing web applications, backend systems and software
        test automation. Possesses good communication skills, self-motivation,
        mathematical thinking; proactive, task-oriented problem solver and team
        player with good numeracy skills and the ability to quickly learn new
        technologies and systems. Ability to work independently or in a team to
        identify and solve problems, plan and complete tasks. Practical
        experience in agile development environments. Ability to deal with
        challenging situations under time pressure.
      </p>

      {/* Skills */}
      <div className="text-center py-4">
        <h5 className="text-center underline text-[20px] py-2">
          Technical Skills
        </h5>
        <h5 className="py-2 font-bold">Backend</h5>
        Java Spring Boot | Nodejs Express
        <h5 className="py-2 font-bold">Frontend</h5>
        HTML | CSS | Javascript | ReactJS | NextJS | Redux | Material UI |
        Bootstrap | Sass | Tailwind | TypeScript
        <h5 className="py-2 font-bold">Databases</h5> MySQL | MongoDB |
        PostgreSQL
        <h5 className="py-2 font-bold">Test Automation</h5>
        Selenium | TestNG | Cucumber | Rest Assured | JUnit | Appium
        <h5 className="py-2 font-bold">Tools</h5>
        Git | Github | Jira | Xray | Confluence | Postman | Swagger | OpenAPI |
        Jenkins | Docker | Maven
      </div>

      <h5 className="text-center underline text-[18px] py-4">
        Professional Experience
      </h5>
      {/* Experience 1*/}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold italic">Simpleworks Gmbh</span>
          <span className="px-2">|</span>Duisburg, DE
        </p>
        <p className="py-1 italic">Performance Engineer (2022 - Current)</p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Successful development of the whole Android test project
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Scripted unique test plans, test scripts and processes to remove
          previously known redundancies by 40% and ensure predictable results
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Development of a Dockerfile to automate the API testing process,
          increasing efficiency by 65%
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Automated process to create usage charts and increase accuracy
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Development of a Github workflow to automate app distribution
        </p>
      </div>
      {/* Experience 2*/}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold italic">Mersys LLC</span>
          <span className="px-2">|</span>USA
        </p>
        <p className="py-1 italic">QA Engineer (01/2021 - 10/2021)</p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Develop and run automated smoke and regression tests and increase test
          efficiency by 65%
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          More than 100 errors found on both server and client side
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Using Selenium WebDriver and Java Designing automation test scenarios
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Development and implementation of Page Object Model based on
          automation tests
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Used SCRUM and Agile methods and JIRA at work
        </p>
      </div>
      {/* Experience 3*/}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold italic">Turacoon GmbH</span>
          <span className="px-2">|</span>Stutgart, DE
        </p>
        <p className="py-1 italic">Software Entwickler (2020 - 2021)</p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Reworked critical modules within a sprint to rely on a centralized
          library and optimize performance by 60%
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Experience writing modular and reusable code using build tools and
          package managers
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Development of backend APIs using with MongoDB and NodeJS
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Development of interactive, responsive and scalable frontend and
          mobile applications using HTML5, CSS3, JavaScript ES6, React, Redux,
          React Native, Git & Github
        </p>
        <p className="px-7 py-1 leading-relaxed list-item list-inside">
          Participation in Daily Scrum, Sprint Planning, Sprint Review and
          Sprint Retro meetings
        </p>
      </div>
    </div>
  );
};

export default resume;
